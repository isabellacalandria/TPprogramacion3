import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Series/Series.css";

class CardSeries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      verMas: false,
      textoBoton: "Ver Mas",
      textoClassName: "infoTapada", // empieza oculta
    };
  }

  cambiar() {
    if (this.state.verMas === false) {
      this.setState({
        verMas: true,
        textoBoton: "Ver Menos",
        textoClassName: "",
      });
    } else {
      this.setState({
        verMas: false,
        textoBoton: "Ver Mas",
        textoClassName: "infoTapada",
      });
    }
  }

  render() {
    const { serie } = this.props;

    return (
      <article key={serie.id} className="single-card-movie">
        <img
          src={`https://image.tmdb.org/t/p/w342${serie.poster_path}`}
          alt={serie.name}
          className="card-img-top"
        />
        <div className="cardBody">
          <h5 className="card-title">{serie.name}</h5>

          {/* Botón ver más / menos */}
          <p className="more" onClick={() => this.cambiar()}>
            {this.state.textoBoton}
          </p>

          {/* Descripción controlada por className */}
          <p className={`card-text ${this.state.textoClassName}`}>
            {serie.overview}
          </p>

          <Link to={`/series/${serie.id}`} className="btn btn-primary">
            Ver detalle
          </Link>
        </div>
      </article>
    );
  }
}

export default CardSeries;