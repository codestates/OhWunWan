const {
    Bench_1rm, Bench_1rm_comment, Bench_1rm_respect,
    Dead_1rm, Dead_1rm_comment, Dead_1rm_respect,
    Squat_1rm, Squat_1rm_comment, Squat_1rm_respect,
    Ohwunwan, Ohwunwan_comment, Ohwunwan_like,
    Feedback, Feedback_comment, Feedback_like,
    User
} = require('../../models');


module.exports = {
//user가 작성한ohwunwan 게시물 들고오기
    ohwunwan: async (req, res) => {
        const { user_id } = req.params
        // console.log(user_id)
        const ohwunwans = await Ohwunwan.findAll({
            where: { user_id },
            attributes: ['id', 'picture', 'text_content', 'createdAt'],//ohwunwan 컬럼들
            include: [
                {
                    model: User,
                    attributes: ['nickname', 'profile_picture'],
                    require: true,
                },
            ],
            order: [['id', 'DESC']],//정렬 id순으로 꺼꾸로
            raw: true,//dataValues만 가져오기
            // limit: 5,//몇개불러올껀가
            // offset: count * 5,//어디서부터시작할껀지
        });
        // console.log('::::::::::ohwunwans',ohwunwans)
        //조회한 게시물들의 고유번호값들 맵
        const ohwunwan_id = ohwunwans.map(item => item.id)
        //   console.log(ohwunwan_id)




        // 조회한 게시물들의 댓글 + 유저정보
        const ohwunwan_comments = await Ohwunwan_comment.findAll({
            where: { ohwunwan_id },
            attributes: ['id', 'ohwunwan_id', 'text_content', 'createdAt'],
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
        const ohwunwan_likes = await Ohwunwan_like.findAll({
            where: { ohwunwan_id },
            attributes: ['id', 'user_id', 'ohwunwan_id', 'createdAt'],
            raw: true,//dataValues만 가져오기
        })
        //   console.log(':::::::::::::ohwunwan_likes:', ohwunwan_likes)



        //조회한게시물+유저정보에 댓글+유저정보 push하기
        for (const ohwunwan of ohwunwans) {
            ohwunwan.comment = []
            ohwunwan.like = []
            for (const comment of ohwunwan_comments) {
                if (ohwunwan.id === comment.ohwunwan_id) {
                    ohwunwan.comment.push(comment)
                }
            }
            for (const like of ohwunwan_likes) {
                if (ohwunwan.id === like.ohwunwan_id) {
                    ohwunwan.like.push(like)
                }
            }

        }

        console.log(':::::::::::::ohwunwans:', ohwunwans)





       

    },
    feedback: async (req,res) => { 
        const { user_id } = req.params
        
        
        const feedbacks = await Feedback.findAll({
            where: { user_id },
            attributes: ['id', 'video', 'text_content', 'createdAt'],//Feedback 컬럼들
            include: [
                {
                    model: User,
                    attributes: ['nickname', 'profile_picture'],
                    require: true,
                },
            ],
            order: [['id', 'DESC']],//정렬 id순으로 꺼꾸로
            raw: true,//dataValues만 가져오기
            // limit: 5,//몇개불러올껀가
            // offset: count * 5,//어디서부터시작할껀지
        });




        //조회한 게시물들의 고유번호값들 맵
        const feedback_id = feedbacks.map(item => item.id)
        // console.log('::::::feedback_id:', feedback_id)




        // 조회한 게시물들의 댓글 + 유저정보
        const feedback_comments = await Feedback_comment.findAll({
            where: { feedback_id },
            attributes: ['id', 'feedback_id', 'text_content', 'selection', 'createdAt'],
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
        const feedback_likes = await Feedback_like.findAll({
            where: { feedback_id },
            attributes: ['id', 'user_id', 'feedback_id', 'createdAt'],
            raw: true,//dataValues만 가져오기
        })
        // console.log(':::::::::::::feedback_likes:', feedback_likes)



        //조회한게시물+유저정보에 댓글+유저정보 push하기
        for (const feedback of feedbacks) {
            feedback.comment = []
            feedback.like = []
            for (const comment of feedback_comments) {
                if (feedback.id === comment.feedback_id) {
                    feedback.comment.push(comment)
                }
            }
            for (const like of feedback_likes) {
                if (feedback.id === like.feedback_id) {
                    feedback.like.push(like)
                }
            }

        }
        console.log(':::::::::::::feedbacks:', feedbacks)
    },
    bench_1rm: () => { },
    dead_1rm: () => { },
    squat_1rm: () => { },
    patch:()=>{},
    delete: () => { },

} 