const express = require("express");
const https = ("https");

const app = express();
app.use(express.static('public'));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.listen(3000, ()=>{
    console.log("Working...")
})