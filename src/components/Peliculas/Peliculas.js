import React, { Component } from "react";
import './Peliculas.css';
import CardPelis from "../CardPelis/CardPelis";

class Peliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      page: 1 // ← contador de página
    };
  }

  componentDidMount() {
    this.cargarPeliculas();
  }

  cargarPeliculas = () => {
    const { page, datos } = this.state;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmU4MGJiYTlkMTY4MzM3NDJlMzJjNGE0YTYwOWM2ZiIsIm5iZiI6MTc1NzQ0NzQ5OC4zOTEsInN1YiI6IjY4YzA4NTRhZTFjODBkMTE1NDk0ODFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WU-O3-2lU1lEcBmdUrfFr2eXUhO769kbRxlpHaz35GQ'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options)
      .then(response => response.json())
      .then(data => {
        this.setState({
          datos: datos.concat(data.results), 
          page: page + 1 
        });
      })
      .catch(error => console.log("El error fue: " + error));
  }

  render() {
    return (
      <>
        <section className="row cards all-movies" id="movies">
          {
            this.state.datos.length === 0
              ? <h3>Cargando...</h3>
              : this.state.datos.map(pelicula => (
                  <CardPelis key={pelicula.id} pelicula={pelicula} />
                ))
          }
        </section>

        <div className="load-more">
          <button 
            onClick={this.cargarPeliculas} 
            className="cardButton"
          >
            Cargar más
          </button>
        </div>
      </>
    );
  }
}

export default Peliculas;


