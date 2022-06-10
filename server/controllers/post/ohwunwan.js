const { Ohwunwan } = require('../../models');


module.exports = {
    //ohwunwan게시물 조회
    get: async (req, res) => {

    },
    //ohwunwan게시물 생성
    post: async (req, res) => {
        try {
            const { user_id, text_content } = req.body
            // console.log('::::::::::::::::user_id:', user_id)
            const { location } = req.file
            //console.log(':::::::::::::location:',location)
            if (!user_id && !text_content && !location) return res.status(400).json({ message: 'Bad Request!' })
            const post_info = {
                user_id,
                text_content,
                picture: location
            }
            await Ohwunwan.create(post_info);

            res.status(201).json({ message: 'The post has been created' })
        } catch (err) {
            res.status(500).json({ message: 'Server Error!' })
        }
    },//ohwunwan게시묵 작성
    patch: () => { },//ohwunwan게시물 수정
    delete: () => { },//ohwunwan게시물 삭제
}


