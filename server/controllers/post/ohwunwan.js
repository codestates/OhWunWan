const { Ohwunwan } = require('../../models');


module.exports = {
    //ohwunwan게시물 조회
    get: async (req, res) => {
        
    },
    //ohwunwan게시물 생성
    post: async (req, res) => {
        const { user_id, text_content } = req.body
        console.log('::::::::::::::::user_id:', user_id)
        console.log(req.file)
        const { path } = req.file
        const post_info = {
            user_id,
            text_content,
            picture: path
        }
        Ohwunwan.create(post_info);
        res.json({ message: 'ok' })
    },//ohwunwan게시묵 작성
    patch: () => { },//ohwunwan게시물 수정
    delete: () => { },//ohwunwan게시물 삭제
}


