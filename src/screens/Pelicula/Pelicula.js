import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";

class PeliculaDetalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id; 

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmU4MGJiYTlkMTY4MzM3NDJlMzJjNGE0YTYwOWM2ZiIsIm5iZiI6MTc1NzQ0NzQ5OC4zOTEsInN1YiI6IjY4YzA4NTRhZTFjODBkMTE1NDk0ODFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WU-O3-2lU1lEcBmdUrfFr2eXUhO769kbRxlpHaz35GQ"
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((res) => res.json())
      .then((data) => this.setState({ pelicula: data }))
      .catch((error) => console.log("Error en fetch:", error));
  }

  render() {
    const { pelicula } = this.state;
    let textoGeneros = "";
    if (pelicula) {
      const generos = pelicula.genres;
      if (generos) {
        for (let i = 0; i < generos.length; i++) {
          textoGeneros += generos[i].name;
          if (i < generos.length - 1) {
            textoGeneros += ", ";
          }
        }
      }
    }
    return (
      <React.Fragment>
        <Navbar />
        {!pelicula ? (
          <h3>Cargando...</h3>
        ) : (
          <section className="detalle">
            <h2>{pelicula.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w342${pelicula.poster_path}`}
              alt={pelicula.title}
            />
            <p><strong>Sinopsis: </strong>{pelicula.overview}</p>
            <p><strong>Fecha de estreno:</strong> {pelicula.release_date}</p>
            <p><strong>Duración:</strong> {pelicula.runtime} min</p>
            <p><strong>Calificacion:</strong> {pelicula.vote_average}</p>
            <p><strong>Generos: </strong>{textoGeneros}</p>
          </section>
        )}
      </React.Fragment>
    );
  }
}

export default PeliculaDetalle;