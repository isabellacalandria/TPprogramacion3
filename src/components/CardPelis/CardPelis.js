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
      esFavorito: false,
    };
  }

  agregarAFavoritos(id) {
    let favoritosLocal = localStorage.getItem("favoritos");
    let favoritosParse = JSON.parse(favoritosLocal);

    if (favoritosParse !== null) {
      favoritosParse.push(id);
      localStorage.setItem("favoritos", JSON.stringify(favoritosParse));
    } else {
      let nuevosFavoritos = [id];
      localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
    }

    this.setState({ esFavorito: true });
  }

  sacarDeFavoritos(id) {
    let favoritosLocal = localStorage.getItem("favoritos");
    let favoritosParse = JSON.parse(favoritosLocal) || [];

    let quitarFav = favoritosParse.filter((fav) => fav !== id);
    localStorage.setItem("favoritos", JSON.stringify(quitarFav));

    this.setState({ esFavorito: false });
  }

  componentDidMount() {
    let favoritosLocal = localStorage.getItem("favoritos");
    let favoritosParse = JSON.parse(favoritosLocal);

    if (favoritosParse !== null) {
      if (favoritosParse.includes(this.props.pelicula.id)) {
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

          <button className="more" onClick={() => this.cambiar()}>
            {this.state.textoBoton}
          </button>

          <section className="extra">
            <p className={this.state.textoClassName}>{pelicula.overview}</p>
          </section>

          <Link to={`/peliculas/${pelicula.id}`} className="btn btn-primary">
            Ver detalle
          </Link>

          {this.state.esFavorito ? (
            <button onClick={() => this.sacarDeFavoritos(pelicula.id)} className="botonfav">
              Sacar de favoritos
            </button>
          ) : (
            <button onClick={() => this.agregarAFavoritos(pelicula.id)} className="botonfav">
              Agregar a favoritos
            </button>
          )}
        </div>
      </article>
    );
  }
}

export default CardPelis;
