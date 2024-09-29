
const express = require('express');
const router=express.Router();
// const user=require('../models/User');
router.post('/foodData',(req,res)=>
{

   try 
   {
        //console.log(global.food_items);
        res.send([global.food_items,global.food_cat])
    
   } 
   catch (error) 
   {
      console.error(error.message);
      res.send("Server Error")
   }

})
module.exports=router;
