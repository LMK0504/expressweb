var express = require('express')

var app = express()

app.get("/", (req,res) =>{
    res.send("hello World")
})

app.listen(3030);

app.get("/hi",(req,res)=>{
    res.send("Hi World")
})

app.post("/",(req,res)=>{
    res.send ("LMK World")
})

app.use(express.static('contents'))

