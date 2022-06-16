const express = require('express');
const router = express.Router();
const {user_controller} = require('./../controllers');

router.get('/ohwunwan/:user_id', user_controller.ohwunwan);//ohwunwan 게시물 user 정보요청
router.get('/feedback/:user_id', user_controller.feedback);//feedback게시물 user 정보요청
router.get('/1rm/:user_id', user_controller._1rm);//user 1rm게시물 정보요청
router.patch('/', user_controller.patch);//user 정보수정
router.delete('/:user_id', user_controller.delete);//회원탈퇴

module.exports= router     