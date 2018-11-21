# NodeJS

Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor, asíncrono, con I/O de datos, orientado a eventos y basado en el motor V8 de Google. <br/>

Al contrario que la mayoría del código JavaScript, no se ejecuta en un navegador, sino en el **servidor**. <br/>

## Qué puedo hacer con Node?
* Crear, abrir, leer, escribir, borrar, archivos en el servidor. 
* ABMC a una BD.
* Generar contenido dinámico.

Charla sobre cómo funciona JS https://www.youtube.com/watch?v=8aGhZQkoFbQ
http://latentflip.com/loupe/
Charla de presentación de NodeJS https://www.youtube.com/watch?v=ztspvPYybIY

## Comportamiento Asíncrono

La programación asíncrona establece la posibilidad de hacer que algunas operaciones devuelvan el control al programa llamante antes de que hayan terminado mientras siguen operando en segundo plano. <br/>

En caso de un error inesperado debemos capturarlo y controlar el posible estado en que haya podido quedar la ejecución del código. <br/>

## V8 (no murió)
V8 es el entorno de ejecución para JavaScript creado para Google Chrome. Es software libre desde 2008, está escrito en C++ y compila JavaScript a código de máquina.

## Módulos
Node.js incorpora varios "módulos", como por ejemplo el módulo de red, que proporciona una capa para programación de red asíncrona y otros módulos fundamentales, como por ejemplo Path, FileSystem, Buffer, Timers y el de propósito más general Stream. <br/>

Los módulos son el equivalente a librerías JS. <br />
Es decir, un conjunto de funciones que queremos incluir en nuestra aplicación. <br/>

Los módulos de terceros pueden extender node.js o añadir un nivel de abstracción, implementando varias utilidades, como por ejemplo **express**. <br/>

Pese a que los módulos pueden instalarse como archivos simples, normalmente se instalan utilizando el **Node Package Manager (npm)** que nos facilitará la compilación, instalación y actualización de módulos así como la gestión de las dependencias.

### NPM

Por lo que respecta al uso de npm, es un comando que funciona desde la línea de comandos. Por tanto lo tenemos que invocar con npm seguido de la operación que queramos realizar, como se muestra a continuación:
`npm install async` <br/>

Esto instalará el paquete async dentro del proyecto. <br/> 

Lo instalará dentro de la carpeta **node_modules** y a partir de ese momento estará disponible en el mismo y podremos incluirlo por medio de **require**:
```js 
var async = require ("async");
```

#### Instalar los paquetes de manera global

Npm instala los paquetes para un proyecto en concreto de manera local, sin embargo existen muchos paquetes de Node que te facilitan tareas relacionadas con el sistema operativo. <br/>

Estos paquetes, una vez instalados, se convierten en comandos disponibles en tu terminal. <br/>

Para instalar un paquete de manera global utilizamos el flag `-g` <br/>
`npm install -g create-react-app`


## Instalación de node y npm
NPM viene distribuido junto con node. Es decir, cuando instalamos node estamos instalando npm tambien.

### Descarga
Para descargar el `zip` o `pkg` ingresar a https://nodejs.org/es/download/

### Mediante gestor de paquetes
Ingresar a https://nodejs.org/es/download/package-manager/ y mediante el gestor de paquetes del sistema operativo con el que trabajamos descargar node.





