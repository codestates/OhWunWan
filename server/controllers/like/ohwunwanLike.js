const { Ohwunwan_like } = require('../../models')

module.exports = {
    //ohwunwan 게시물 좋아요
    post: async (req, res) => {
        try {
            if (!(req.body.ohwunwan_id && req.body.user_id)) return res.status(400).json({ message: 'Bad Request!' })
            const { ohwunwan_id, user_id } = req.body
            await Ohwunwan_like.create({ ohwunwan_id, user_id })
            return res.status(201).json({ message: 'The like has been done' })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }

    },
    //ohwunwan 게시물 좋아요 취소
    delete: async (req, res) => {
        try {
            const { ohwunwan_like_id } = req.params
            await Ohwunwan_like.destroy({
                where: { id: ohwunwan_like_id },
            });
            return res.json({ message: 'The like has been deleted' })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }

    }
}

