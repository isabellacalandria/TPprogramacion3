import React, { Component } from "react";
import './Series.css';
import CardSeries from "../CardSeries/CardSeries";

class Series extends Component {
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
    const { page, datos } = this.state;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmU4MGJiYTlkMTY4MzM3NDJlMzJjNGE0YTYwOWM2ZiIsIm5iZiI6MTc1NzQ0NzQ5OC4zOTEsInN1YiI6IjY4YzA4NTRhZTFjODBkMTE1NDk0ODFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WU-O3-2lU1lEcBmdUrfFr2eXUhO769kbRxlpHaz35GQ'
      }
    };

    fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`, options)
      .then(res => res.json())
      .then(data => {
        this.setState({
          datos: datos.concat(data.results), 
          page: page + 1                     
        });
      })
      .catch(err => console.log("El error fue: " + err));
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

export default Series;