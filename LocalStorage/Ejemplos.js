// --------------------------------------------------------------------------------------------------------
// ------------ Guardando valores simples -----------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------

function guardarCurso() {
  localStorage.setItem("curso", "ADA");
}
function recuperarCurso() {
  const curso = localStorage.getItem("curso");
  console.log(curso);
}

// --------------------------------------------------------------------------------------------------------
// ------------ Guardando estructuras complejas -----------------------------------------------------------
// --------------------------------------------------------------------------------------------------------

var datosUsuario = {
  user: "elstr",
  nombre: "Lele",
  apellido: "Lester"
};

function guardarUsuario() {
  // No puedo guardar un objeto directamente en localStorage correctamente
  // Ver qué sucede cuando llamo a recuperarUsuario()
  localStorage.setItem("usuario", datosUsuario);
}
function recuperarUsuario() {
  // No devuelve el objeto correctamente, devuelve otra cosa...
  const usuario = localStorage.getItem("usuario");
  console.log(usuario);
}

function guardarUsuarioCorrectamente() {
  // Primero pasamos el objeto a JSON y luego lo guardamos
  const objetoEnJSON = JSON.stringify(datosUsuario);
  localStorage.setItem("usuario2", objetoEnJSON);
}
function recuperarUsuario2() {
  // Ahora si recuperamos el usuario y podemos parsearlo
  let usuario = localStorage.getItem("usuario2");
  console.log("antes del parse: ", usuario);
  usuario = JSON.parse(usuario);
  console.log("despues del parse: ", usuario);
}
