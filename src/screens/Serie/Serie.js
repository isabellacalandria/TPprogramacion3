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
    const id = this.props.match.params.id; // ID de la serie desde la URL

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
    const { serie } = this.state;

    return (
      <React.Fragment>
        <Navbar />
        {!serie ? (
          <h3>Cargando...</h3>
        ) : (
          <section className="detalle">
            <h2>{serie.name}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w342${serie.poster_path}`}
              alt={serie.name}
            />
            <p><strong>Sinopsis:</strong> {serie.overview}</p>
            <p><strong>Fecha de estreno:</strong> {serie.first_air_date}</p>
            <p><strong>Calificación:</strong> {serie.vote_average}</p>
          </section>
        )}
      </React.Fragment>
    );
  }
}

export default SerieDetalle;