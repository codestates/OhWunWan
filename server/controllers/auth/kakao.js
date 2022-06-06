require("dotenv").config();
const axios = require('axios');
const { User } = require('../../models');

module.exports = {
    post: async (req, res) => {
        try {
            const { code } = req.body;
            // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', code);

            const response = await axios({
                method: 'post',
                url: `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REST_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}&code=${code}`,
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
            })
            // console.log('############',response.data)
            const { access_token } = response.data
            console.log('!!!!!!!!!', access_token)
            const user_info = await axios({
                method: 'post',
                url: `https://kapi.kakao.com/v2/user/me`,
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
            })
            const { id: kakao_id } = user_info.data
            const { nickname, profile_image: profile_picture } = user_info.data.properties
            // console.log('##########',kakao_id,nickname,profile_picture)


            const check_user_info = await User.findOne({ where: { kakao_id } });
            // console.log('!!!!!!!!!!!!!!!!',check_user_info)
            if (!check_user_info) {
                const new_user = {
                    kakao_id,
                    nickname,
                    profile_picture,
                }
                const user = await User.create(new_user)
                // console.log('@@@@@@@@@@@',user.data)
                return res.json({
                    message: 'this is new user info', data: {
                        user_info: user.dataValues
                    }
                })
            }
            return res.json({
                message: 'this is user info', data: {
                    user_info: check_user_info.dataValues
                }
            })
        } catch (err) {
            console.log(err)
        }


    } //카카오 로그인
}