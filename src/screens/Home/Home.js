import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    let guardados = JSON.parse(localStorage.getItem("favoritos"));
    if (!guardados) guardados = [];

    this.state = {
      peliculasNowPlaying: [],
      seriesHoy: [],
      peliculasPopulares: [], 
      seriesPopulares: [], 
      favoritos: guardados
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
      .then((data) => { 
      let cuatro= data.results.filter((peli,idx)=>idx<4)
      this.setState({ peliculasNowPlaying: cuatro })})
      .catch((err) => console.error(err));

    fetch("https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1", options)
      .then((res) => res.json())
      .then((data) => {
      let cuatro= data.results.filter((peli,idx)=>idx<4)
      this.setState({ seriesHoy: cuatro})})
      .catch((err) => console.error(err));

      fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options)
      .then((res) => res.json())
      .then((data) => {
        let cuatro = data.results.filter((peli, idx) => idx < 4);
        this.setState({ peliculasPopulares: cuatro });
      })
      .catch((err) => console.error(err));

    fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1", options)
      .then((res) => res.json())
      .then((data) => {
        let cuatro = data.results.filter((peli, idx) => idx < 4);
        this.setState({ seriesPopulares: cuatro });
      })
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
              this.state.peliculasNowPlaying.map((pelicula) => (
                <article key={pelicula.id} className="single-card-movie">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                    alt={pelicula.title}
                    className="card-img-top"
                  />
                  <div className="cardBody">
                    <h5 className="card-title">{pelicula.title}</h5>
                    <Link to={`/peliculas/${pelicula.id}`} className="btn btn-primary">
                      Ver detalle
                    </Link>
                  </div>
                </article>
              ))
            )}
          </section>

          <div className="load-more">
            <Link to="/peliculasNP" className="btn btn-secondary">Ver todas</Link>
          </div>

          <h2>Series Airing Today</h2>
          <section className="cards all-movies">
            {this.state.seriesHoy.length === 0 ? (
              <h3>Cargando...</h3>
            ) : (
              this.state.seriesHoy.map((serie) => (
                <article key={serie.id} className="single-card-movie">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                    alt={serie.name}
                    className="card-img-top"
                  />
                  <div className="cardBody">
                    <h5 className="card-title">{serie.name}</h5>
                    <Link to={`/series/${serie.id}`} className="btn btn-primary">
                    Ver detalle
                    </Link>
                  </div>
                </article>
              ))
            )}
          </section>
          <div className="load-more">
            <Link to="/seriesAT" className="btn btn-secondary">Ver todas</Link>
          </div>
          
          <h2>Películas populares</h2>
          <section className="cards all-movies">
            {this.state.peliculasPopulares.length === 0 ? (
              <h3>Cargando...</h3>
            ) : (
              this.state.peliculasPopulares.map((pelicula) => (
                <article key={pelicula.id} className="single-card-movie">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                    alt={pelicula.title}
                    className="card-img-top"
                  />
                  <div className="cardBody">
                    <h5>{pelicula.title}</h5>
                    <Link to={`/peliculas/${pelicula.id}`}>Ver detalle</Link>
                  </div>
                </article>
              ))
            )}
          </section>
          <div className="load-more">
            <Link to="/peliculas" className="btn btn-secondary">Ver todas</Link>
          </div>

          <h2>Series populares</h2>
          <section className="cards all-movies">
            {this.state.seriesPopulares.length === 0 ? (
              <h3>Cargando...</h3>
            ) : (
              this.state.seriesPopulares.map((serie) => (
                <article key={serie.id} className="single-card-movie">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                    alt={serie.name}
                    className="card-img-top"
                  />
                  <div className="cardBody">
                    <h5>{serie.name}</h5>
                    <Link to={`/series/${serie.id}`}>Ver detalle</Link>
                  </div>
                </article>
              ))
            )}
          </section>
          <div className="load-more">
            <Link to="/series" className="btn btn-secondary">Ver todas</Link>
          </div>
        </div>


        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;