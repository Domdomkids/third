const moment = require('moment');
const express = require('express');
const sharerouter = new express.Router();
const ShareDB = require("../models/shareModel.js");
const authenticate = require('../authentications/authenticate.js');


sharerouter.post("/uploadbank", authenticate , async(req, res)=>{
    const {bank , account} = req.body;
    try {
        const date = moment(Date.now()).format("L");
        
        const userbank = new ShareDB({
           
            bank: bank,
            account: account, 
            userId: req.userId,
           
            date: date
        });
        const savedbank = await userbank.save();
        res.status(201).json({status:201, savedbank});
    } catch (error) {
        res.status(401).json({status:401, error});
    }
});

sharerouter.get("/getallbank", authenticate , async(req, res)=>{
    try {
        const gottentopics = await ShareDB.find({userId: req.userId}).sort({_id: -1});
        res.status(201).json({status:201, gottentopics});
    } catch (error) {
        res.status(401).json({status:401, error});
        
    }
} );






module.exports = sharerouter;