const moment = require('moment');
const express = require('express');
const shareplanrouter = new express.Router();
const sharePlanDB = require("../models/shareplanModel.js");
const authenticate = require('../authentications/authenticate.js');


shareplanrouter.post("/addshare", async(req, res)=>{
    const {userid,  plan ,detail ,image} = req.body;
    try {
        const date = moment(Date.now()).format("L");
        const usertopic = new sharePlanDB({
            userid: userid ,
            plan: plan,
            detail: detail ,
            image: image ,
            date: date
        });
        const savedtopic = await usertopic.save();
        res.status(201).json({status:201, savedtopic});
    } catch (error) {
        res.status(401).json({status:401, error});
    }
});

shareplanrouter.get("/getmyshare", authenticate , async(req, res)=>{
    try {
        const gottentopics = await sharePlanDB.find({userid: req.userId}).sort({_id: -1});
        res.status(201).json({status:201, gottentopics});
    } catch (error) {
        res.status(401).json({status:401, error});
        
    }
} );






module.exports = shareplanrouter;