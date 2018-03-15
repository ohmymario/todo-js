var mongoose = require("mongoose");

mongoose.set("debug", true); //allow for the errors to be saved to the database
mongoose.connect("mongodb://localhost/todo-api") //localhost since not using remote server

mongoose.Promise = Promise; //Telling mongoose we are going to use promises