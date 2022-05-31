const express = require('express');
const router = express.Router();
const {user_controller} = require('./../controllers');

router.get('/:user_id', user_controller.get);//user 정보요청
router.patch('/', user_controller.patch);//user 정보수정
router.delete('/:user_id', user_controller.delete);//회원탈퇴

module.exports= router     