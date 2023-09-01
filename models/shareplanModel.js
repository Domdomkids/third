const mongoose = require("mongoose");

const shareplanSchema = new mongoose.Schema({

    userid : {type:String , required: true},
    plan : {type:String , required: true},
    detail : {type:String , required: true},
    image : {type:String , required: true},
    date : {type: Date}
});
const  sharePlanDB = new mongoose.model("addshareplan", shareplanSchema);
module.exports = sharePlanDB;