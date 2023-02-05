const express = require('express')
const {loginUser,signupUser} = require('../controllers/userController')
const router = express()


router.post('/signup',signupUser)
router.post('/login',loginUser)



module.exports = router