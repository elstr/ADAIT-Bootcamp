import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Productos = props => {
  return (
    <section>
      {props.productos.map((prod, index) => {
        return (
          <div  key={`producto-${index}`}>
            <Link
              to={{
                pathname: "/productos/detalle", // defino la ruta a la cual este link me va a redireccionar
                state: { producto: prod }, // por state le paso los objetos /data que necesito
                search: "?sort=name" // le puedo pasar un queryString
              }}
            >
              <article>
                <img
                  style={{ display: "inline-block", verticalAlign: "middle" }}
                  src={`${prod.thumbnail}`}
                />
                <h4 style={{ display: "inline-block" }}>{prod.title}</h4>
                <p>{prod.descripcion}</p>
              </article>
            </Link>
            <div>
              <span>${prod.price}</span>
            </div>
             {/* <Button onClick={prod => this.agregarAlCarrito(prod)}>Agregar al carrito</Button> */} 
            {/* Si hago esto necesito guardar ese item en el state local de mi componente y no tengo forma de comunicarselo a mi componente Carrito (a menos que use redux o context) */}
            {/* Actualmente mi componente es un componente stateless... para hacer lo anterior deberia convertirlo en una CLASS */}
           
            {/* Entonces necesito "elevar" ese state al producto padre del componente productos y del componente carrito */}
            {/* Es decir, llevo el state de los productos elegidos al componente APP */}
            <Button onClick={() => props.agregarAlCarrito(prod)}>Agregar al carrito</Button>
          </div>
        );
      })}
    </section>
  );
};

export default Productos;
