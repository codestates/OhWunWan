const{Ohwunwan_like}=require('../../models')

module.exports={
    post :async (req,res)=>{
        try{
            if(!(req.body.ohwunwan_id&&req.body.user_id)) return res.json({ message: 'Bad Request!' })
            const{ohwunwan_id,user_id}=req.body
            await Ohwunwan_like.create({ohwunwan_id,user_id})
            return res.status(201).json( {message: 'The like has been done'})
        }catch(err){
            console.log(err);
            return res.status(500).json( { message: 'Server Error!' })
        }
        
    },//ohwunwan 게시물 좋아요
    delete :()=>{}//ohwunwan 게시물 좋아요 취소
}

