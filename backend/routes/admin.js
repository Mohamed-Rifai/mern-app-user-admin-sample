const express = require('express')
const adminController = require('../controllers/adminController')
const router = express()

router.post('/',adminController.postLogin)
router.get('/getUsers',adminController.getUsers)
router.delete('/deleteUser/:id',adminController.deleteUser)

module.exports = router