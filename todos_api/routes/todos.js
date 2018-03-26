var express = require("express");
var router = express.Router();
var db = require("../models") //only need models directory since all models are required in the index.js file
var helpers = require("../helpers/todos");

// actual route = /api/todos/

router.route("/")
  .get(helpers.getTodos)
  .post(helpers.createTodo);

// Retrieve single todo
router.get("/:todoId", function(req, res) {
  db.Todo.findById(req.params.todoId) //url params used to find the specific todo
  .then(function(foundTodo) {
    res.json(foundTodo);
  })
  .catch(function(err) {
    res.send(err);
  })
});

// Retrieve single todo and update it
router.put("/:todoId", function(req, res) {
  db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
  .then(function(todo) {
    res.json(todo);
  })
  .catch(function(err) {
    res.send(err);
  })
})

router.delete("/:todoId", function(req, res) {
  db.Todo.remove({_id: req.params.todoId})
  .then(function() {
    res.json({message: "we deleted it!"});
  })
  .catch(function() {
    res.send(err);
  })
})

module.exports = router; //give access to these routes in index.js