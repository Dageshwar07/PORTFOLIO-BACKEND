require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const port = 6002;


app.use(cors());
app.use(express.json());

app.use(router)


app.get('/test',(req,res) => {
    res.json('test ok');
  });

  app.get("/", (req, res) =>
  res.send(
    `<h1>Site is Working. click <a href=${process.env.BASE_URL}>here</a> to visit frontend.</h1>`
  )
);
 
app.listen(port,()=>{
    console.log("server start");
})