const moment = require('moment');
const express = require('express');
const contentwriterouter = new express.Router();
const contentwritingDB = require("../models/contentwritingModel.js");
const authenticate = require('../authentications/authenticate.js');


contentwriterouter.post("/sendtopic", async(req, res)=>{
    const {topic} = req.body;
    try {
        const date = moment(Date.now()).format("L");
        const usertopic = new contentwritingDB({
           
            topic: topic,
            date: date
        });
        const savedtopic = await usertopic.save();
        res.status(201).json({status:201, savedtopic});
    } catch (error) {
        res.status(401).json({status:401, error});
    }
});

contentwriterouter.get("/getalltopics", authenticate , async(req, res)=>{
    try {
        const gottentopics = await contentwritingDB.find({}).sort({_id: -1});
        res.status(201).json({status:201, gottentopics});
    } catch (error) {
        res.status(401).json({status:401, error});
        
    }
} );






module.exports = contentwriterouter;