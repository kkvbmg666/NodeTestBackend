const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    //res.send('Hello KK!!')
    res.render('index')
})

module.exports = router