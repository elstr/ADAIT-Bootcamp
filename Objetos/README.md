# Objetos
En esta clase aprenderemos qué son los objetos, las clases y cómo utilizarlas dentro de JavaScript 😄 

---

## Qué es un objeto ? KESESO

* Una entidad modelada dentro de nuestro sistema
* Tienen propiedades (qué características tienen) y operaciones (qué cosas pueden hacer)

En el mundo de la programación orientada a objetos (POO), un objeto es el resultado de la instanciación de una clase.  KEEEEEE??? Sigamos leyendo…

## Qué es una clase? 🤔
Una clase es el “anteproyecto” donde definimos características y comportamientos comunes, pero ésta queda implementada sólo al crear una instancia de la clase, en la forma de un *objeto*. 

Imaginemos una clase como una hielera. La hielera brinda la “forma” / “propiedades”, pero no es hasta el momento en que llenamos la hielera con agua que obtenemos un hielo.
En esta analogía, cada hielo sería una “instancia” de la hielera, es decir una instancia de la clase. Un objeto que se corresponde con esa clase. Un hielo que se corresponde a esa hielera en particular.

Ejemplo concreto:

Clase Animal
Características: 4 patas, tipo de pelo (largo, corto), tipo de cola (larga, corta)
Operaciones:  Comer,  Hacer Sonido Característico

objeto perro 🐶
Comer =>  Come y digiere con un solo estomago
Hacer sonido característico => WUF

objeto vaca 🐮
Comer => Come y digiere con cinco estomagos
Hacer sonido característico => Muuuuu

Cada uno de éstos animales tiene características comunes (4 patas, tipo de pelo, tipo de cola).
Cada uno de estos animales responde de un modo diferente cuando hacen su sonido característico	 / comen. 

Las características comunes que reciben de su clase superior (animal) se las llama *herencia*.
La capacidad de cada objeto a responder de un modo diferente cuando se invoca un método (ejemplo comer) se llama *polimorfismo*.