import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Series/Series.css";

class CardSeries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      verMas: false,
      textoBoton: "Ver Mas",
      textoClassName: "infoTapada",
      esFavorito: false, // 👈 agregado
    };
  }

  agregarAFavoritos(id) {
    let favoritosLocal = localStorage.getItem("favoritosSeries");
    let favoritosParse = JSON.parse(favoritosLocal);

    if (favoritosParse !== null) {
      favoritosParse.push(id);
      localStorage.setItem("favoritosSeries", JSON.stringify(favoritosParse));
    } else {
      let nuevosFavoritos = [id];
      localStorage.setItem("favoritosSeries", JSON.stringify(nuevosFavoritos));
    }

    this.setState({ esFavorito: true });
  }

  sacarDeFavoritos(id) {
    let favoritosLocal = localStorage.getItem("favoritosSeries");
    let favoritosParse = JSON.parse(favoritosLocal) || [];

    let quitarFav = favoritosParse.filter((fav) => fav !== id);
    localStorage.setItem("favoritosSeries", JSON.stringify(quitarFav));

    this.setState({ esFavorito: false });
  }

  componentDidMount() {
    let favoritosLocal = localStorage.getItem("favoritosSeries");
    let favoritosParse = JSON.parse(favoritosLocal);

    if (favoritosParse !== null) {
      if (favoritosParse.includes(this.props.serie.id)) {
        this.setState({ esFavorito: true });
      }
    }
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

          <p className="more" onClick={() => this.cambiar()}>
            {this.state.textoBoton}
          </p>

          <p className={`card-text ${this.state.textoClassName}`}>
            {serie.overview}
          </p>

          <Link to={`/series/${serie.id}`} className="btn btn-primary">
            Ver detalle
          </Link>

          {this.state.esFavorito ? (
            <button onClick={() => this.sacarDeFavoritos(serie.id)}>
              Sacar de favoritos
            </button>
          ) : (
            <button onClick={() => this.agregarAFavoritos(serie.id)}>
              Agregar a favoritos
            </button>
          )}
        </div>
      </article>
    );
  }
}

export default CardSeries;
