const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}) );

app.get("/",function(req, res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
  var query = req.body.cityName;
  var apiKey = "e8716fc29359d116e8f364895bf0e73f";
  const url = 'https://api.openweathermap.org/data/2.5/weather?q='+query+"&appid="+apiKey;

  https.get(url, function(response){
    console.log(response.statusCode);
    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      console.log(weatherDescription);
      res.write("<p>The weather is currently "+weatherDescription+"</p>");
      res.write("<h1>The temperature in "+query+" is "+ temp + "degrees celcius.</h1>");
      res.send();
    });
  });

});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
// const url = "https://api.openweathermap.org/data/2.5/weather?q=visakhapatnam&appid=e8716fc29359d116e8f364895bf0e73f";
// https.get(url, function(response){
//   console.log(response.statusCode);
//   response.on("data", function(data){
//     const weatherData = JSON.parse(data);
//     const temp = weatherData.main.temp;
//     const weatherDescription = weatherData.weather[0].description;
//     const icon =
//     console.log(weatherDescription);
//     res.write("<p>The weather is currently "+weatherDescription+"</p>");
//     res.write("<h1>The temperature in Visakhapatnam is "+ temp + "degrees celcius.</h1>");
//     res.send();
//   });
// });
