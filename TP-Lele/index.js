var comprasDelCliente = [];
var inputProducto = $('#input-producto');
var inputPrecio = $('#input-precio');
var ulLista = $('#lista-articulos-comprados')

var articuloComprado = {
   productoComprado: '',
   precioAbonar: ''
};


function AgregarProductoALaListaDeCompras(){
   var nombreProducto = inputProducto.val().trim();
   var precioProduto = inputPrecio.val().trim();

   if (nombreProducto  && precioProduto) {

       articuloComprado = {
           productoComprado: nombreProducto,
           precioAbonar: precioProduto
       };


       var itemDeLaLista = $('<li class="item">' + articuloComprado.productoComprado + ' ' + articuloComprado.precioAbonar + '</li>')
       var botonBorrar = $('<button class="borrar-item">Borrar Articulo</button>');

       itemDeLaLista.append(botonBorrar);
       ulLista.append(itemDeLaLista);

       comprasDelCliente.push(articuloComprado);
       console.log(comprasDelCliente);
       var compraDelClienteJson = JSON.stringify(articuloComprado)
       localStorage.setItem("compras", compraDelClienteJson);




   } else {
       alert('Completa el campo para avanzar');
   }

    $('#input-producto').val('');
    $('#input-precio').val('');


};

function borrarItemDeLaListaDeCompras (boton){
   boton.on('click', function() {
       $(this).parent().remove();

       var indice = comprasDelCliente.findIndex(zaraza => zaraza.productoComprado === articuloComprado.productoComprado); // buscar el indice de ese objeto del array
       comprasDelCliente.splice(indice,1);
       console.log(comprasDelCliente);
   })
};


function calcularElValorFinalDeLaCompra() {
   for (let i = 0; i < comprasDelCliente.length; i++){
       var monto = parseInt(comprasDelCliente[i].precioAbonar);
       var subtotal = subtotal += monto;
  }
  $("#total-a-pagar").text("Subtotal" + subtotal)
};

borrarItemDeLaListaDeCompras(botonBorrar);
calcularElValorFinalDeLaCompra()