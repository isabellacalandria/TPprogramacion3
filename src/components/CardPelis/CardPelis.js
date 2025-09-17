import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Peliculas/Peliculas.css";

class CardPelis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      verMas: false,
      textoBoton: "Ver Mas",
      textoClassName: "infoTapada",
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
    const { pelicula } = this.props;

    return (
      <article key={pelicula.id} className="single-card-movie">
        <img
          src={`https://image.tmdb.org/t/p/w342${pelicula.poster_path}`}
          alt={pelicula.title}
          className="card-img-top"
        />
        <div className="cardBody">
          <h5 className="card-title">{pelicula.title}</h5>

          <p className="more" onClick={() => this.cambiar()}>
            {this.state.textoBoton}
          </p>

          <section className="extra">
            <p className={this.state.textoClassName}>{pelicula.overview}</p>
          </section>

          <Link to={`/peliculas/${pelicula.id}`} className="btn btn-primary">
            Ver detalle
          </Link>
        </div>
      </article>
    );
  }
}

export default CardPelis;