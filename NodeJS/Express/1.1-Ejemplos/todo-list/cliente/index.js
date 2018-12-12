// primero vamos a buscar todos los TODOs que tenemos
$.ajax('http://localhost:3000/todos')
  .done(function (data) {
    // el servidor me envio el array de todos
    for (var i = 0; i < data.length; i++) {
      $('#todos').append('<li>' + data[i].text + '</li>')
    }
  })

$('#new-todo').click(function () {
  let laNuevaTarea = $('#el-texto').val()

  let newTodo = {
    text: laNuevaTarea
  }

  $.ajax('http://localhost:3000/todos', {
    method: 'POST',
    data: newTodo
  })
})