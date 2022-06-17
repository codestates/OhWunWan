const { Feedback_comment } = require('../../models')

module.exports={
    //feedback_comment 작성
    post :async(req,res)=>{
        try {
            if (!(req.body.feedback_id && req.body.user_id && req.body.text_content)) return res.status(400).json({ message: 'Bad Request!' })

            const { feedback_id, user_id, text_content } = req.body
            await Feedback_comment.create({ feedback_id, user_id, text_content })
            res.json({ message: 'The comment has been created' })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Server Error!' })
        }
    },

    //feedback_comment 수정
    patch :async(req,res)=>{
        try{
            if (!(req.body.feedback_comment_id && req.body.text_content)) return res.status(400).json({ message: 'Bad Request!' })
    
            const { feedback_comment_id, text_content } = req.body
            await Feedback_comment.update(
                {
                    text_content,
                },
                {
                    where: { id: feedback_comment_id, }
                },
            );
            return res.json({ message: 'The comment has been changed' })
        }catch(err){
            console.log(err)
            return res.status(500).json({ message: 'Server Error!' })
        }
    },

    //feedback_comment 삭제
    delete :async(req,res)=>{
        try{
            const { feedback_comment_id } = req.params
           await  Feedback_comment.destroy({
                where: { id: feedback_comment_id },
            });
           return  res.json({ message: 'The comment has been deleted' })
        }catch(err){
            console.log(err);
            return  res.status(500).json({ message: 'Server Error!' })
        }

    },
    selection: async(req,res)=>{
        try{
            console.log("채택!!!!",req.body)
            if(!req.body.feedback_comment_id) return res.status(400).json({ message: 'Bad Request!' })
            const{feedback_comment_id} =req.body
            await Feedback_comment.update(
                {
                    selection:1,
                },
                {
                    where: { id: feedback_comment_id, }
                },
            );
            return res.json({ message: 'The comment has been selected' })
        }catch(err){
            console.log(err);
            return  res.status(500).json({ message: 'Server Error!' })
        }
    }
}