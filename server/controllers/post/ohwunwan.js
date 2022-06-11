const { Ohwunwan, Ohwunwan_comment, Ohwunwan_like, User } = require('../../models');
const { Op } = require('sequelize');


module.exports = {
    //ohwunwan게시물 조회
    get: async (req, res) => {
        try {
            const { count } = req.params
           
            const ohwunwan_count = await Ohwunwan.count()
            console.log(ohwunwan_count)
            const ohwunwans = await Ohwunwan.findAll({
                attributes: ['id', 'picture', 'text_content', 'createdAt'],//ohwunwan 컬럼들
                include: [
                    {
                        model: User,
                        attributes: ['nickname', 'profile_picture'],
                        require: true,
                    },
                    {
                        model: Ohwunwan_comment,
                        attributes: ['id', 'text_content', 'createdAt',/*'user_id'*/],
                        require: true,
                        include: [{
                            model: User,
                            attributes: ['id', 'nickname', 'profile_picture'],
                            require: true,
                        }]
                    },
                    {
                        model: Ohwunwan_like,
                        attributes: ['id'],
                        require: true,

                    }
                ],

                order: [['id', 'DESC']],//정렬 id순으로 꺼꾸로
                raw: true,//dataValues만 가져오기
                limit: 5,//몇개불러올껀가
                offset: count * 5,//어디서부터시작할껀지
            });

            console.log(ohwunwans)
            return res.json({ message: 'ok', data: ohwunwans })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }

    },


    //ohwunwan게시물 생성
    post: async (req, res) => {
        try {
            if (!Boolean(req.body.user_id && req.body.text_content && req.file.location)) return res.status(400).json({ message: 'Bad Request!' })
            const { user_id, text_content } = req.body
            console.log('::::::::::::::::user_id:', user_id, text_content)
            const { location } = req.file
            console.log(':::::::::::::location:', location)
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
        //잘못된 요청
        try {
            if (!req.body.ohwunwan_id) return res.status(400).json({ message: 'Bad Request!' });
            //사진 내용 모두 바꾸는 경우
            if (req.file.location && req.body.text_content) {
                const { ohwunwan_id, text_content } = req.body
                const { location } = req.file
                const changed_ohwunwan = await Ohwunwan.update(
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
                const changed_ohwunwan = await Ohwunwan.update(
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
            else if (req.file.location) {
                const { ohwunwan_id } = req.body
                const { location } = req.file
                const changed_ohwunwan = await Ohwunwan.update(
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
    delete: (req, res) => {
        try {
            const { ohwunwan_id } = req.params
            
            Ohwunwan.destroy({
                where: { id: ohwunwan_id },
            });
            return res.json({ message: 'The post has been deleted' })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }

    },
}



