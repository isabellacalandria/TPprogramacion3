import React, { Component } from "react";
import './Series.css'
import { Link } from "react-router-dom";

class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: []
    };
  }

  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmU4MGJiYTlkMTY4MzM3NDJlMzJjNGE0YTYwOWM2ZiIsIm5iZiI6MTc1NzQ0NzQ5OC4zOTEsInN1YiI6IjY4YzA4NTRhZTFjODBkMTE1NDk0ODFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WU-O3-2lU1lEcBmdUrfFr2eXUhO769kbRxlpHaz35GQ'
      }
    };

    fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1", options)
      .then(response => response.json())
      .then(data => this.setState({ datos: data.results }))
      .catch(error => console.log("El error fue: " + error));
  }

  render() {
    return (
      <section className="row cards all-movies" id="series">
        {
          this.state.datos.length === 0
            ? <h3>Cargando...</h3>
            : this.state.datos.map(serie => (
              <article key={serie.id} className="single-card-movie">
                <img
                  src={`https://image.tmdb.org/t/p/w342${serie.poster_path}`}
                  alt={serie.name}
                  className="card-img-top"
                />
                <div className="cardBody">
                  <h5 className="card-title">{serie.name}</h5>
                  <p className="card-text">{serie.overview}</p>
                  <Link to={`/series/${serie.id}`} className="btn btn-primary">
                    Ver más
                  </Link>
                </div>
              </article>
            ))
        }
      </section>
    );
  }
}

export default Series;