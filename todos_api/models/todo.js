// schema file

var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: "Please enter a name"
  },
  complete: {
    type: Boolean, 
    default: false
  },
  created_date: {
    type: Date,
    default: Date.now // will be autofilled with the time of completion 
  }

})

var Todo = mongoose.model("Todo", todoSchema) // (name of model, Schema)

module.exports = Todo; // ready to exports the above model ^^

