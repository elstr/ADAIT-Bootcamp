// primero vamos a buscar todos los TODOs que tenemos
$.ajax('http://localhost:3000/todos')
  .done(function (data) {
    // el servidor me envio el array de todos
    for (var i = 0; i < data.length; i++) {
      // <li>
      //   TEXTO_TAREA
      //   <input value="TEXTO_TAREA"/>
      //   <button onclick="editar()">editar</button>
      // </li>
      // data[i].id
      $('#todos').append(`<li data-id="${data[i].id}">
        ${data[i].text}
        <input value="${data[i].text}"/>
        <button class="btn-editar">editar</button>
        <button class="btn-guardar">guardar</button>
        <button class="btn-eliminar">x</button>
      </li>`)
    }
  })

$(document).on('click', '.btn-eliminar', function () {
  // obtengo el id de la tarea a eliminar
  const id = $(this).parent().data('id');

  // hago la llamada ajax, con el metodo delete
  $.ajax('http://localhost:3000/todos/' + id, {
    method: 'DELETE'
  })
  .done(function () {
    // refrescamos la pagina
    location.reload();
  })
});

$(document).on('click', '.btn-guardar', function () {
  const newText = $(this).siblings('input').val();
  const id = $(this).parent().data('id');
  // http://localhost:3000/todos/1
  $.ajax('http://localhost:3000/todos/' + id, {
    method: "PUT",
    data: {
      text: newText
    }
  })
  .done(function () {
    location.reload()
  })
})

$(document).on('click', '.btn-editar', function () {
  $(this).siblings('input').show();
  $(this).siblings('.btn-guardar').show();
  $(this).hide();
})

// function editar () {
//   // este es el elemento donde hacemos click
//   console.log($(this));
//   $(this).siblings('input').show();
// }

$('#new-todo').click(function () {
  let laNuevaTarea = $('#el-texto').val()

  let newTodo = {
    text: laNuevaTarea
  }

  $.ajax('http://localhost:3000/todos', {
    method: 'POST',
    data: newTodo
  })
  .done(function () {
    location.reload();
  })
})