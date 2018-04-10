$(document).ready(function () {
  "/api/todos"

  $.getJSON("/api/todos")
    .done(addTodos)
    .fail(function () {console.log("Something went wrong !")})

    $("#todoInput").keypress(function(event) {
      var todoText = $('#todoInput').val().trim();
      if(event.which == 13 && todoText) {
        createTodo();
      }
    });

    $('.list').on('click', 'li', function() {
      updateTodo($(this)); // Refers to the clicked 'li'
    })

    // span is generated after page load so listener on list class
    $(".list").on('click', 'span', function(event) { 
      event.stopPropagation();
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
  newTodo.data('completed', todo.complete);
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

function updateTodo(todo) {
  var clickedId = todo.data('id');
  var updateUrl = '/api/todos/' + clickedId;
  var isDone = !todo.data('completed'); // Changes the status to opposite
  var updateData = {complete: isDone}; 
  console.log(updateData);
  $.ajax({
    method: 'PUT',
    url: updateUrl,
    data: updateData
  })
  .then(function(updatedTodo) {
    todo.toggleClass('done'); // slashthrough
    todo.data('completed', isDone); // Make .data('completed') reflect current status
  })
}