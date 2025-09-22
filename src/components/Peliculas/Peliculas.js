import React, { Component } from "react";
import "./Peliculas.css";
import CardPelis from "../CardPelis/CardPelis";

class Peliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      page: 2, // 👈 empieza en 2 porque vamos a traer la primera en componentDidMount
      peliculasFiltradas: [],
      textoInput: "",
      cargando: true
    };
  }

  componentDidMount() {
    // ✅ Fetch directo de la primera página
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmU4MGJiYTlkMTY4MzM3NDJlMzJjNGE0YTYwOWM2ZiIsIm5iZiI6MTc1NzQ0NzQ5OC4zOTEsInN1YiI6IjY4YzA4NTRhZTFjODBkMTE1NDk0ODFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WU-O3-2lU1lEcBmdUrfFr2eXUhO769kbRxlpHaz35GQ"
      }
    };

    fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          datos: data.results,
          cargando: false
        })
      )
      .catch((error) => console.log("Error al cargar películas:", error));
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

    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${this.state.page}`, options)
      .then((res) => res.json())
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
    return (
      <>
        <input
          className="filtro-input"
          placeholder="Filtrar Películas"
          onChange={(e) => this.filtrar(e)}
          value={this.state.textoInput}
        />

        {this.state.cargando ? (
          <p>Cargando...</p>
        ) : (
          <section className="row cards all-movies" id="movies">
            {this.state.textoInput.length === 0
              ? this.state.datos.map((pelicula, idx) => (
                  <CardPelis key={idx} pelicula={pelicula} />
                ))
              : this.state.peliculasFiltradas.map((pelicula, idx) => (
                  <CardPelis key={idx} pelicula={pelicula} />
                ))}
          </section>
        )}

        <button onClick={() => this.cargarPeliculas()} className="btn-cargar">
          CARGAR MÁS
        </button>
      </>
    );
  }
}

export default Peliculas;
