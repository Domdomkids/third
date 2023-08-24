const mongoose = require("mongoose");

const ContentwritingSchema = new mongoose.Schema({

    topic : {type:String , required: true},
    date : {type: Date}
});
const  ContentwritingDB = new mongoose.model("contentwrite", ContentwritingSchema);
module.exports = ContentwritingDB;