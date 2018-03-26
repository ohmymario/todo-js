var express = require("express");
var router = express.Router();
var db = require("../models") //only need models directory since all models are required in the index.js file
var helpers = require("../helpers/todos");

// actual route = /api/todos/

router.route("/")
  .get(helpers.getTodos) // Retrieve all todos
  .post(helpers.createTodo) // create a single todo

router.route("/:todoId")
  .get(helpers.getTodo) // Retrieve single todo
  .put(helpers.updateTodo) // Retrieve single todo and update it
  .delete(helpers.deleteTodo) // Delete the single todo

module.exports = router; //give access to these routes in index.js