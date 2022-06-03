const express = require('express');
const router = express.Router();

const auth = require('./auth.js');
const user =require('./user.js');
const post = require('./post.js')
const comment = require('./comment.js')
const like = require('./like.js')
const respect = require('./respect.js')

router.use('/auth',auth)
router.use('/user',user)
router.use('/post',post)
router.use('/comment',comment)
router.use('/like',like)
router.use('/respect',respect)

module.exports =router;