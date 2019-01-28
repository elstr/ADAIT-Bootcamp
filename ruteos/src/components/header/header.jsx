import React, { Component } from "react";
import "./header.css";
// 1. Importo NavLink desde "react-router-dom"
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav>
          <ul>
            <li>
              {/* to: a donde me redirije cuando le doy click */}
              {/* activeClassName: la clase que le pone dinamicamente cuando le doy click */}
              <NavLink exact to="/" activeClassName="is-selected">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/productos" activeClassName="is-selected">
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" activeClassName="is-selected">
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
