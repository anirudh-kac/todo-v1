const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
const date=require(__dirname+"/date.js")
app.set('view engine','ejs');
app.use(express.static("public"));
var newItems=[];
var newWorkItems=[];

var day=date.getDate();
//console.log(day);
app.get("/",function(req,res){
  res.render("list",{currentDay:day,addedItems:newItems});
});

app.get("/work",function(req,res){
  res.render("list",{currentDay:"Work",addedItems:newWorkItems})
});
app.post("/",function(req,res){
  newItems.push(req.body.newItem);
  //console.log(data);
  res.render("list",{currentDay:day,addedItems:newItems});
  res.redirect("/")
});

app.post("/work",function(req,res){
  newWorkItems.push(req.body.newItem);
  //console.log(data);
  res.render("list",{currentDay:"Work",addedItems:newWorkItems});
  res.redirect("/work");
});


app.listen(3000,function(){
  console.log("Server running on port 3000");
});
