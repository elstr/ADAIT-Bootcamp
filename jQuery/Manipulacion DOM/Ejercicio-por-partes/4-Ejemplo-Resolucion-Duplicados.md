### Paso 4: Resolver bugs de nodos duplicados
Resolver el bug de los nodos duplicados cuando borramos un elemento del array <br/>
Como ya hicimos `append` de algunos nodos y jquery no los borra y los vuelve a renderizar, tenemos que borrarlos a manos con el metodo `remove` <br/>
Borrar todos los nodos `fila` y ejecutar la funcion `render` nuevamente <br/>