# EXPRESS
"Fast, unopinionated, minimalist web framework for Node.js"
Lo que nos interesa es que es `unopinionated` (`sin opinion`) y `minimalist` significa que no hace un millón de cosas por si mismo.
Es un framework o "marco de trabajo" para NodeJS. Nos permite estructurar nuestro código de una manera en particular que vamos a ir viendo.

## Como lo instalo?
1) necesito crear mi archivo package json: `npm init -y` el flag `-y` es para no tener que completar a mano todos los campos.
2) instalemos express: `npm i -S express` para guardar express como una dependencia de mi proyecto.
3) cuando instalamos nuestra primera dependencia nos crea un archivo `package-lock.json` 

#### Qué es `package-lock.json`?
Es creado automaticamente cuando instalamos dependencias. 
Describe EXACTAMENTE el arbol de dependencias para que proximas instalaciones de package.json repliquen EXACTAMENTE igual el arbol.

## Como uso Express?
```js
// importo express
const express = require("express");
// me traigo el router
const router = express.Router();
```



Cosas que vamos a usar
bodyParser <br/>
dotenv -> `npm i -S dotenv`