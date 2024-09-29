
const express = require('express');
const router=express.Router();
const { body, validationResult } = require('express-validator');
const user=require('../models/User');


const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const jwtSecret="mynamepritibhisefromkarjatA.nagar"




router.post("/create" ,
body('email').isEmail(),
body('name').isLength({ min: 5 }),
body('password','incurrect password').isLength({ min: 5 })
,async(req,res)=>
{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    const salt= await bcrypt.genSalt(10);
    let setPassword= await bcrypt.hash(req.body.password,salt);

    try{
          await user.create({
              name:req.body.name,
              email:req.body.email,
              password:setPassword,
              location:req.body.location

          })
          res.json({success:true});

          }
    
    catch(error){
       console.log(error);
       res.json({success:false});
    }

})



// for logging data





router.post("/login" ,[body('email').isEmail(),
body('password').isLength({ min: 5 })],async(req,res)=>
{

  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

   let email=req.body.email;
    try{
          let userData=await user.findOne({email})
          if(!userData)
          {
            return res.status(400).json({ errors:"try logging with currect credentials"});
          }


          const comp=await bcrypt.compare(req.body.password,userData.password)

          //if(!req.body.password===userData.password)
          if(!comp)
          {
            return res.status(400).json({ errors:"try logging with currect credentials"});
          }

          const data=
          {
            user:{
              id:userData.id
            }
          }


          const authtoken=jwt.sign(data,jwtSecret)
          return res.json({ success:true,authtoken:authtoken});
        }
    
    catch(error){
       console.log(error);
       res.json({success:false});
    }

})

 module.exports=router;