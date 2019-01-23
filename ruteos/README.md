# BrowserRouter
Es el encargado de rutear nuestra aplicación del lado del front-end.
Usa el HTML5 history API lo que quiere decir que es el enrutador que nos da la posibilidad de cambiar las rutas en el navegador.

No va a hacer mucho si no esta acompañado de **enlaces y rutas**, empecemos hablando de los enlaces que se llaman **Link** y **NavLink**. Estos funcionan de manera similar a las anclas (`a`) de HTML.

## Link - propiedades:

**to:** similar al href de , puede recibir un string indicando la ruta a donde va a mandar o bien recibir un **objeto** con: _pathname_, un string que representa la ruta a donde se dirige; _search_, un string que representa el query de una url; _hash_, un hash para poner en la url; y por último _state_, un objeto que representa un estado en la navegación.

**replace:** similar a to, pero en lugar de añadir una nueva ruta al stack del historial de navegación, reemplaza la ultima ruta por la nueva ruta.

**innerRef:** es una forma de obtener el elemento HTML del componente, funciona igual que el ref de React.

## NavLink
Es una versión especial de Link cuenta con varias características más **poderosas** como, por ejemplo:

**activeClassName:** cuando se navegue a la ruta que dirija el NavLink, esta propiedad añadirá al _className_ del componente el string que le pasemos.

**activeStyle:** similar a activeClassName, pero con estilos en línea.

**isActive:** es una función que se mandara cuando naveguemos a la ruta del NavLink.

**exact:** recibe un booleano, sirve para marcar si dirige a una ruta exacta. Se vera a mayor profundidad cuando manejemos rutas.

**strict:** recibe un booleano, sirve para marcar si dirige a una ruta estricta. Se vera a mayor profundidad cuando manejemos rutas.

**location:** sirve para poder hacer la comparación de isActive con alguna otra ruta.



# SEGUNDA PARTE - ROUTE

Aun no estas cambiando nada dentro de la interfaz, solamente se esta cambiando la url. Para poder cambiar la interfaz acorde a la url usaremos **Route**, algunas propiedades son:

**component:** qué componente queres renderizar.
**path:** indica la ruta en la cual va a renderizar el componente que le pases.
Ejemplo -> Si ingresamos a `/productos` renderizar el componente `Productos`

**render:** es una alternativa a componente, podes hacer un renderizado en forma de función como en los componentes de React.
**children:** son los hijos o componentes que tenga anidado.
**exact:** recibe un booleano, si le indicas que es true solo hará match si la ruta coincide exactamente con la ubicación, no hará caso a ninguna sub-ruta.

path|location.pathname| exact | matchea?
/uno| /uno/dos        | true  | no
/uno| /uno/dos        | false | si

<Route exact path="/uno" component={About} />
<Route path="/uno" component={About} />

**strict:** recibe un booleano, si le indicas que es true solo hará match si la ruta a la que te dirigis es idéntica a la ruta del Route.

path|location.pathname| strict  | matchea?
/uno| /uno/           | true    | no
/uno| /uno/           | false   | si


**sensitive:** recibe un booleano, si le indicas que es true activara el case sensitive para la ruta.

path|location.pathname| sensitive | matchea?
/uno| /Uno            | true      | no
/Uno| /uno/           | true      | no
/Uno| /uno            | false     | si



- Vamos a agregar un componente Productos y un componente Home. 
- Vamos a configurar Route para renderizar estos componentes.

### Ejercicio 1:
- Crear la ruta y el componente para el **contacto**
- Agregá tus redes sociales y un poco de información tuya pequeña 🐀 .

### Ejercicio 2:
- Crear un componente que sea `NotFound.jsx` devolver un texto que sea `No hemos encontrado la pagina que buscabas`
- Pensar cómo podemos hacer para que en caso de que ninguna de nuestras rutas cumpla con la que estmaos buscando podamos mostrar ese componente.



# SWITCH
Qué pasa si mas de una ruta matchea? Estaría rendereando más de un componente.
Ejemplo:
```jsx
    <Route exact path="/" component={Home}/>
    <Route component={NotFound}/>
```

Necesito mostrar la primera ruta que cumple con el requisito. 
Utilizo `<Switch>`

```jsx
<Switch>
    <Route exact path="/" component={Home}/>
    <Route component={NotFound}/>
</Switch>
```
