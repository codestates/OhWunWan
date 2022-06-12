const { User } = require('../../models');
const {
    get_user_info,
    send_access_token
} = require("../../modules/tokenFunctions")

module.exports = {
    //로그인 유뮤조회 
    get: async (req, res) => {
        try {
            //어세스토큰이 없는경우 
            if (!req.cookies.access_token) return res.status(200).json({ message: 'There is no access_token'})
            const { access_token } = req.cookies
            // console.log(":::::access_token",access_token,)
            // console.log(":::::cookies:",req.cookies)


            //토큰을이용해 유저인포조회
            const user_info = await get_user_info(access_token)
            //유저인포속의 카카오 아이디
            // console.log('::::::::user_info:',user_info)


            //카카오아이디가없는것은 유효하지않은 토큰이라는 말
            if (!user_info.data.id) return res.status(200).json({ message: 'Invalid token' })
            
            // 유효한 토큰인 경우
            else {
                const { id: kakao_id } = user_info.data
                //유저정보 조회
                const check_user_info = await User.findOne({ where: { kakao_id } });


                //토큰재전송전송
                send_access_token(res, access_token)


                //유저정보보내기
                return res.status(200).json({
                    message: 'This is user info',
                     data: {
                        user_info: check_user_info.dataValues
                    }
                })
            }
        } catch (err) {
            // console.log('::::::err:',err)
            res.status(500).json({ message: 'Server Error!' })
        }
    },
    kakao: require('./kakao'),
    logout: require('./logout'),

}