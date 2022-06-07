const { User } = require('../../models');
const axios = require('axios');
const {
    get_user_info,
    send_access_token
} = require("../tokenFunctions")

module.exports = {
    //로그인 유뮤조회 
    get: async (req, res) => {
        try {
            //쿠키의 어세스토큰
            const { access_token } = req.cookies
            //어세스토큰이 없는경우 
            if (!access_token) return res.status(204).json({ message: 'There in no access_token'})
            //토큰을이용해 유저인포조회
            const user_info = get_user_info(access_token)
            //유저인포속의 카카오 아이디
            const { id: kakao_id } = user_info.data
            //카카오아이디가없는것은 유효하지않은 토큰이라는 말
            if (!kakao_id) return res.status(204).json({ message: 'Invalid token' })
            // 유효한 토큰인 경우
            else {
                //유저정보 조회
                const check_user_info = await User.findOne({ where: { kakao_id } });
                //토큰재전송전송
                send_access_token(req, access_token)
                //유저정보보내기
                return res.status(200).json({
                    message: 'This is user info', data: {
                        user_info: check_user_info.dataValues
                    }
                })
            }
        } catch (err) {
            console.log(err)
            res.status(500).json({ message: 'Server Error!' })
        }
    },
    kakao: require('./kakao'),
    logout: require('./logout'),

}