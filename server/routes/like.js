const express = require('express');
const router = express.Router();
const {like_controller} = require('./../controllers');

// ohwunwan 
router.post('/ohwunwan_like', like_controller.ohwunwuan_like.post);//ohwunwan게시물의 댓글 좋아요
router.delete('/ohwunwan_like/:ohwunwan_like_id', like_controller.ohwunwuan_like.delete);//ohwunwan게시물의 댓글 좋아요 취소


//feedback
router.post('/feedback_like', like_controller.feedback_like.post);//feedback게시물의 댓글 좋아요
router.delete('/feedback_like/:feedback_like_id', like_controller.feedback_like.delete);//feedback게시물의 댓글 좋아요 취소

module.exports= router