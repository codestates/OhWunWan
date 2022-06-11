const axios = require('axios');

module.exports = {
    //토큰을통해 유저의 정보를 가져올 수 있음+유효성 검사도 해줌
    get_user_info: async (access_token) => {
        const user_info = await axios({
            method: 'post',
            url: `https://kapi.kakao.com/v2/user/me`,
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
        })
        return user_info
    },

    //클라이언트에게 토큰 보내는기능
    send_access_token : async(res,access_token)=>{
        res.cookie("access_token", access_token, {
            //자바스크립트 접근x,https에서만 쿠키사용
            httpOnly: true, secure: true,maxAge: 900000
        });
    }
    

}