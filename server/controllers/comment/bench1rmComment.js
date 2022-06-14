const { Bench_1rm_comment } = require('../../models')

module.exports = {
    //bench_1rm_comment 작성
    post: async (req, res) => {
        try {
            if (!(req.body.bench_1rm_id && req.body.user_id && req.body.text_content)) return res.status(400).json({ message: 'Bad Request!' })

            const { bench_1rm_id, user_id, text_content } = req.body
            await Bench_1rm_comment.create({ bench_1rm_id, user_id, text_content })
            res.json({ message: 'The comment has been created' })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }
    },

    //bench_1rm_comment 작성
    patch: async (req, res) => {
        try {
            if (!(req.body.bench_1rm_comment_id && req.body.text_content)) return res.status(400).json({ message: 'Bad Request!' })

            const { bench_1rm_comment_id, text_content } = req.body
            await Bench_1rm_comment.update(
                {
                    text_content,
                },
                {
                    where: { id: bench_1rm_comment_id, }
                },
            );
            return res.json({ message: 'The comment has been changed' })
        } catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Server Error!' })
        }
    },

    //bench_1rm_comment 수정
    delete: async (req, res) => {
        try {
            const { bench_1rm_comment_id } = req.params
            await Bench_1rm_comment.destroy({
                where: { id: bench_1rm_comment_id },
            });
            return res.json({ message: 'The comment has been deleted' })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }

    },
}