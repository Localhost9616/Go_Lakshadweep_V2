const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
const path = require('path');

let title = "The Exotic Laskshadweep Island";

app.get('/', function(req,res){
    // res.sendFile('index.html');
    // res.sendFile(path.join(__dirname, '/index.html'));
    res.render('index',{title: title})

  });
app.get('/glance', function(req,res){
    // res.sendFile('index.html');
    // res.sendFile(path.join(__dirname, '/glance.html'));
    res.render('glance')
  });
app.get('/booking', function(req,res){
    // res.sendFile('index.html');
    // res.sendFile(path.join(__dirname, '/booking.html'));
    res.render('booking')

  });
  
app.get('/changetitle', (req,res)=>{
    res.render('change')
  })
app.post('/change', (req,res)=>{
  res.render('index',{title: req.body.text1})
  res.redirect('/');
  // console.log(req.body.text1);
})
  

app.listen(3000, function() {
    console.log("Server started at Port 3000");
    console.log(`http://localhost:3000`);
  });
  