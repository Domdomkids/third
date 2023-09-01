const mongoose = require("mongoose");

const shareSchema = new mongoose.Schema({

    bank : {type:String , required: true},
    account: {type:String , required: true},
    userId : {type: String},
    
    date : {type: Date},

});
const  ShareDB = new mongoose.model("share", shareSchema);
module.exports = ShareDB;