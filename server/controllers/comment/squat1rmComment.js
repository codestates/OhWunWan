const { Squat_1rm_comment } = require('../../models')

module.exports = {
    //squat_1rm_comment 작성
    post: async (req, res) => {
        try {
            if (!(req.body.squat_1rm_id && req.body.user_id && req.body.text_content)) return res.status(400).json({ message: 'Bad Request!' })

            const { squat_1rm_id, user_id, text_content } = req.body
            await Squat_1rm_comment.create({ squat_1rm_id, user_id, text_content })
            res.json({ message: 'The comment has been created' })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }
    },

    //squat_1rm_comment 작성
    patch: async (req, res) => {
        try {
            if (!(req.body.squat_1rm_comment_id && req.body.text_content)) return res.status(400).json({ message: 'Bad Request!' })

            const { squat_1rm_comment_id, text_content } = req.body
            await Squat_1rm_comment.update(
                {
                    text_content,
                },
                {
                    where: { id: squat_1rm_comment_id, }
                },
            );
            return res.json({ message: 'The comment has been changed' })
        } catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Server Error!' })
        }
    },

    //squat_1rm_comment 수정
    delete: async (req, res) => {
        try {
            const { squat_1rm_comment_id } = req.params
            await Squat_1rm_comment.destroy({
                where: { id: squat_1rm_comment_id },
            });
            return res.json({ message: 'The comment has been deleted' })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }

    },
}