const {
    Bench_1rm, Bench_1rm_comment, Bench_1rm_respect,
    Dead_1rm, Dead_1rm_comment, Dead_1rm_respect,
    Squat_1rm, Squat_1rm_comment, Squat_1rm_respect,
    Ohwunwan, Ohwunwan_comment, Ohwunwan_like,
    Feedback, Feedback_comment, Feedback_like,
    User
} = require('../../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;

module.exports = {
    //user가 작성한ohwunwan 게시물 들고오기
    user_info: async (req, res) => {
        try {
            const { user_id } = req.params;
            const data = {};
            const user_infor = await User.findOne({
                where: { id: user_id },
                attributes: ['id', 'profile_picture', 'nickname'],//ohwunwan 컬럼들
                raw: true,//dataValues만 가져오기
            })
            // console.log(user_infor)
            //유저정보 넣기
            data.user_info = user_infor



            //-------------------------------------------------------------------------------------------------------------------
            const bench_ranks_info = await Bench_1rm_respect.findAll({

                attributes: ['bench_1rm_id', [sequelize.fn('COUNT', 'bench_1rm_id'), 'respect_count']],
                group: ['bench_1rm_id'],
                having: {
                    'respect_count': { [Op.gte]: 5 }
                },
                require: true,
                raw: true,//dataValues만 가져오기
                include: [
                    {
                        model: Bench_1rm,
                        attributes: ['user_id', 'kg', [sequelize.literal('(RANK() OVER (ORDER BY kg DESC))'), 'ranking']],
                        require: true,
                        raw: true,//dataValues만 가져오기

                    },
                ],

            });
            // console.log(':::::::::::bench_ranks_info', bench_ranks_info)
            const bench_rank = bench_ranks_info.filter((item) => item['Bench_1rm.user_id'] == user_id)
            console.log('bench_rank::::::::::::', bench_rank, bench_ranks_info.length)
            //bench랭킹정보 넣기
            data.bench_rank = [bench_rank, bench_ranks_info.length]




            //-------------------------------------------------------------------------------------------------------------------
            const dead_ranks_info = await Dead_1rm_respect.findAll({

                attributes: ['dead_1rm_id', [sequelize.fn('COUNT', 'dead_1rm_id'), 'respect_count']],
                group: ['dead_1rm_id'],
                having: {
                    'respect_count': { [Op.gte]: 5 }
                },
                require: true,
                raw: true,//dataValues만 가져오기
                include: [
                    {
                        model: Dead_1rm,
                        // where: { user_id },
                        attributes: ['user_id', 'kg', [sequelize.literal('(RANK() OVER (ORDER BY kg DESC))'), 'ranking']],
                        require: true,
                        raw: true,//dataValues만 가져오기

                    },
                ],

            });
            // console.log(':::::::::::dead_ranks_info', dead_ranks_info)
            const dead_rank = dead_ranks_info.filter((item) => item['Dead_1rm.user_id'] == user_id)
            console.log('dead_rank::::::::::::', dead_rank, dead_ranks_info.length)
            //dead랭킹정보 넣기
            data.dead_rank = [dead_rank, dead_ranks_info.length]



            //-------------------------------------------------------------------------------------------------------------------
            const squat_ranks_info = await Squat_1rm_respect.findAll({

                attributes: ['squat_1rm_id', [sequelize.fn('COUNT', 'squat_1rm_id'), 'respect_count']],
                group: ['squat_1rm_id'],
                having: {
                    'respect_count': { [Op.gte]: 5 }
                },
                require: true,
                raw: true,//dataValues만 가져오기
                include: [
                    {
                        model: Squat_1rm,
                        // where: { user_id },
                        attributes: ['user_id', 'kg', [sequelize.literal('(RANK() OVER (ORDER BY kg DESC))'), 'ranking']],
                        require: true,
                        raw: true,//dataValues만 가져오기

                    },
                ],

            });
            // console.log(':::::::::::squat_ranks_info', squat_ranks_info)
            const squat_rank = squat_ranks_info.filter((item) => item['Squat_1rm.user_id'] == user_id)
            console.log('squat_rank::::::::::::', squat_rank, squat_ranks_info.length)
            //squat랭킹정보 넣기
            data.squat_rank = [squat_rank, squat_ranks_info.length]

            console.log(data)
            //---------------------------------------------------------------------------------------------------------


            res.json({ message: 'This is the user information', data })
        } catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Server Error!' })
        }
    },






    ohwunwan: async (req, res) => {
        try {
            const { user_id, count } = req.params
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
                limit: 5,//몇개불러올껀가
                offset: count * 5,//어디서부터시작할껀지
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
            return res.json({ message: 'ok', data: ohwunwans })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }
    },






    //user가 작성한feedback 게시물 들고오기
    feedback: async (req, res) => {
        try {
            const { user_id, count } = req.params
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
                limit: 5,//몇개불러올껀가
                offset: count * 5,//어디서부터시작할껀지
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
            return res.json({ message: 'ok', data: feedbacks })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }
    },






    //유저가 작성한 bench_1rm 게시물 가져오기
    bench_1rm: async (req, res) => {
        try {
            //조회할 게시물 페이지들
            const { count, user_id } = req.params


            //1.bench__1rm게시물+user정보 쿼리
            const bench_1rms = await Bench_1rm.findAll({
                where: { user_id },
                attributes: ['id', 'video', 'text_content', 'kg', 'createdAt'],//bench_1rm 컬럼들
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



            //2. 조회한 게시물들의 고유번호값들 맵핑해서 뽑기
            const bench_1rm_id = bench_1rms.map(item => item.id)
            console.log('::::::bench_1rm_id:', bench_1rm_id)



            //3. 조회한 게시물들의 댓글 + 유저정보 쿼리
            const bench_1rm_comments = await Bench_1rm_comment.findAll({
                where: { bench_1rm_id },
                attributes: ['id', 'bench_1rm_id', 'text_content', 'createdAt'],
                include: [
                    {
                        model: User,
                        attributes: ['id', 'nickname', 'profile_picture'],
                        require: true,
                    }
                ],
                raw: true,//dataValues만 가져오기
            })




            //4.조회한 게시물들 리스펙 정보 쿼리
            const bench_1rm_respects = await Bench_1rm_respect.findAll({
                where: { bench_1rm_id },
                attributes: ['id', 'user_id', 'bench_1rm_id', 'createdAt'],
                raw: true,//dataValues만 가져오기
            })
            // console.log(':::::::::::::bench_1rm_respects:', bench_1rm_respects)




            //5.조회환 게시물들의 랭킹 정보 쿼리
            const ranks = await Bench_1rm_respect.findAll({

                attributes: ['bench_1rm_id', [sequelize.fn('COUNT', 'bench_1rm_id'), 'respect_count']],
                group: ['bench_1rm_id'],
                having: {
                    'respect_count': { [Op.gte]: 5 }
                },
                require: true,
                raw: true,//dataValues만 가져오기
                include: [
                    {
                        model: Bench_1rm,
                        attributes: ['kg', [sequelize.literal('(RANK() OVER (ORDER BY kg DESC))'), 'ranking']],
                        require: true,
                        raw: true,//dataValues만 가져오기

                    },
                ],

            });
            console.log(':::::::::::rank', ranks)




            //6.(조회한게시물+유저정보)+(댓글+유저정보)+리스펙정보+랭킹정보
            for (const bench_1rm of bench_1rms) {
                bench_1rm.comment = []
                bench_1rm.respect = []
                bench_1rm.rank = []
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
                for (const rank of ranks) {
                    if (bench_1rm.id === rank.bench_1rm_id) {
                        bench_1rm.rank.push(rank)
                        bench_1rm.rank.push(ranks.length)
                    }
                }
            }
            console.log(':::::::::::::bench_1rms:', bench_1rms)

            //7. 데이터 보내주기
            return res.json({ message: 'ok', data: bench_1rms })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }
    },






    dead_1rm: async (req, res) => {
        try {
            //조회할 게시물 페이지들
            const { count, user_id } = req.params


            //1.dead__1rm게시물+user정보 쿼리
            const dead_1rms = await Dead_1rm.findAll({
                where: { user_id },
                attributes: ['id', 'video', 'text_content', 'kg', 'createdAt'],//dead_1rm 컬럼들
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



            //2. 조회한 게시물들의 고유번호값들 맵핑해서 뽑기
            const dead_1rm_id = dead_1rms.map(item => item.id)
            console.log('::::::dead_1rm_id:', dead_1rm_id)



            //3. 조회한 게시물들의 댓글 + 유저정보 쿼리
            const dead_1rm_comments = await Dead_1rm_comment.findAll({
                where: { dead_1rm_id },
                attributes: ['id', 'dead_1rm_id', 'text_content', 'createdAt'],
                include: [
                    {
                        model: User,
                        attributes: ['id', 'nickname', 'profile_picture'],
                        require: true,
                    }
                ],
                raw: true,//dataValues만 가져오기
            })




            //4.조회한 게시물들 리스펙 정보 쿼리
            const dead_1rm_respects = await Dead_1rm_respect.findAll({
                where: { dead_1rm_id },
                attributes: ['id', 'user_id', 'dead_1rm_id', 'createdAt'],
                raw: true,//dataValues만 가져오기
            })
            // console.log(':::::::::::::dead_1rm_respects:', dead_1rm_respects)




            //5.조회환 게시물들의 랭킹 정보 쿼리
            const ranks = await Dead_1rm_respect.findAll({

                attributes: ['dead_1rm_id', [sequelize.fn('COUNT', 'dead_1rm_id'), 'respect_count']],
                group: ['dead_1rm_id'],
                having: {
                    'respect_count': { [Op.gte]: 5 }
                },
                require: true,
                raw: true,//dataValues만 가져오기
                include: [
                    {
                        model: Dead_1rm,
                        attributes: ['kg', [sequelize.literal('(RANK() OVER (ORDER BY kg DESC))'), 'ranking']],
                        require: true,
                        raw: true,//dataValues만 가져오기

                    },
                ],

            });
            console.log(':::::::::::rank', ranks)




            //6.(조회한게시물+유저정보)+(댓글+유저정보)+리스펙정보+랭킹정보
            for (const dead_1rm of dead_1rms) {
                dead_1rm.comment = []
                dead_1rm.respect = []
                dead_1rm.rank = []
                for (const comment of dead_1rm_comments) {
                    if (dead_1rm.id === comment.dead_1rm_id) {
                        dead_1rm.comment.push(comment)
                    }
                }
                for (const respect of dead_1rm_respects) {
                    if (dead_1rm.id === respect.dead_1rm_id) {
                        dead_1rm.respect.push(respect)
                    }
                }
                for (const rank of ranks) {
                    if (dead_1rm.id === rank.dead_1rm_id) {
                        dead_1rm.rank.push(rank)
                        dead_1rm.rank.push(ranks.length)
                    }
                }
            }
            console.log(':::::::::::::dead_1rms:', dead_1rms)

            //7. 데이터 보내주기
            return res.json({ message: 'ok', data: dead_1rms })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }

    },







    squat_1rm: async (req, res) => {
        try {
            //조회할 게시물 페이지들
            const { count, user_id } = req.params


            //1.squat__1rm게시물+user정보 쿼리
            const squat_1rms = await Squat_1rm.findAll({
                where: { user_id },
                attributes: ['id', 'video', 'text_content', 'kg', 'createdAt'],//squat_1rm 컬럼들
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



            //2. 조회한 게시물들의 고유번호값들 맵핑해서 뽑기
            const squat_1rm_id = squat_1rms.map(item => item.id)
            console.log('::::::squat_1rm_id:', squat_1rm_id)



            //3. 조회한 게시물들의 댓글 + 유저정보 쿼리
            const squat_1rm_comments = await Squat_1rm_comment.findAll({
                where: { squat_1rm_id },
                attributes: ['id', 'squat_1rm_id', 'text_content', 'createdAt'],
                include: [
                    {
                        model: User,
                        attributes: ['id', 'nickname', 'profile_picture'],
                        require: true,
                    }
                ],
                raw: true,//dataValues만 가져오기
            })




            //4.조회한 게시물들 리스펙 정보 쿼리
            const squat_1rm_respects = await Squat_1rm_respect.findAll({
                where: { squat_1rm_id },
                attributes: ['id', 'user_id', 'squat_1rm_id', 'createdAt'],
                raw: true,//dataValues만 가져오기
            })
            // console.log(':::::::::::::squat_1rm_respects:', squat_1rm_respects)




            //5.조회환 게시물들의 랭킹 정보 쿼리
            const ranks = await Squat_1rm_respect.findAll({

                attributes: ['squat_1rm_id', [sequelize.fn('COUNT', 'squat_1rm_id'), 'respect_count']],
                group: ['squat_1rm_id'],
                having: {
                    'respect_count': { [Op.gte]: 5 }
                },
                require: true,
                raw: true,//dataValues만 가져오기
                include: [
                    {
                        model: Squat_1rm,
                        attributes: ['kg', [sequelize.literal('(RANK() OVER (ORDER BY kg DESC))'), 'ranking']],
                        require: true,
                        raw: true,//dataValues만 가져오기

                    },
                ],

            });
            console.log(':::::::::::rank', ranks)




            //6.(조회한게시물+유저정보)+(댓글+유저정보)+리스펙정보+랭킹정보
            for (const squat_1rm of squat_1rms) {
                squat_1rm.comment = []
                squat_1rm.respect = []
                squat_1rm.rank = []
                for (const comment of squat_1rm_comments) {
                    if (squat_1rm.id === comment.squat_1rm_id) {
                        squat_1rm.comment.push(comment)
                    }
                }
                for (const respect of squat_1rm_respects) {
                    if (squat_1rm.id === respect.squat_1rm_id) {
                        squat_1rm.respect.push(respect)
                    }
                }
                for (const rank of ranks) {
                    if (squat_1rm.id === rank.squat_1rm_id) {
                        squat_1rm.rank.push(rank)
                        squat_1rm.rank.push(ranks.length)
                    }
                }
            }

            console.log(':::::::::::::squat_1rms:', squat_1rms)

            //7. 데이터 보내주기
            return res.json({ message: 'ok', data: squat_1rms })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }
    },






    patch: async (req, res) => {
        try {console.log(req.body)
            if (!req.body.user_id) return res.status(400).json({ message: 'Bad Request!' })
            const { user_id } = req.body;
            console.log(user_id)

            //nickname , 프로필 사진 둘다 바꾸는 경우
            if (req.body.nickname && req.file) {
                console.log(1111111111111)
                const { nickname } = req.body;
                const { location } = req.file;
                await User.update(
                    {
                        profile_picture: location,
                        nickname
                    },
                    {
                        where: { id: user_id, }
                    },
                );
            }

            //nickname만 바꾸는 경우                
            else if (req.body.nickname) {
                const { nickname } = req.body;
                // console.log(2222222222)
                await User.update(
                    {
                        nickname
                    },
                    {
                        where: { id: user_id, }
                    }
                );
            }


            //프로필 사진만 바꾸는 경우   
            else if (req.file.location) {
                // console.log(333333333333333333)
                const { location } = req.file;
                await User.update(
                    {
                        profile_picture: location,
                    },
                    {
                        where: { id: user_id, }
                    },
                );
            }
            res.json({ message: 'This user information has been changed' })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }

    },







    delete: async (req, res) => {
        try {
            const { user_id } = req.params
            console.log(user_id)
            await User.destroy({
                where: { id: user_id },
            });
            return res.json({ message: 'Membership information has been deleted' })
        } catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Server Error!' })
        }
    },

} 