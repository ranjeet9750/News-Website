const express = require("express");
const bodyParser = require("body-parser");
const request=require("request");
const https=require("https");
const { Console } = require("console");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    entended: true
  }));

// app.get("/", function(req, res) {
//     const url="https://newsapi.org/v2/everything?q=bitcoin&apiKey=1b72bf2aecf440e0bb9812348e990b35";
//     https.get(url,function(response){
//     console.log(response.statusCode);
//     
//     });
//     res.sendFile(__dirname + "/index.html");
//   })

  app.get("/", function (req, res) {
    const userAgent = req.get('user-agent');
    const url= "https://newsapi.org/v2/everything?q=bitcoin&apiKey=1b72bf2aecf440e0bb9812348e990b35";
    const options = {
        host: 'newsapi.org',
        path: '/v2/everything?q=bitcoin&apiKey=1b72bf2aecf440e0bb9812348e990b35',
        headers: {
            'User-Agent': userAgent
        }
    }
    https.get(url,options, function (response) {
        console.log(response.statusCode);
        response.on("data",function(data){
                    const newsData=JSON.stringify(data);
                   console.log(newsData[i].author);
        })
       
       
        // let data;
        // response.on('data', function (chunk) {
        //     if (!data) {
        //         data = chunk;
        //     }
        //     else {
        //         data += chunk;
        //     }
        // });
        // response.on('end', function () {
        //     const newsData = JSON.parse(data);
        //     console.log(newsData);
        // });
    });
    
    res.sendFile(__dirname+"/index.html");
    });
  
    
app.listen("5000",function(){
    console.log("Server is running inn the port 3000");
})
//