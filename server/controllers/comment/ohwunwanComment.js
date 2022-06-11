const { Ohwunwan_comment } = require('../../models')
module.exports = {
    //ohwunwan_comment 작성
    post: async (req, res) => {
        try {
            if (!(req.body.ohwunwan_id && req.body.user_id && req.body.text_content)) return res.status(400).json({ message: 'Bad Request!' })

            const { ohwunwan_id, user_id, text_content } = req.body
            await Ohwunwan_comment.create({ ohwunwan_id, user_id, text_content })
            res.json({ message: 'The comment has been created' })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }
    },

    //ohwunwan_comment 수정
    patch: () => { },
    //ohwunwan_comment 삭제
    delete: () => { },
}