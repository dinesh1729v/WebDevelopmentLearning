const express = require("express");
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
  response.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(request, response){
  response.sendFile(__dirname + "/bmiCalculator.html");
});


app.post("/", function(request, response){
  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);
  var result = num1+num2;

  response.send("The result of the calculation is:"+result);
});

app.post("/bmicalculator", function(request, response){
  var weight = Number(request.body.weight);
  var height = Number(request.body.height);
  var bmi = weight/(height*height);

  response.send("The BMI of your height and weight is:" + bmi);
});

app.listen(3000, function(){
  console.log("server started on port 3000");
});
