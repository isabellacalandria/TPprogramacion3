import React, { Component } from "react";
import "../Peliculas/Peliculas.css";
import CardPelis from "../CardPelis/CardPelis";

class PeliculasNP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      page: 2, 
      peliculasFiltradas: [],
      textoInput: "",
      cargando: true
    };
  }

  componentDidMount() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmU4MGJiYTlkMTY4MzM3NDJlMzJjNGE0YTYwOWM2ZiIsIm5iZiI6MTc1NzQ0NzQ5OC4zOTEsInN1YiI6IjY4YzA4NTRhZTFjODBkMTE1NDk0ODFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WU-O3-2lU1lEcBmdUrfFr2eXUhO769kbRxlpHaz35GQ"
      }
    };

    fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", options)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          datos: data.results, 
          cargando: false
        })
      )
      .catch((error) => console.log("Error en carga inicial:", error));
  }

  cargarPeliculas() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmU4MGJiYTlkMTY4MzM3NDJlMzJjNGE0YTYwOWM2ZiIsIm5iZiI6MTc1NzQ0NzQ5OC4zOTEsInN1YiI6IjY4YzA4NTRhZTFjODBkMTE1NDk0ODFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WU-O3-2lU1lEcBmdUrfFr2eXUhO769kbRxlpHaz35GQ"
      }
    };

    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${this.state.page}`,
      options
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          datos: this.state.datos.concat(data.results),
          page: this.state.page + 1
        })
      )
      .catch((error) => console.log("Error al cargar más:", error));
  }

  filtrar(e) {
    const texto = e.target.value;
    const filtradas = this.state.datos.filter((peli) =>
      peli.title.toLowerCase().includes(texto.toLowerCase())
    );
    this.setState({ peliculasFiltradas: filtradas, textoInput: texto });
  }

  render() {
    const peliculasAMostrar =
      this.state.textoInput.length === 0
        ? this.state.datos
        : this.state.peliculasFiltradas;

    return (
      <>
        <input
          className="filtro-input"
          placeholder="Filtrar Películas"
          onChange={(e) => this.filtrar(e)}
          value={this.state.textoInput}
        />

        <section className="row cards all-movies" id="movies">
          {this.state.cargando ? (
            <h3>Cargando...</h3>
          ) : peliculasAMostrar.length === 0 ? (
            <p>No se encontraron películas</p>
          ) : (
            peliculasAMostrar.map((pelicula) => (
              <CardPelis key={pelicula.id} pelicula={pelicula} />
            ))
          )}
        </section>

        <div className="load-more">
          <button onClick={() => this.cargarPeliculas()} className="cardButton">
            Cargar más
          </button>
        </div>
      </>
    );
  }
}

export default PeliculasNP;