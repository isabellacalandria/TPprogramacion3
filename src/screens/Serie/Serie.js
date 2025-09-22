import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";

class SerieDetalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serie: null,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmU4MGJiYTlkMTY4MzM3NDJlMzJjNGE0YTYwOWM2ZiIsIm5iZiI6MTc1NzQ0NzQ5OC4zOTEsInN1YiI6IjY4YzA4NTRhZTFjODBkMTE1NDk0ODFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WU-O3-2lU1lEcBmdUrfFr2eXUhO769kbRxlpHaz35GQ",
      },
    };

    fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, options)
      .then((res) => res.json())
      .then((data) => this.setState({ serie: data }))
      .catch((error) => console.log("Error en fetch de serie:", error));
  }

  render() {
    let textoGeneros = "";
    if (this.state.serie) {
      const generos = this.state.serie.genres;
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
        {!this.state.serie ? (
          <h3>Cargando...</h3>
        ) : (
          <section className="detalle">
            <h2>{this.state.serie.name}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w342${this.state.serie.poster_path}`}
              alt={this.state.serie.name}
            />
            <p><strong>Sinopsis: </strong> {this.state.serie.overview}</p>
            <p><strong>Fecha de estreno:</strong> {this.state.serie.first_air_date}</p>
            <p><strong>Calificación:</strong> {this.state.serie.vote_average}</p> 
            <p><strong>Generos: </strong>{textoGeneros}</p>     
          </section>
        )}
      </React.Fragment>
    );
  }
}

export default SerieDetalle;