
const express = require("express");
const bodyparser = require("body-parser");

const date=require(__dirname + "/date.js");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

var items=[];
let workitem=[];
app.get("/", function(req,res) {

 let day = date();
 
 res.render("list",{listtitle:day, newitems:items});

});

app.post("/", function(req,res) {

    let item=req.body.newitem;
    if(req.body.list==="Work")
   {
      workitem.push(item);
      res.redirect("/work");
   }
  else {
  items.push(item);
  res.redirect("/");
}

});

app.get("/work",function(req,res) {
  res.render("list",{listtitle:"Work List",newitems:workitem});
});

/*app.post("/work",function(req,res) {
  let item=req.body.newitem;
  workitem.push(item);
  res.redirect("/work");
});
*/
app.listen(3000, function() {
  console.log("server is started");
})
