const express = require('express');
const router = express.Router();
const {auth_controller} = require('./../controllers');

router.get('/',auth_controller.get)//로그인 여부조회
router.post('/kakao', auth_controller.kakao.post);//카카오 로그인 & 회원가입
router.post('/logout', auth_controller.logout.post);//로그아웃

module.exports= router