const express = require('express')
const router = express()

router.get('/',(req,res)=>{
    res.json({msg:'this is admin panel'})
})

module.exports = router