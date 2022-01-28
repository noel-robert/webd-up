const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('home')
})

router.get('/login',(req,res)=>{
    res.render('login')
})

router.get('/signup',(req,res)=>{
    res.render('signup')
})

router.get('/introPage',(req,res)=>{
    res.render('introPage')
})

router.get('*',(req,res)=>{
    res.render('error')
})

module.exports = router;