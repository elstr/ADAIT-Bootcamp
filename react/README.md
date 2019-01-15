# REACT

## Clase 1
### Setup
1) Agregar la extension de chrome `react developer tools`
2) Linux/OSX: `sudo npm i -g create-react-app` || Win: admin terminal `npm i -g create-react-app`
3) Ejecutar `npm start`


### Slides: 5 a 10
https://slides.com/lele_lester/intro-react#/5

### Primer Component
1) Agregar una carpeta `components` dentro de `/src`
2) Agregar un archivo llamado `hello-world.jsx`

#### JSX
* Es una extensión de Javascript
* Lo vemos MUY parecido a HTML
* Syntactic sugar & Se transpila usando Babel (https://babeljs.io/repl/)


## STATE
El state es el "lugar" donde guardamos información. 
- Agreguemos un `button` en nuestro archivo `App.js` con el texto `+1`
- Cada vez que clickeamos el boton tenemos que sumar 1.
- El valor que obtenemos lo guardamos en el state.
    - Cómo guardamos algo en nuestro state? this.setState({ contador: valorContador })
- Agreguemos un label donde mostremos el valor del contador de nuestro state. 

## Visualizar update
- Abrir react dev tools y marcar la opcion `Highlight updates`

## Separar componentes
- Agreguemos un componente `Counter` en `components`
- Agreguemos la lógica del `state` en el `counter` component

## PROPS
Las props se utilizan para pasar data de un componente padre a un componente hijo. 
Agreguemos un componente `counter-con-props` para recibir por `props` cuánto hay que sumar cuando se clickea el boton. 

