module.exports={
    //로그아웃
    post:async (res,req)=>{
        try{
            return res.clearCookie(access_token).send({ message: 'Successfully logged out' });
        }catch(err){
            console.log(err);
            res.status(500).json({ message: 'Server Error!' })
        }
    } 
}