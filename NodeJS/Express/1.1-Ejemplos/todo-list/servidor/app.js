// incluimos el modulo de express
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// creamos la aplicacion de express
const app = express();

// agregamos y configuramos bodyParser para que, cuando me hacen un POST,
// la informacion que me envia el cliente, quede en req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// creamos el router de express
const router = express.Router();
// creo el array vacio de los todos donde vamos a ir pusheando cada tarea nueva
// const todos = [];

// lo inicializamos en 1, el primer ID que quiero asignar
let contador = 1;

// configuramos el server para que cuando nos llegue
// un http-get a la direccion /todos, devolvamos el array
// de todos
router.get('/todos', function (req, res) {
  let todos = fs.readFileSync('todos.json');
  todos = JSON.parse(todos);

  res.send(todos);
});

router.post('/todos', function (req, res) {
  // leemos el array de TODOs guardados en el archivo todos.json
  let todos = fs.readFileSync('todos.json');
  todos = JSON.parse(todos);

  console.log(req.body);
  // req.body va a tener todo lo que el cliente me mande (json, string, numeros, arrays, etc)
  // {
  //   text: 'tarea 1'
  // }

  // creamos un nuevo objeto con la propiedad ID (que es el contador numerico)
  let newTodo = {
    id: contador++,
    text: req.body.text
  }
  // agregar el nuevo todo al array de todos
  todos.push(newTodo);

  fs.writeFileSync('todos.json', JSON.stringify(todos));

  // le respondo al cliente enviandole el nuevo objeto del todo
  res.send(newTodo);
});

router.put('/todos/:id', function (req, res) {
  // leemos el array de TODOs guardados en el archivo todos.json
  let todos = fs.readFileSync('todos.json');
  todos = JSON.parse(todos);

  const todoId = req.params.id;
  const todo = req.body;
  // esto devuelve un array con los objetos que cumplen la condicion
  // todos.filter(...)
  // por eso usamos
  let elTodoAEditar = todos.find(todo => todo.id == todoId);

  if (elTodoAEditar === null) {
    return res.send('todo mal')
  }

  elTodoAEditar.text = todo.text;

  fs.writeFileSync('todos.json', JSON.stringify(todos));

  res.send(elTodoAEditar);
});



router.delete('/todos/:id', function (req, res) {

})



app.use(router);

// le decimos a express que deje corriendo el servidor, en el puerto 3000
app.listen(3000, function () {
  console.log('server listening...')
});