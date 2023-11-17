const express=require("express");
const app=express();
app.use(express.static("public"))
app.set("view engine", "ejs");
app.get('/support', function(req, res) {
    res.render('support');
})
app.get('/', function(req, res) {
    res.render('index');
})
app.get('/game', (req, res)=>{
    res.render('game');
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.listen(8001);
console.log('8001 is the port');