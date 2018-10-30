var misProductos = [
  { id: 0, nombre: "Fernet", categoria: "Bebida Espirituosa", precio: 250 },
  { id: 1, nombre: "Coca Cola", categoria: "Bebida", precio: "75" },
  { id: 2, nombre: "Maní", categoria: "Comida", precio: "40" },
  { id: 3, nombre: "Papas %Día", categoria: "Comida", precio: "75" }
];

function inicializarTabla() {
  var table = $('<table id="tablaProductos"></table>');
  var headers = "<th>Productos</th><th>Categoría</th><th>Precio</th>";
  table.append(headers);

  // Busco el div donde quiero insertar mi tabla dinámica
  var container = $("div.table-container");
  container.append(table);
  render();
}

function deleteProduct(producto) {
  // jQuery no es reactivo, tengo que volver a renderizar mi tabla
  const indice = misProductos.findIndex(p => p.id === producto.id);
  console.log(indice);
  misProductos.splice(indice, 1);
  console.log(producto);
  console.log(misProductos);
  limpiarTabla();
  render(misProductos);
}

function limpiarTabla() {
  $(".fila").remove();
}

function render(productos = misProductos) {
  var tablaProductos = $("#tablaProductos");
  // Dentro del for agrego la data de la tabla recorriendo mis productos
  for (let i = 0; i <= productos.length; i++) {
    var nombre = "<td>" + productos[i].nombre + "</td>";
    var categoria = "<td>" + productos[i].categoria + "</td>";
    var precio = "<td>" + productos[i].precio + "</td>";

    var btnDelete = $("<button>Delete<button>").on("click", function() {
      deleteProduct(productos[i]);
    });

    var fila = $('<tr class="fila"></tr>');
    fila.append(nombre);
    fila.append(categoria);
    fila.append(precio);
    fila.append(btnDelete);
    tablaProductos.append(fila);
  }
}

inicializarTabla();
