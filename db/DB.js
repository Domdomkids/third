const mongoose = require('mongoose');


mongoose.connect(process.env.DBURL,{useUnifiedTopology:true, useNewUrlParser:true})
.then(()=> console.log("Database Connected successfully"))
.catch((err)=>console.log('Error Connection to Database failed',err))
