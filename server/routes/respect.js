const express = require('express');
const router = express.Router();
const { respect_controller } = require('./../controllers');

// bench_1rm_respect 
router.post('/bench_1rm_respect', respect_controller.bench_1rm_respect.post);//bench_1rm_ 게시물 respect
// router.delete('/bench_1rm_respect /:bench_1rm_respect_id', respect_controller.bench_1rm_respect.delete);//bench_1rm_ 게시물 respect 취소


// dead_1rm_respect
router.post('/dead_1rm_respect', respect_controller.dead_1rm_respect.post);//dead_1rm_ 게시물 respect
// router.delete('/dead_1rm_respect/:feedback_like_id', respect_controller.dead_1rm_respect.delete);//dead_1rm_ 게시물 respect 취소


// squat_1rm_respect
router.post('/squat_1rm_respect', respect_controller.squat_1rm_respect.post);//squat_1rm_ 게시물 respect
// router.delete('/squat_1rm_respect/:feedback_like_id', respect_controller.squat_1rm_respect.delete);//dead_1rm_ 게시물 respect 취소

module.exports = router