const express = require('express');
const Users = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');
const {loginValidator, registerValidator} = require('../validators/validators');

const router = express.Router();

router.post('/register',(req,res)=>{
    const{errors, isValid} = registerValidator(req.body);
    if(!isValid){
        res.json({success:false,errors});
    }else{
        const{firstName,lastName,email,password} = req.body;
        const registerUser = new Users({
            firstName,
            lastName,
            email,
            password,
            createdAt: new Date()
        });
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(registeruser.password, salt,(hashErr,hash)=>{
                if(err||hashErr){
                    res.json({message: 'Error occured hashing', success:false});
                    return;
                }
                registerUser.password = hash;
                registerUser.save().then(()=>{
                    res.json({"message":"User created successfully","success":true});
                }).catch(err=>res.json({message:err.message,success:false}));
            })
        })
    }
})

module.exports = router;