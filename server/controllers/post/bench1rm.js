const { Bench_1rm, Bench_1rm_comment, Bench_1rm_respect, User } = require('../../models');

module.exports={
    //bench_1rm게시물 조회
    get:async(req,res)=>{
        try {
            //조회할 게시물 페이지들
            const { count } = req.params

            
            //bench__1rm게시물+user정보 
            const bench_1rms = await Bench_1rm.findAll({
                attributes: ['id', 'video', 'text_content','kg', 'createdAt'],//bench_1rm 컬럼들
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
            const bench_1rm_id = bench_1rms.map(item => item.id)
            console.log('::::::bench_1rm_id:',bench_1rm_id)




            // 조회한 게시물들의 댓글 + 유저정보
            const bench_1rm_comments = await Bench_1rm_comment.findAll({
                where: { bench_1rm_id },
                attributes: ['id', 'bench_1rm_id', 'text_content','selection', 'createdAt'],
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
            const bench_1rm_respects = await Bench_1rm_respect.findAll({
                where: { bench_1rm_id },
                attributes: ['id', 'user_id', 'bench_1rm_id', 'createdAt'],
                raw: true,//dataValues만 가져오기
            })
            console.log(':::::::::::::bench_1rm_respects:', bench_1rm_respects)



            //조회한게시물+유저정보에 댓글+유저정보 push하기
            for (const bench_1rm of bench_1rms) {
                bench_1rm.comment = []
                bench_1rm.respect = []
                for (const comment of bench_1rm_comments) {
                    if (bench_1rm.id === comment.bench_1rm_id) {
                        bench_1rm.comment.push(comment)
                    }
                }
                for (const respect of bench_1rm_respects) {
                    if (bench_1rm.id === respect.bench_1rm_id) {
                        bench_1rm.respect.push(respect)
                    }
                }

            }

            console.log(':::::::::::::bench_1rms:', bench_1rms)


            return res.json({ message: 'ok', data: bench_1rms })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }
    }, 
    //bench_1rm게시묵 작성
    post:async(req,res)=>{

    },
    //bench_1rm게시물 수정
    patch:async(req,res)=>{

    },
    //bench_1rm게시물 삭제
    delete:async(req,res)=>{

    },
}