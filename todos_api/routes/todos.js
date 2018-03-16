var express = require("express");
var router = express.Router();
var db = require("../models") //only need models directory since all models are required in the index.js file

// actual route = /api/todos/

// Retrieve all todos
router.get("/", function(req, res) {
  db.Todo.find()
  .then(function(todos) {
    res.json(todos);
  })
  .catch(function(err) {
    res.send(err);
  })
});

// post a single todo
router.post("/", function(req, res) {
  db.Todo.create(req.body)
  .then(function(newTodo) {
    res.status(201).json(newTodo);
  })
  .catch(function(err) {
    res.send(err);
  })
});

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

module.exports = router; //give access to these routes in index.js