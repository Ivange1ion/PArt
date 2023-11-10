var express=require("express");
var app=express();
app.get("", (req, res)=>{
    // res.setHeader("Content-Type", "text/html/cs; charset=utf-8");
    res.sendFile("/Users/banya/PArt/index.html")
})

if (typeof document !== 'undefined') {
    document.getElementById("about").onclick=()=>{
        document.location.assign("/Users/banya/PArt/about.html")
    }
}
app.get("/about", (req, res)=>{
    res.sendFile("/Users/banya/PArt/about.html")
})
app.get("/game", (req,res)=>{
    res.sendFile("/Users/banya/PArt/game.html")
})
app.listen(8080, ()=>{
    console.log("server on port 8080")
})
// let http = require("http");
// let fs = require("fs");
// http.createServer((req, res)=>{
//     if (req.url==="/" || req.url===""){
//         fs.readFile("index.html", (error, data) => res.end(data));
//     }
// }).listen(8080, ()=>{console.log("Server on port 8080")})