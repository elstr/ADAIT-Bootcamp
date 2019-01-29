import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/home";
import Productos from "./components/productos/productos";
import Detalle from "./components/productos/detalle";
import "./App.css";
import Search from "./components/productos/search";

const SEARCH_BY_NAME =
  "https://api.mercadolibre.com/sites/MLA/search?limit=4&q=";

class App extends Component {
  constructor() {
    super();
    this.state = {
      productosCarrito: [{ id: 1, description: "batman en zunga" }],
      productos: []
    };
  }

  buscarProducto(nombre) {
    // fetch -> localhost:8080/.......
    const url = `${SEARCH_BY_NAME}${nombre}`;
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data.results);
        this.setState({ productos: data.results });
      });
  }

  agregarAlCarrito(producto) {
    const { productosCarrito } = this.state;
    this.setState({
      // productosCarrito: productosCarrito.concat(producto)
      productosCarrito: [...productosCarrito, producto]
    });
  }

  render() {
    return (
      <div className="App">
        <Search buscarProducto={nombre => this.buscarProducto(nombre)} />
        <BrowserRouter>
          <div>
            <Header />
            {/* 1. defino a qué path tiene que ser sensible Route */}
            {/* 2. defino qué componente tengo que renderizar */}
            <Route exact path="/" component={Home} />
            <Route exact path="/producto" component={Home} />
            {/* Ahora productos tiene que recibir por props la funcion agregar al carrito... */}
            {/* <Route exact path="/productos" component={Productos} /> */}
            <Route
              exact
              path="/productos"
              render={() => (
                <Productos
                  productos={this.state.productos}
                  agregarAlCarrito={producto => this.agregarAlCarrito(producto)}
                />
              )}
            />
            {/* <Route exact path="/productos/detalle/:id" component={Detalle} /> Si lo uso así mando de a 1 param separado por / y lo recibo en props.match.params */}
            <Route exact path="/productos/detalle" component={Detalle} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
