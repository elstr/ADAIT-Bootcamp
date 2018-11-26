// PARTE 1
var personas = [];
function guardarPersona() {
  var nombre = $("#nombre").val();
  var apellido = $("#apellido").val();
  var dni = $("#dni").val();
  var telefono = $("#telefono").val();
  var persona = {
    nombre: nombre,
    apellido: apellido,
    dni: dni,
    telefono: telefono,
    telefonosDeAmigos: []
  };
  asignarAmigosSeleccionados(persona);
  personas.push(persona);
  localStorage.setItem("personas", JSON.stringify(personas));
  // const personasStringify = JSON.stringify(personas)
  // localStorage.setItem("personas", personasStringify)

  // Como en mostrar personas itero todas las personas y las muestro, si agrego una nueva
  // cuando itere sobre todas las personas voy a estar haciendo append de nuevo de las personas
  // Limpiemos la tabla entonces
  limpiarTabla(); // esto tmb lo puedo hacer dentro de la funcion mostrarPersonas -> incluso considero que es mejor siendo que es responsabilidad de mostrarPersonas armar correctamente la tabla
  mostrarPersonas();
}
function limpiarTabla() {
  $(".fila").remove();
}
function mostrarPersonas() {
  var tablaPersonas = $("<table id='tablaPersonas'></table>");
  var container = $("#container");
  for (let i = 0; i < personas.length; i++) {
    var fila = $('<tr class="fila"></tr>');

    var tdNombre = "<td>" + personas[i].nombre + "</td>";
    var tdApellido = "<td>" + personas[i].apellido + "</td>";
    var tdDNI = "<td>" + personas[i].dni + "</td>";
    var tdTelefono = "<td>" + personas[i].telefono + "</td>";

    fila.append(tdNombre);
    fila.append(tdApellido);
    fila.append(tdDNI);
    fila.append(tdTelefono);

    // Si la persona tiene telefonos amigos, armo los td para los telefonos amigos
    // Tengo que iterar el array de telefonos amigos.
    // Tambien podemos separar esto en otra funcion para que esta funcion no tenga tanto codigo.
    if (personas[i].telefonosDeAmigos.length > 0) {
      for (
        let index = 0;
        index < personas[i].telefonosDeAmigos.length;
        index++
      ) {
        var tdTelefonoAmigo =
          "<td>" + personas[i].telefonosDeAmigos[index] + "</td>";
        fila.append(tdTelefonoAmigo);
      }
    }

    tablaPersonas.append(fila);
  }

  container.append(tablaPersonas);
}

function verificarLocalStorage() {
  const personasGuardadas = localStorage.getItem("personas");
  if (personasGuardadas) {
    personas = JSON.parse(personasGuardadas);
    console.log(personas);
  }
}
// PARTE 4
function cargarDropDown() {
  var miDropDown = $(
    '<select id="dropdown" name="amigos" multiple="multiple">'
  );
  for (let i = 0; i < personas.length; i++) {
    var option = $("<option></option>");
    option.val(personas[i].telefono);
    option.text(personas[i].telefono);
    miDropDown.append(option);
  }
  $("#datos").append(miDropDown);
}
function asignarAmigosSeleccionados(persona) {
  var amigos = [];
  $("#dropdown option:selected").each(function() {
    var telefonoAmigoSeleccionado = $(this).val();
    amigos.push(telefonoAmigoSeleccionado);
  });
  persona.telefonosDeAmigos = amigos;
}

function armarTabla() {
  var container = $("#container");
  var tablaPersonas = $("<table id='tablaPersonas'></table>");
  // Puedo hacer append de string o append de cada th definiendolos previamente
  tablaPersonas.append(
    "<th>Nombre</th><th>Apellido</th><th>DNI</th><th>Telefono</th><th>Telefonos Amigos</th>"
  );
  container.append(tablaPersonas);
}

armarTabla();
verificarLocalStorage();
mostrarPersonas();
cargarDropDown();
