function verUsuariosEnConsola() {
  $.ajax({
    url: "https://reqres.in/api/users",
    type: "GET",
    success: function(response) {
      console.log(response);
    }
  });
}
