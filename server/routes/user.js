const express = require('express');
const router = express.Router();
const {user_controller} = require('./../controllers');

router.get('/:user_id', user_controller.user_info);//유저정보+랭킹정보
router.get('/ohwunwan/:user_id/:count', user_controller.ohwunwan);//ohwunwan 게시물 user 정보요청
router.get('/feedback/:user_id/:count', user_controller.feedback);//feedback게시물 user 정보요청
router.get('/bench_1rm/:user_id/:count', user_controller.bench_1rm);//user bench_1rm게시물 정보요청
router.get('/dead_1rm/:user_id/:count', user_controller.dead_1rm);//user dead_1rm게시물 정보요청
router.get('/squat_1rm/:user_id/:count', user_controller.squat_1rm);//user squat_1rm게시물 정보요청
router.patch('/', user_controller.patch);//user 정보수정
router.delete('/:user_id', user_controller.delete);//회원탈퇴

module.exports= router     