import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculasNowPlaying: [],
      seriesHoy: [],
    };
  }

  componentDidMount() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmU4MGJiYTlkMTY4MzM3NDJlMzJjNGE0YTYwOWM2ZiIsIm5iZiI6MTc1NzQ0NzQ5OC4zOTEsInN1YiI6IjY4YzA4NTRhZTFjODBkMTE1NDk0ODFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WU-O3-2lU1lEcBmdUrfFr2eXUhO769kbRxlpHaz35GQ",
      },
    };

    fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", options)
      .then((res) => res.json())
      .then((data) => this.setState({ peliculasNowPlaying: data.results }))
      .catch((err) => console.error(err));

    fetch("https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1", options)
      .then((res) => res.json())
      .then((data) => this.setState({ seriesHoy: data.results }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />

        <div className="container">

          <h2>Now Playing</h2>
          <section className="cards all-movies">
            {this.state.peliculasNowPlaying.length === 0 ? (
              <h3>Cargando...</h3>
            ) : (
              this.state.peliculasNowPlaying.slice(0, 4).map((pelicula) => (
                <article key={pelicula.id} className="single-card-movie">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                    alt={pelicula.title}
                    className="card-img-top"
                  />
                  <div className="cardBody">
                    <h5 className="card-title">{pelicula.title}</h5>
                    <Link to={`/peliculas/${pelicula.id}`} className="btn btn-primary">
                      Ver más
                    </Link>
                  </div>
                </article>
              ))
            )}
          </section>

          <h2>Series airing today</h2>
          <section className="cards all-movies">
            {this.state.seriesHoy.length === 0 ? (
              <h3>Cargando...</h3>
            ) : (
              this.state.seriesHoy.slice(0, 4).map((serie) => (
                <article key={serie.id} className="single-card-movie">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                    alt={serie.name}
                    className="card-img-top"
                  />
                  <div className="cardBody">
                    <h5 className="card-title">{serie.name}</h5>
                    <Link to={`/series/${serie.id}`} className="btn btn-primary">
                      Ver más
                    </Link>
                  </div>
                </article>
              ))
            )}
          </section>

        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;