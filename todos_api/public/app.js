$(document).ready(function () {
  "/api/todos"

  $.getJSON("/api/todos")
    .done(addTodos)
    .fail(function () {console.log("Something went wrong !")})

    $("#todoInput").keypress(function(event) {
      if(event.which == 13) {
        createTodo();
      }
    })
})

function addTodos(todos) {
  todos.forEach(function (todo) {
    addTodo(todo);
  });
}

function addTodo(todo) {
  var newTodo = $('<li class="task">' + todo.name+ '</li>');
  if (todo.complete) {
    newTodo.addClass('done');
  }
  $(".list").append(newTodo);
}

function createTodo() {
  var userInput = $("#todoInput").val();
  $.post("/api/todos", {name: userInput})
  .then(function(newTodo) {
    addTodo(newTodo);
  })
  .catch(function(err) {
    console.log(err);
  })
}