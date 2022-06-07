module.exports = {
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
    }

}