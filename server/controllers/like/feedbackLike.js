const { Feedback_like } = require('../../models')
module.exports = {
    //feedback 게시물 좋아요  
    post: async (req, res) => {
        try {
            console.log(req.body.feedback_id,req.body.user_id)
            if (!(req.body.feedback_id && req.body.user_id)) return res.status(400).json({ message: 'Bad Request!' })
            const { feedback_id, user_id } = req.body
            await Feedback_like.create({ feedback_id, user_id })
            return res.status(201).json({ message: 'The like has been done' })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }
    },
    //feedback 게시물 좋아요 취소
    delete: async (req, res) => {
        try {
            const { feedback_like_id } = req.params
            await Feedback_like.destroy({
                where: { id: feedback_like_id },
            });
            return res.json({ message: 'The like has been deleted' })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }
    }
}