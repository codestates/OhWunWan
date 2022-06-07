require("dotenv").config();
const axios = require('axios');
const { User } = require('../../models');

module.exports = {
    post: async (req, res) => {
        try {
            //카카오 인가 코드
            const { code } = req.body;
            // console.log(code) 


            //인가 코드가 없는경우 
            if (!code) return res.status(400).json({ message: 'Bad Request!' })


            //1.카카오 토큰 요청과 응답
            const response = await axios({
                method: 'post',
                url: `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REST_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}&code=${code}`,
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
            })


            //카카오 access_token,refresh_token
            const { access_token, refresh_token } = response.data
            // console.log('!!!!!!!!!', access_token,refresh_token)


            //2.받아온 토큰으로 카카오에게 유저의 정보 요청하기
            const user_info = await axios({
                method: 'post',
                url: `https://kapi.kakao.com/v2/user/me`,
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
            })


            //카카오에서 받아온 유저의 고유번호 & //유저의 닉네임 및 사진
            const { id: kakao_id } = user_info.data
            const { nickname, profile_image: profile_picture } = user_info.data.properties
            // console.log('##########',kakao_id,nickname,profile_picture)


            //신유저인지 기존유저인지 구분하기
            const check_user_info = await User.findOne({ where: { kakao_id } });
            // console.log('!!!!!!!!!!!!!!!!',check_user_info)


            //신 유저의 경우 db에 생성
            if (!check_user_info) {
                const new_user = {
                    kakao_id,
                    nickname,
                    profile_picture,
                }
                const user = await User.create(new_user)
                // console.log('@@@@@@@@@@@',user.data)

                //토큰보내기, 유저 정보 보내기
                res.cookie("refresh_token", refresh_token, {
                    httpOnly: true, secure: true
                });
                res.cookie("access_token", access_token, {
                    httpOnly: true, secure: true
                });
                return res.json({
                    message: 'This is new user info', data: {
                        user_info: user.dataValues
                    }
                })
            }


            //기존유저인 경우
            res.cookie("refresh_token", refresh_token, {
                httpOnly: true, secure: true
            });
            res.cookie("access_token", access_token, {
                httpOnly: true, secure: true
            });
            return res.status(201).json({
                message: 'This is user info', data: {
                    user_info: check_user_info.dataValues
                }
                
            })
        } catch (err) {
            console.log(err)
            res.status(500).json({ message: 'Server Error!' })
        }
    }
}
