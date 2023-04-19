var express = require("express");
var app = express();
var cors = require('cors');
var port = process.env.PORT || 10000;

var corsOption = {
    origin: ['*'],
};
app.use(cors(corsOption));
app.use(cors())

var all_msg = [];

app.get("/send_message",(req,res)=>{
    var msg = req.query.msg;
    all_msg.push(msg);

});

app.get("/messages",(req,res)=>{

    res.send(all_msg);
});
app.get("*",(req,res)=>{
    res.send("hello");
});


app.listen(port);