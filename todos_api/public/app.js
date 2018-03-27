$(document).ready(function () {
  "/api/todos"

  $.getJSON("/api/todos")
    .done(addTodos)
    .fail(function () {console.log("Something went wrong !")})

    $("#todoInput").keypress(function(event) {
      if(event.which == 13) {
        createTodo();
      }
    });

    // span is generated after page load so listener on list class
    $(".list").on('click', 'span', function() { 
      removeTodo($(this).parent());
    })
})

function addTodos(todos) {
  todos.forEach(function (todo) {
    addTodo(todo);
  });
}

function addTodo(todo) {
  var newTodo = $('<li class="task">' + todo.name +'<span>X</span></li>');
  newTodo.data('id', todo._id);
  if (todo.complete) {
    newTodo.addClass('done');
  }
  $(".list").append(newTodo);
}

function createTodo() {
  var userInput = $("#todoInput").val();
  $.post("/api/todos", {name: userInput})
  .then(function(newTodo) {
    $("#todoInput").val("");
    addTodo(newTodo);
  })
  .catch(function(err) {
    console.log(err);
  })
}

function removeTodo(todo) {
  var clickedId = todo.data('id');
  var deleteUrl = '/api/todos/' + clickedId;
  $.ajax({
    method: 'DELETE',
    url: deleteUrl
  })
  .then(function (data) {
    todo.remove();
  })
  .catch(function(err) {
    console.log(err);
  })
}