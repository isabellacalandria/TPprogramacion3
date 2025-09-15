import React, { Component } from "react";
import './Peliculas.css'
import { Link } from "react-router-dom";

class Peliculas extends Component {
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
  
      fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options)
        .then(response => response.json())
        .then(data => this.setState({ datos: data.results }))
        .catch(error => console.log("El error fue: " + error));
    }
  
    render() {
      return (
        <section className="row cards all-movies" id="movies">
          {
            this.state.datos.length === 0
              ? <h3>Cargando...</h3>
              : this.state.datos.map(pelicula => (
                <article key={pelicula.id} className="single-card-movie">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                    alt={pelicula.title}
                    className="card-img-top"
                  />
                  <div className="cardBody">
                    <h5 className="card-title">{pelicula.title}</h5>
                    <p className="card-text">{pelicula.overview}</p>
                    <Link to={`/peliculas/${pelicula.id}`} className="btn btn-primary">
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

export default Peliculas



