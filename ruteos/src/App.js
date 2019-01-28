import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/home";
import Productos from "./components/productos/productos";
import Detalle from "./components/productos/detalle";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            {/* 1. defino a qué path tiene que ser sensible Route */}
            {/* 2. defino qué componente tengo que renderizar */}
            <Route exact path="/" component={Home} />
            <Route exact path="/productos" component={Productos} />
            {/* <Route exact path="/productos/detalle/:id" component={Detalle} /> Si lo uso así mando de a 1 param separado por / y lo recibo en props.match.params */}
            <Route exact path="/productos/detalle" component={Detalle} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
