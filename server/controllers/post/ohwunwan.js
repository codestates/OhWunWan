const { Ohwunwan, Ohwunwan_comment, Ohwunwan_like, User } = require('../../models');



module.exports = {
    //ohwunwan게시물 조회
    get: async (req, res) => {
        try {
            //조회할 게시물 페이지들
            const { count } = req.params


            //오운완게시물+user정보 
            const ohwunwans = await Ohwunwan.findAll({
                attributes: ['id', 'picture', 'text_content', 'createdAt'],//ohwunwan 컬럼들
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
            const ohwunwan_id = ohwunwans.map(item => item.id)
            //console.log(ohwunwan_id)




            // 조회한 게시물들의 댓글 + 유저정보
            const ohwunwan_comments = await Ohwunwan_comment.findAll({
                where: { ohwunwan_id },
                attributes: ['id', 'ohwunwan_id', 'text_content', 'createdAt'],
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
            const ohwunwan_likes = await Ohwunwan_like.findAll({
                where: { ohwunwan_id },
                attributes: ['id', 'user_id', 'ohwunwan_id', 'createdAt'],
                raw: true,//dataValues만 가져오기
            })
            //console.log(':::::::::::::ohwunwan_likes:', ohwunwan_likes)



            //조회한게시물+유저정보에 댓글+유저정보 push하기
            for (const ohwunwan of ohwunwans) {
                ohwunwan.comment = []
                ohwunwan.like = []
                for (const comment of ohwunwan_comments) {
                    if (ohwunwan.id === comment.ohwunwan_id) {
                        ohwunwan.comment.push(comment)
                    }
                }
                for (const like of ohwunwan_likes) {
                    if (ohwunwan.id === like.ohwunwan_id) {
                        ohwunwan.like.push(like)
                    }
                }

            }

            //console.log(':::::::::::::ohwunwans:', ohwunwans)


            return res.json({ message: 'ok', data: ohwunwans })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }

    },


    //ohwunwan게시물 생성
    post: async (req, res) => {
        try {console.log("포스트 요청!!!!!!",req.file)
            if (!(req.body.user_id && req.body.text_content && req.file.location)) return res.status(400).json({ message: 'Bad Request!' })
            const { user_id, text_content } = req.body
            //console.log('::::::::::::::::user_id:', user_id, text_content)
            const { location } = req.file
            //console.log(':::::::::::::location:', location)
            const post_info = {
                user_id,
                text_content,
                picture: location
            }
            await Ohwunwan.create(post_info);

            return res.status(201).json({ message: 'The post has been created' })
        }
        catch (err) {
            return res.status(500).json({ message: 'Server Error!' })
        }
    },



    //ohwunwan게시물 수정
    patch: async (req, res) => {
        try { console.log(req.body)
            //잘못된 요청
            if (!req.body.ohwunwan_id) return res.status(400).json({ message: 'Bad Request!' });
            //사진 내용 모두 바꾸는 경우
            if (req.file && req.body.text_content) {
                const { ohwunwan_id, text_content } = req.body
                const { location } = req.file
                await Ohwunwan.update(
                    {
                        text_content,
                        picture: location
                    },
                    {
                        where: { id: ohwunwan_id, }
                    },
                );
                return res.json({ message: 'The post has been changed' })
            }
            //텍스트만 바꾸는경우
            else if (req.body.text_content) {
                const { ohwunwan_id, text_content } = req.body
                await Ohwunwan.update(
                    {
                        text_content,
                    },
                    {
                        where: { id: ohwunwan_id, }
                    },
                );
                return res.json({ message: 'The post has been changed' })
            }
            //사진만 바꾸는경우
            else if (req.file) {
                const { ohwunwan_id } = req.body
                const { location } = req.file
                await Ohwunwan.update(
                    {
                        picture: location
                    },
                    {
                        where: { id: ohwunwan_id, }
                    },
                );
                return res.json({ message: 'The post has been changed' })
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }
    },

    //ohwunwan게시물 삭제
    delete: async (req, res) => {
        try {
            const { ohwunwan_id } = req.params
            await Ohwunwan.destroy({
                where: { id: ohwunwan_id },
            });
            return res.json({ message: 'The post has been deleted' })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }
    },
}



