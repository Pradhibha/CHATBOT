const express = require('express');
const app = express();
app.use(express.static(__dirname+"/public"));
app.listen("8000",function(){
    console.log("AI Awareness Network Chtbot is running http://localhost:8000/");
})