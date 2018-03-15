var express = require("express"), 
    port = process.env.PORT || 3000;

app = express();

app.get("/", function(req,res) {
  res.send("Hi there from Express!!");
})

app.get("/happy", function (req, res) {
  res.send(":)");
})

app.listen(port, function() {
  console.log("APP IS RUNNING");
})