$.ajax('http://localhost:3000/favoritos')
  .done(function (data) {
    console.log('termino el request', data);

    for (let i = 0; i < data.length; i++) {
      $('ul').append('<li>' + data[i].nombre + ' ' + data[i].edad + '</li>')
    }
  })

  $('#crear').click(function () {
    let inputNombreVal = $('#nombre').val();
    let inputEdadVal = $('#edad').val();

    $.ajax('http://localhost:3000/favoritos', {
      method: 'POST',
      data: {
        nombre: inputNombreVal,
        edad: inputEdadVal
      }
      //type: 'POST'
    })
  });





