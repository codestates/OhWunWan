const express = require('express');
const router = express.Router();
const {post_controller} = require('./../controllers');


// ohwunwan
router.get('/ohwunwan/:count', post_controller.ohwunwan.get);//게시글 조회
router.post('/ohwunwan' ,post_controller.ohwunwan.post);//게시글 작성
router.patch('/ohwunwan', post_controller.ohwunwan.patch);//게시글 수정
router.delete('/ohwunwan/:ohwunwan_id', post_controller.ohwunwan.delete);//게시글 삭제


//feedback
router.get('/feedback/:count', post_controller.feedback.get);//게시글 조화
router.post('/feedback', post_controller.feedback.post);//게시글 작성
router.patch('/feedback', post_controller.feedback.patch);//게시글 수정
router.delete('/feedback/:feedback_id', post_controller.feedback.delete);//게시글 삭제


//bench_1rm
router.get('/bench_1rm/:count', post_controller.bench_1rm.get);//게시글 조화
router.post('/bench_1rm', post_controller.bench_1rm.post);//게시글 작성
router.patch('/bench_1rm', post_controller.bench_1rm.patch);//게시글 수정
router.delete('/bench_1rm/:bench_1rm_id', post_controller.bench_1rm.delete);//게시글 삭제


//dead_1rm
router.get('/dead_1rm/:count', post_controller.dead_1rm.get);//게시글 조화
router.post('/dead_1rm', post_controller.dead_1rm.post);//게시글 작성
router.patch('/dead_1rm', post_controller.dead_1rm.patch);//게시글 수정
router.delete('/dead_1rm/:dead_1rm_id', post_controller.dead_1rm.delete);//게시글 삭제


//squat_1rm
router.get('/squat_1rm/:count', post_controller.squat_1rm.get);//게시글 조화
router.post('/squat_1rm', post_controller.squat_1rm.post);//게시글 작성
router.patch('/squat_1rm', post_controller.squat_1rm.patch);//게시글 수정
router.delete('/squat_1rm/:squat_1rm_id', post_controller.squat_1rm.delete);//게시글 삭제

module.exports = router