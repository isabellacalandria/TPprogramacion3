import React, { Component } from "react";
import CardPelis from "../../components/CardPelis/CardPelis";
import Navbar from "../../components/Navbar/Navbar";

class Favoritas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritas: [],
    };
  }

  componentDidMount() {
    let favoritosLocal = localStorage.getItem("favoritos");
    let favoritosParse = JSON.parse(favoritosLocal) || [];

    if (favoritosParse.length > 0) {
      favoritosParse.forEach((id) => {
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmU4MGJiYTlkMTY4MzM3NDJlMzJjNGE0YTYwOWM2ZiIsIm5iZiI6MTc1NzQ0NzQ5OC4zOTEsInN1YiI6IjY4YzA4NTRhZTFjODBkMTE1NDk0ODFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WU-O3-2lU1lEcBmdUrfFr2eXUhO769kbRxlpHaz35GQ"
            }
          }
        )
          .then((response) => response.json())
          .then((data) => {
            this.setState((prevState) => ({
              favoritas: [...prevState.favoritas, data],
            }));
          })
          .catch((error) => console.log("Error cargando película:", error));
      });
    }
  }

  render() {
    return (
      <>
        
        <Navbar />

        <section className="row cards all-movies">
          {this.state.favoritas.length === 0 ? (
            <h3>No tenés películas en favoritos</h3>
          ) : (
            this.state.favoritas.map((pelicula) => (
              <CardPelis key={pelicula.id} pelicula={pelicula} />
            ))
          )}
        </section>
      </>
    );
  }
}

export default Favoritas;