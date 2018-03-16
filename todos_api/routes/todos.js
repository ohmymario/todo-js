var express = require("express");
var router = express.Router();
var db = require("../models") //only need models directory since all models are required in the index.js file

// actual route = /api/todos/
router.get("/", function(req, res) {
  db.Todo.find()
  .then(function(todos) {
    res.json(todos);
  })
  .catch(function (err) {
    res.send(err);
  })
});


module.exports = router; //give access to these routes in index.js