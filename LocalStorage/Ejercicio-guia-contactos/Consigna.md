## Ejercicio guía telefónica

### PARTE 1: Armar HTML y agregar persona
En el archivo HTML agregar lo siguientes:

**INPUTS**
* Nombre
* Apellido
* DNI
* Telefono

Todos los inputs deben estar dentro de un `div` con el id `datos`.

**BUTTON**
* Agregar persona

Cuando clickeamos el button `Agregar Persona`:
* Crear un objeto persona
* Guardarlo en un array de personas llamado `personas` (array global a la funcion)
* Guardar el array en localStorage con la key `personas`
⚠️ Verificar en consola el localStorage

**CONTAINER**
* Agregar un div vacío al final con el id `container`.

### PARTE 2: Mostrar personas
Crear una función `mostrarPersonas` para mostrar todas las personas que vayamos cargando. <br/>
Mostrar las personas en una tabla. La tabla tiene que tener el id `tablaPersonas`. <br/>
Hacer `append` de la tabla a `container`. <br/>


### PARTE 3: Verificar localStorage
Al abrir la página se debe verificar si el localStorage tiene algo cargado en `personas`. <br/>
Si algo está cargado en `personas`, mostrar en pantalla todos los datos de las personas cargadas. <br/>

### PARTE 4: Armar dropdown
Agregar en mi archivo `.js` una función llamada `cargarDropDown`. <br/>
En dicha funcion usar jquery para crear el siguiente dropdown:
* ID = dropdown
* name = amigos
* multiple

🙋‍ `<select id="dropdown" name="amigos" multiple>` <br/>

Dentro de la funcion, iterar el array de personas, por cada persona crear con jquery un tag `<option>`. <br/>
Asignarle al `.val` y al `.text` del `<option>`  el `telefono` de la persona.<br/>
Hacer append de `<option>` al dropdown prevaimente definido.<br/>

⚠️ Recargar la página y validar si visualizamos correctamente el dropdown.<br/>
😏 Si no ves el dropdown... estás llamando a la función `cargarDropDown` en algún lado?

### PARTE 5: Asignar telefonos amigos cuando creo una persona
Cuando estoy creando una persona puedo seleccionar multiples telefonos.<br/>
Agregarle al objeto persona la propiedad `telefonosDeAmigos` (OJO: Esto solo va a funcionar para las personas nuevas que creemos).<br/>

Crear una función que sea `agregarTelefonosAmigos` que reciba por parámetro la persona que estoy creando.<br/>

⚠️ Llamá a la función `agregarTelefonosAmigos` desde `agregarPersona`, pasale la persona que estás creando. En `agregarTelefonosAmigos` agregá un `console.log(persona)` para validar que recibís bien el parámetro. <br/>

Adentro de `agregarTelefonosAmigos` quiero que definas un array vacío que se llame `telefonosAmigos`.<br/>
Utilizar un selector para buscar el dropdown por `id` seguido del tag `options` pero que sólo agarre los options que tengan el atributo html `selected` (🙋‍ AYUDA: `option:selected`).<br/>

Una vez que armaste el selector, `$("xxxxxxx")` utilizar `each` para poder recorrer cada una de esas opciones
(🙋‍ AYUDA: `.each(function() { ... })`).<br/>

⚠️ Adentro de la funcion del `each` quiero que agregues un `console.log` con algún mensaje. Fijate que llegues a ese punto bien.<br/>

Adentro de la funcion del `each` quiero que agarres el `valor` (🙋‍ AYUDA: `.val()`) de esa opcion (🙋‍ AYUDA: `$(this)`) y lo guardes en una variable llamada `telefonoAmigo`.<br/>
Ultimos dos pasitos: guardá `telefonoAmigo` en `telefonosAmigos` y actualizale a la `persona` que recibís por parámetro la propiedad `telefonosDeAmigos` con `telefonosAmigos` (el array que tiene todos los telefonos que elegiste).<br/>

⚠️ Recargar la página, completá los inputs, seleccioná varios teléfonos del dropdown y validá que funcione bien.



