var express = require("express"), 
    port = process.env.PORT || 3000;

var app = express();

var todoRoutes = require("./routes/todos");

app.get("/", function(req,res) {
  res.send("Hello from the root route"); // passing in an object reflects on the browser as json
})

app.use("/api/todos", todoRoutes); //enables all todo.js routes to begin with /api/todos


app.listen(port, function() {
  console.log("APP IS RUNNING");
})