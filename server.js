const express = require("express");
const bodyParser = require("body-parser");
const request=require("request");


const https=require("https");
const app = express();

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    entended: true
  }));

  var keyword="india";
  var api_url="https://newsapi.org/v2/everything?q="+keyword+"&apiKey=1b72bf2aecf440e0bb9812348e990b35";

  app.post("/", function(req, response) {
     keyword=req.body.keyword;
    if(keyword===''){
        keyword='india';
    }

    api_url="https://newsapi.org/v2/everything?q="+keyword+"&apiKey=1b72bf2aecf440e0bb9812348e990b35";

    const userAgent = req.get('user-agent');
    request({
    url:api_url,
    method:'GET',
    headers: {
        'User-Agent': userAgent
    }
  },
  function(err,res,body){

    var data=JSON.parse(body);
   var datal=data.articles;
   if(data.totalResults===0)
   {
    response.sendFile(__dirname+"/error.html");
   }
    //response.render("news",{datum:data[2].urlToImage , title:data[2].title, description:data[2].description});
  else  response.render("news",{datum:datal});


} );});

app.get("/",function(req,response){


    const userAgent = req.get('user-agent');
    request({
    url:api_url,
    method:'GET',
    headers: {
        'User-Agent': userAgent
    }
  },
  function(err,res,body){

    var data=JSON.parse(body);
    data=data.articles;

    //response.render("news",{datum:data[2].urlToImage , title:data[2].title, description:data[2].description});
    response.render("news",{datum:data});


} );






    });

let port =process.env.PORT;
if(port==null||port==""){
  port=5000;
}

    app.listen(port,function(){
        console.log("Server started successfully");

    });
