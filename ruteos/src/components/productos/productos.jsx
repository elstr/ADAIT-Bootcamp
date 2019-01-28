import React from "react";
import { PRODUCTOS } from "../../helpers/constants";
import { Link } from "react-router-dom";
const Productos = () => {
  // console.log("formattedproducts", formattedProducts)
  return (
    <section>
      {PRODUCTOS.map((prod, index) => {
        return (
          <Link
            key={`link-${index}`}
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
        );
      })}
    </section>
  );
};

export default Productos;
