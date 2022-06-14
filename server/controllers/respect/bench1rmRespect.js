const { Bench_1rm_respect } = require('../../models');
module.exports={
    //bench_1rm_respect 생성
    post:async(req,res)=>{
        try {
            console.log(req.body.bench_1rm_id,req.body.user_id)
            if (!(req.body.bench_1rm_id && req.body.user_id)) return res.status(400).json({ message: 'Bad Request!' })
            const { bench_1rm_id, user_id } = req.body
            await Bench_1rm_respect.create({ bench_1rm_id, user_id })
            return res.status(201).json({ message: 'The respect has been done' })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }

    },
}


