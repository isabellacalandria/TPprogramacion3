import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: "",
      categoria: "movie"
    };
  }

  actualizarTexto(e) {
    this.setState({ texto: e.target.value });
  }

  seleccionarCategoria(e) {
    this.setState({ categoria: e.target.value });
  }

  ejecutarBusqueda = (e) => {
    e.preventDefault();
    this.props.history.push(
      "/RBusqueda/" + this.state.categoria + "/" + this.state.texto
    );
  };

  render() {
    return (
      <section className="Buscador">
        <form onSubmit={this.ejecutarBusqueda} className="search">
          <div className="radios">
            <label>
              <input
                type="radio"
                name="categoria"
                value="movie"
                checked={this.state.categoria === "movie"}
                onChange={(e) => this.seleccionarCategoria(e)}
              />
              Películas
            </label>
            <label>
              <input
                type="radio"
                name="categoria"
                value="tv"
                checked={this.state.categoria === "tv"}
                onChange={(e) => this.seleccionarCategoria(e)}
              />
              Series
            </label>
          </div>

          <input
            type="text"
            name="texto"
            value={this.state.texto}
            onChange={(e) => this.actualizarTexto(e)}
            placeholder="Ingresá un título..."
          />

          <button type="submit" className="botones">
            Buscar
          </button>
        </form>
      </section>
    );
  }
}

export default withRouter(Buscador);


