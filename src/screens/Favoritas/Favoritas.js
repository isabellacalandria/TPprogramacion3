import React, { Component } from "react";
import CardPelis from "../../components/CardPelis/CardPelis";
import CardSeries from "../../components/CardSeries/CardSeries";
import Navbar from "../../components/Navbar/Navbar";

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      series: [],
    };
  }

  componentDidMount() {

    let favoritosPeliculas = localStorage.getItem("favoritos");
    let favoritosParsePeliculas = JSON.parse(favoritosPeliculas) || [];

    if (favoritosParsePeliculas.length > 0) {
      let peliculas = [];

      for (let i = 0; i < favoritosParsePeliculas.length; i++) {
        let id = favoritosParsePeliculas[i];

        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmU4MGJiYTlkMTY4MzM3NDJlMzJjNGE0YTYwOWM2ZiIsIm5iZiI6MTc1NzQ0NzQ5OC4zOTEsInN1YiI6IjY4YzA4NTRhZTFjODBkMTE1NDk0ODFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WU-O3-2lU1lEcBmdUrfFr2eXUhO769kbRxlpHaz35GQ',
          },
        })
          .then((res) => res.json())
          .then((data) => {
            peliculas.push(data);

            if (peliculas.length === favoritosParsePeliculas.length) {
              this.setState({ peliculas });
            }
          })
          .catch((error) => console.log("Error cargando película:", error));
      }
    }

    let favoritosSeries = localStorage.getItem("favoritosSeries");
    let favoritosParseSeries = JSON.parse(favoritosSeries) || [];

    if (favoritosParseSeries.length > 0) {
      let series = [];

      for (let i = 0; i < favoritosParseSeries.length; i++) {
        let id = favoritosParseSeries[i];

        fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmU4MGJiYTlkMTY4MzM3NDJlMzJjNGE0YTYwOWM2ZiIsIm5iZiI6MTc1NzQ0NzQ5OC4zOTEsInN1YiI6IjY4YzA4NTRhZTFjODBkMTE1NDk0ODFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WU-O3-2lU1lEcBmdUrfFr2eXUhO769kbRxlpHaz35GQ',
          },
        })
          .then((res) => res.json())
          .then((data) => {
            series.push(data);

            if (series.length === favoritosParseSeries.length) {
              this.setState({ series });
            }
          })
          .catch((error) => console.log("Error cargando serie:", error));
      }
    }
  }

  render() {
    const { peliculas, series } = this.state;

    return (
      <>
        <Navbar />

        {/* Sección películas */}
        <section className="row cards all-movies">
          <h2>Películas favoritas</h2>
          {peliculas.length === 0 ? (
            <h3>No tenés películas en favoritos</h3>
          ) : (
            peliculas.map(function (pelicula) {
              return <CardPelis key={pelicula.id} pelicula={pelicula} />;
            })
          )}
        </section>

        {/* Sección series */}
        <section className="row cards all-movies">
          <h2>Series favoritas</h2>
          {series.length === 0 ? (
            <h3>No tenés series en favoritos</h3>
          ) : (
            series.map(function (serie) {
              return <CardSeries key={serie.id} serie={serie} />;
            })
          )}
        </section>
      </>
    );
  }
}

export default Favoritos;

