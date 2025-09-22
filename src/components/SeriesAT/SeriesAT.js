import React, { Component } from "react";
import '../Series/Series.css';
import CardSeries from "../CardSeries/CardSeries";

class SeriesAT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      page: 1 
    };
  }

  componentDidMount() {
    this.cargarSeries();
  }

  cargarSeries = () => {
   

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmU4MGJiYTlkMTY4MzM3NDJlMzJjNGE0YTYwOWM2ZiIsIm5iZiI6MTc1NzQ0NzQ5OC4zOTEsInN1YiI6IjY4YzA4NTRhZTFjODBkMTE1NDk0ODFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WU-O3-2lU1lEcBmdUrfFr2eXUhO769kbRxlpHaz35GQ' // <-- reemplazá por tu token
      }
    };

    fetch(`https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=${this.state.page}`, options)
      .then(response => response.json())
      .then(data => {
        this.setState({
          datos: this.state.datos.concat(data.results), 
          page: this.state.page + 1
        });
      })
      .catch(error => console.log("El error fue: " + error));
  }

  render() {
    return (
      <>
        <section className="row cards all-movies" id="series">
          {
            this.state.datos.length === 0
              ? <h3>Cargando...</h3>
              : this.state.datos.map(serie => (
                  <CardSeries key={serie.id} serie={serie} />
                ))
          }
        </section>

        <div className="load-more">
          <button
            onClick={this.cargarSeries}
            className="cardButton"  
          >
            Cargar más
          </button>
        </div>
      </>
    );
  }
}

export default SeriesAT;