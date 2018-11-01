# jQuery Manipulación DOM

## Append

Nos permite insertar nodos html. <br/>
Supongamos que tenemos una lista `<ul>` y queremos insertar dinámicamente elementos:

- Puedo definir una variable y pasarle le código html como un string

```js
var fernet = '<li style="color:red;">Fernet</li>';
var coca = '<li style="color:red;">Coca</li>';
listaProductos.append(fernet);
listaProductos.append(coca);
```

<br/>
Y qué pasa si tenemos una lista de productos y en vez de agregarlos uno por uno los agregamos recorriendo la lista? Y si en vez de armar una lista armamos una tabla? <br/>
Acá empezamos a entender el poder 💪 de agregar nodos dinámicamente  🧙‍

```js
var misProductos = [
{nombre: "Fernet", categoria: "Bebida Espirituosa", precio: 250},
{nombre:"Coca Cola", categoria:"Bebida", precio:"75"},
{nombre:"Maní", categoria:"Comida", precio:"40"},
{nombre:"Papas %Día", categoria:"Comida", precio:"75"}]

// Fuera del for armo la estructura de mi tabla
var table = '<table></table>'
var headers='<th>Productos</th><th>Categoría</th><th>Precio</th>'
table.append(headers)

// Busco el div donde quiero insertar mi tabla dinámica
var container = $("div.table-container")
container.append(table)
// Dentro del for agrego la data de la tabla recorriendo mis productos
for(var i = 0; i < misProductos.length; i++){
// String interpolation ${} => Armo una cadena string sin la necesidad de concatenar de manera clasica con + espacio +
var nombre = `<td>${misProductos[i].nombre}</td>`
var categoria = `<td>${misProductos[i].categoria}</td>`
var precio = `<td>${misProductos[i].precio}</td>`

// Hago append de mis td a la fila
var fila = $('<tr></tr>')
fila.append(nombre)
fila.append(categoria)
fila.append(precio)

// Hago append de la fila a la tabla
table.append(fila)
}
```
