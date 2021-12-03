const express = require("express");

// var app = express();
const User= require("../models/userModel")
const router= new express.Router();

router.post('/user/insert', function(req,res){
    // console.log(req.body)
    const pdata= new User(req.body);
    pdata.save();
  })

router.delete('/user/delete/:id11',function(req,res){
   const idd= req.params.id11;  //--> send via url
   console.log(idd);   
   User.findByIdAndDelete(idd).then().catch();
  
  })
  
  router.put('/user/update', function(req,res){
    const idd= req.body.id;  //send id in json
    const username= req.body.username;
    User.updateOne({_id: idd}, {username:username}).then().catch();
    
  })



module.exports= router;