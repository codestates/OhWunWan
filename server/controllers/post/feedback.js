const { Feedback, Feedback_comment, Feedback_like, User } = require('../../models');

module.exports = {
    //feedback게시물 조회
    get: async (req, res) => {

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
            //잘못된 요청
            if (!req.body.feedback_id) return res.status(400).json({ message: 'Bad Request!' });
            //동영상 내용 모두 바꾸는 경우
            if (req.file.location && req.body.text_content) {
                const { feedback_id, text_content } = req.body
                const { location } = req.file
                await Feedback.update(
                    {
                        text_content,
                        picture: location
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
            else if (req.file.location) {
                const { feedback_id } = req.body
                const { location } = req.file
                await Feedback.update(
                    {
                        picture: location
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

            Feedback.destroy({
                where: { id: feedback_id },
            });
            return res.json({ message: 'The post has been deleted' })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }
    },
}