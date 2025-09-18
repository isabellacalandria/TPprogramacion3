import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class FBusqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
    busqueda: "",
    };
  }

  ejecutarBusqueda = (e) => {
    e.preventDefault();
  
    this.props.history.push(`/resultados/${this.state.tipo}/${this.state.busqueda}`);
  };


  controlarCambios = (e) => {
    this.setState({ busqueda: e.target.value });
  };

 
  controlarTipo = (e) => {
    this.setState({ tipo: e.target.value });
  };

  render() {
    return (
      <section className="FBusqueda">
        <form onSubmit={this.ejecutarBusqueda}>
          <input
            type="text"
            placeholder="Buscar..."
            value={this.state.busqueda}
            onChange={this.controlarCambios}
          />
          <button type="submit">Buscar</button>
        </form>
      </section>
    );
  }
}

export default withRouter(FBusqueda);
