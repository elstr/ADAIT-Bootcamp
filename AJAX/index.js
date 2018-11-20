var usuarios = [];
function verUsuariosEnConsola() {
  $.ajax({
    url: "https://reqres.in/api/users",
    type: "GET",
    success: function(response) {
      console.log(response);
      usuarios = response.data;
      mostrarUsuarios();
    }
  });
}

function mostrarUsuarios() {
  var div = $("#usuarios");
  for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i];
    const img = $("<img />");
    img.attr("src", usuario.avatar);
    const p = `<p>${usuario.first_name} ${usuario.last_name}</p>`;
    div.append(img);
    div.append(p);
  }
}
