module.exports={
    //로그아웃
    post:async (req,res)=>{
        try{
            if(!req.cookies.access_token) return res.json({ message: 'Bad Request!' })
            return res.clearCookie("access_token").json({ message: 'Successfully logged out' });
        }catch(err){
            // console.log(err);
            res.status(500).json({ message: 'Server Error!' })
        }
    } 
}