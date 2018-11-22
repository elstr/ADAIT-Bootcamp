var usuarios = [];
var totalPaginas = 1;

function verUsuariosEnConsola() {
  $.ajax({
    url: "https://reqres.in/api/users",
    type: "GET",
    success: function(response) {
      usuarios = response.data;
      totalPaginas = response.total_pages;
      armarHTML();
    }
  });
}
function armarHTML() {
  mostrarUsuarios();
  renderBotones();
}
function renderBotones() {
  // Agarro el div que va a contener los botons
  var botonesContainer = $("#botones");
  // Le agrego algunas clases para que quede mas lindo (?)
  botonesContainer.attr("class", "col-xs-12 container-botones");
  // Itero de 1 al total de paginas
  for (let index = 1; index <= totalPaginas; index++) {
    // Por cada pagina armo un boton
    const boton = $("<input type='button'></input>");
    // Le cambio el value al valor del index en el que estoy parada
    boton.attr("value", index);
    // En el evento on click, llamo a cargarDataPorPagina y le paso la pagina
    boton.on("click", function() {
      console.log("apretaste el boton", index);
      const key = "LS" + index;
      cargarDataPorPagina(index, key);
    });
    // Hago append del boton al container de botones
    botonesContainer.append(boton);
  }
}
function mostrarUsuarios() {
  var div = $("#usuarios");
  div.addClass("container-usuarios");
  for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i];
    const img = $("<img />");
    const divUser = $("<div />");

    divUser.attr("class", "col-xs-3");

    img.attr("src", usuario.avatar);
    img.attr("class", "img--border_radius");

    const p = `<p class='col-xs-offset-2 col-xs-4'>${usuario.first_name} ${
      usuario.last_name
    }</p>`;

    divUser.append(img);
    divUser.append(p);

    div.append(divUser);
  }
}
function cargarDataPorPagina(pagina) {
  console.log(pagina);
  // Si tengo algo en el local storage me traigo esos usuarios
  // y llamo a mostrarUsuarios()
  if (localStorage[key] !== undefined) {
    // 1) Agarra del localStorage los usuarios en ese key
    // 2) Mostrar esos usuarios
    usuarios = JSON.parse;
  } else {
    // 1) Traer la data del endpoint
    // 2) Guardar en LS esa data
    $.ajax({
      url: "https://reqres.in/api/users",
      type: "GET",
      data: {
        page: pagina
      },
      success: function(response) {
        usuarios = response.data;
        localStorage.setItem(key, usuarios);
        mostrarUsuarios();
      }
    });
  }
}
