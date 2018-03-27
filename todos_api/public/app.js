$(document).ready(function () {
  "/api/todos"

  $.getJSON("/api/todos")
    .done(addTodos)
    .fail(function () {
      console.log("Something went wrong !");
    })
})

function addTodos(todos) {
  todos.forEach(function (todo) {
    var newTodo = $('<li class="task">' + todo.name + todo.complete + '</li>');
    if (todo.complete) {
      newTodo.addClass('done');
    }
    $(".list").append(newTodo);
  })
}