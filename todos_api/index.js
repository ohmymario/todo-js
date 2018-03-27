var express = require("express"), 
    port = process.env.PORT || 3000,
    bodyParser = require("body-parser");

var app = express();
var todoRoutes = require("./routes/todos");

// allow to access the body of a post/put request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/views')) // references the current directory in order to find the /views html files

app.get("/", function(req,res) {
  res.sendFile("index.html"); 
})

app.use("/api/todos", todoRoutes); //enables all todo.js routes to begin with /api/todos


app.listen(port, function() {
  console.log("APP IS RUNNING");
})