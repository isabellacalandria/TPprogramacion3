import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Peliculas from "../../components/Peliculas/Peliculas"
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: []
    };
  }

  componentDidMount() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmU4MGJiYTlkMTY4MzM3NDJlMzJjNGE0YTYwOWM2ZiIsIm5iZiI6MTc1NzQ0NzQ5OC4zOTEsInN1YiI6IjY4YzA4NTRhZTFjODBkMTE1NDk0ODFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WU-O3-2lU1lEcBmdUrfFr2eXUhO769kbRxlpHaz35GQ"
      }
    };

    fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options)
      .then((res) => res.json())
      .then((data) => this.setState({ peliculas: data.results }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <h2>
            Popular movies this week
          </h2>

          <section className="cards all-movies">
            {this.state.peliculas.length === 0 ? (
              <h3>Cargando...</h3>
            ) : (
              this.state.peliculas.map((pelicula) => (
                <article key={pelicula.id} className="single-card-movie">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                    alt={pelicula.title}
                    className="card-img-top"
                  />
                  <div className="cardBody">
                    <h5 className="card-title">{pelicula.title}</h5>
                    <p className="card-text">{pelicula.overview}</p>
                    <div style={{ display: "flex", gap: "8px" }}>
                    <Link to={`/peliculas/${pelicula.id}`} className="btn btn-primary">
  Ver más
</Link>
                    </div>
                  </div>
                </article>
              ))
            )}
          </section>
        </div>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default Home;