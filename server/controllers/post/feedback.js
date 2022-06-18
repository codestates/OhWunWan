const { Feedback, Feedback_comment, Feedback_like, User } = require('../../models');

module.exports = {
    //feedback게시물 조회
    get: async (req, res) => {
        try {
            //조회할 게시물 페이지들
            const { count } = req.params


            //피드백게시물+user정보 
            const feedbacks = await Feedback.findAll({
                attributes: ['id', 'video', 'text_content', 'createdAt'],//Feedback 컬럼들
                include: [
                    {
                        model: User,
                        attributes: ['nickname', 'profile_picture'],
                        require: true,
                    },
                ],
                order: [['id', 'DESC']],//정렬 id순으로 꺼꾸로
                raw: true,//dataValues만 가져오기
                limit: 5,//몇개불러올껀가
                offset: count * 5,//어디서부터시작할껀지
            });




            //조회한 게시물들의 고유번호값들 맵
            const feedback_id = feedbacks.map(item => item.id)
            console.log('::::::feedback_id:', feedback_id)




            // 조회한 게시물들의 댓글 + 유저정보
            const feedback_comments = await Feedback_comment.findAll({
                where: { feedback_id },
                attributes: ['id', 'feedback_id', 'text_content', 'selection', 'createdAt'],
                include: [
                    {
                        model: User,
                        attributes: ['id', 'nickname', 'profile_picture'],
                        require: true,
                    }
                ],
                raw: true,//dataValues만 가져오기
            })




            //조회한 게시물들 라이크 
            const feedback_likes = await Feedback_like.findAll({
                where: { feedback_id },
                attributes: ['id', 'user_id', 'feedback_id', 'createdAt'],
                raw: true,//dataValues만 가져오기
            })
            console.log(':::::::::::::feedback_likes:', feedback_likes)



            //조회한게시물+유저정보에 댓글+유저정보 push하기
            for (const feedback of feedbacks) {
                feedback.comment = []
                feedback.like = []
                for (const comment of feedback_comments) {
                    if (feedback.id === comment.feedback_id) {
                        feedback.comment.push(comment)
                    }
                }
                for (const like of feedback_likes) {
                    if (feedback.id === like.feedback_id) {
                        feedback.like.push(like)
                    }
                }

            }

            console.log(':::::::::::::feedbacks:', feedbacks)


            return res.json({ message: 'ok', data: feedbacks })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }
    },
    //feedback게시묵 작성
    post: async (req, res) => {
        try {
            // 셋중에 하나라도 없으면 잘못된 요청
            if (!(req.body.user_id && req.body.text_content && req.file.location)) return res.status(400).json({ message: 'Bad Request!' })
            const { user_id, text_content } = req.body
            // console.log('::::::::::::::::user_id:', user_id, text_content)
            const { location } = req.file
            //console.log('location:::::::::::',location)
            const post_info = {
                user_id,
                text_content,
                video: location
            }
            await Feedback.create(post_info);
            //   console.log(new_feedback)
            return res.status(201).json({ message: 'The post has been created' })
        } catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Server Error!' })
        }
    },
    //feedback게시물 수정
    patch: async (req, res) => {
        try {
            console.log(req.body)
            //잘못된 요청
            if (!req.body.feedback_id) return res.status(400).json({ message: 'Bad Request!' });
            //동영상 내용 모두 바꾸는 경우
            if (req.file && req.body.text_content) {
                const { feedback_id, text_content } = req.body
                const { location } = req.file
                await Feedback.update(
                    {
                        text_content,
                        video: location
                    },
                    {
                        where: { id: feedback_id, }
                    },
                );
                return res.json({ message: 'The post has been changed' })
            }
            //텍스트만 바꾸는경우
            else if (req.body.text_content) {
                const { feedback_id, text_content } = req.body
                const changed_feedback = await Feedback.update(
                    {
                        text_content,
                    },
                    {
                        where: { id: feedback_id, }
                    },
                );
                return res.json({ message: 'The post has been changed' })
            }
            //동영상만 바꾸는경우
            else if (req.file) {
                const { feedback_id } = req.body
                const { location } = req.file
                await Feedback.update(
                    {
                        video: location
                    },
                    {
                        where: { id: feedback_id, }
                    },
                );
                return res.json({ message: 'The post has been changed' })
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }
    },
    //feedback게시물 삭제
    delete: async (req, res) => {
        try {
            const { feedback_id } = req.params

            await Feedback.destroy({
                where: { id: feedback_id },
            });
            return res.json({ message: 'The post has been deleted' })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }
    },
}