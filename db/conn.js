const mongoose = require("mongoose");

const DB = process.env.DATABASE;
mongoose.set('strictQuery', true);

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("DATABASE CONNECTED")).catch((err)=>{
    console.log(err)
})