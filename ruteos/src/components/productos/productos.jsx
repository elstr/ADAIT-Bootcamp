import React from "react";
import { PRODUCTOS } from "../../helpers/constants";
import {Link} from "react-router-dom"
const Productos = () => {
  return (
    <section>
      {PRODUCTOS.map((prod, index) => {
        return (
          <Link key={index} to={`/productos/detalle/${prod.id}`}>
          <article>
            <img style={{display: "inline-block", verticalAlign:"middle"}} src={`${prod.thumbnail}`} />
            <h4 style={{display: "inline-block"}}>{prod.title}</h4>
            <p>{prod.descripcion}</p>
          </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Productos;
