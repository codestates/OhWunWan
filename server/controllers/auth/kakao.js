require("dotenv").config();
const axios = require('axios');
const { User } = require('../../models');
const { get_user_info,send_access_token} = require("../../modules/tokenFunctions")

module.exports = {
    post: async (req, res) => {
        try {
            //인가 코드가 없는경우 
            if (!req.body.code) return res.status(200).json({ message: 'Bad Request!' })
            
            //카카오 인가 코드
            const { code } = req.body;
            // console.log('::::::::::::code:',code) 



            //1.카카오 로그인 요청과 응답(토큰제공)
            const response = await axios({
                method: 'post',
                url: `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REST_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}&code=${code}`,
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
            })

            // console.log('::::::::::::response:',response)


            //카카오 access_token
            const { access_token } = response.data
            // console.log('::::::::::::access_token:', access_token)


            //2.access_tkoen으로 카카오에게 유저의 정보 요청하기
            const user_info = await get_user_info(access_token)
            //console.log(":::::::::::user_info:",user_info)


            //카카오에서 받아온 유저의 고유번호 & //유저의 닉네임 및 사진
            const { id: kakao_id } = user_info.data
            const { nickname, profile_image: profile_picture } = user_info.data.properties
            // console.log(':::::::::::kakao_id:',kakao_id,'::::::::nickname:',nickname,':::::::profile_picture:',profile_picture)


            //유저정보 조회가능 ::::미가입인지 가입된유저인지 구분하기
            const check_user_info = await User.findOne({ where: { kakao_id } });
            // console.log('::::check_user_info:',check_user_info)

            //3.1 신 유저의 경우 
            if (!check_user_info) {
                const new_user_info = {
                    kakao_id,
                    nickname,
                    profile_picture,
                }


                //신규유저 db에 생성
                const user = await User.create(new_user_info)
                // console.log('::::::::::user.data:',user.data)


                //토큰보내기 
                send_access_token(res, access_token);
                //유저 정보 보내기
                return res.status(201).json({
                    message: 'This is new user info', data: {
                        user_info: user.dataValues
                    }
                })
            }
            //3.2 기존유저인 경우
            //토큰전송
            send_access_token(res, access_token)
            //유저정보보내기
            return res.status(200).json({
                message: 'This is user info', data: {
                    user_info: check_user_info.dataValues
                }
            })
            //에러잡기
        } catch (err) {
            console.log(err)
            res.status(500).json({ message: 'Server Error!' })
        }
    }
}