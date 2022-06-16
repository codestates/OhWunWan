const express = require('express');
const router = express.Router();
const {comment_controller} = require('./../controllers');

//ohwunwan_comment
router.post('/ohwunwan_comment', comment_controller.ohwunwan_comment.post);//ohwunwan게시물의 댓글 작성
router.patch('/ohwunwan_comment', comment_controller.ohwunwan_comment.patch);//ohwunwan게시물의 댓글 수정
router.delete('/ohwunwan_comment/:ohwunwan_comment_id', comment_controller.ohwunwan_comment.delete);//ohwunwan게시물의 댓글 삭제


//feedback_comment
router.post('/feedback_comment', comment_controller.feedback_comment.post);//feedback게시물의 댓글 작성
router.post('/feedback_comment/selection', comment_controller.feedback_comment.selection);//feedback게시물의 댓글 작성
router.patch('/feedback_comment', comment_controller.feedback_comment.patch);//feedback게시물의 댓글 수정
router.delete('/feedback_comment/:feedback_comment_id', comment_controller.feedback_comment.delete);//feedback게시물의 댓글 삭제


//bench_1rm_comment
router.post('/bench_1rm_comment', comment_controller.bench_1rm_comment.post);//bench_1rm게시물의 댓글 작성
router.patch('/bench_1rm_comment', comment_controller.bench_1rm_comment.patch);//bench_1rm게시물의 댓글 수정
router.delete('/bench_1rm_comment/:bench_1rm_comment_id', comment_controller.bench_1rm_comment.delete);//bench_1rm게시물의 댓글 삭제


//dead_1rm_comment
router.post('/dead_1rm_comment', comment_controller.dead_1rm_comment.post);//dead_1rm게시물의 댓글 작성
router.patch('/dead_1rm_comment', comment_controller.dead_1rm_comment.patch);//dead_1rm게시물의 댓글 수정
router.delete('/dead_1rm_comment/:dead_1rm_comment_id', comment_controller.dead_1rm_comment.delete);//dead_1rm게시물의 댓글 삭제


//squat_1rm_comment
router.post('/squat_1rm_comment', comment_controller.squat_1rm_comment.post);//squat_1rm게시물의 댓글 작성
router.patch('/squat_1rm_comment', comment_controller.squat_1rm_comment.patch);//squat_1rm게시물의 댓글 수정
router.delete('/squat_1rm_comment/:squat_1rm_comment_id', comment_controller.squat_1rm_comment.delete);//squat_1rm게시물의 댓글 삭제

module.exports= router