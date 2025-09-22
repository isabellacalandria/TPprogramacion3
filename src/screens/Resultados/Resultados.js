import React from "react";
import { Component } from "react";
import CardPelis from "../../components/CardPelis/CardPelis"
import CardSeries from "../../components/CardSeries/CardSeries";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

class BuscadorScreen extends Component {
    constructor(props) {
      super(props);
      this.state = { pelis: [], cargando: true };
    }
  
    componentDidMount() {

      let url = `https://api.themoviedb.org/3/search/${this.props.match.params.contenido}?include_adult=false&language=en-US&page=1&query=${this.props.match.params.busqueda}`;
  
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmU4MGJiYTlkMTY4MzM3NDJlMzJjNGE0YTYwOWM2ZiIsIm5iZiI6MTc1NzQ0NzQ5OC4zOTEsInN1YiI6IjY4YzA4NTRhZTFjODBkMTE1NDk0ODFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WU-O3-2lU1lEcBmdUrfFr2eXUhO769kbRxlpHaz35GQ",
        },
      };
  
      fetch(url, options)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          this.setState({ pelis: res.results, cargando: false });
        })
        .catch((err) => console.error(err));
    }
  
    render() {
        console.log(this.state.pelis);
        
      return (
        <>
          {this.state.cargando ? (
            <p>Cargando...</p>
          ) : (
            <section className="results-page">
                <Navbar/>
                <div className="results-grid">
                 {this.state.pelis.map((item) =>
                this.props.match.params.contenido === "movie" ? (
                     <CardPelis key={item.id} pelicula={item} />
                ) : (
                    <CardSeries key={item.id} serie={item} />
        )
        )}
                </div>
                <Footer/>
                </section>
          )}
        </>
      );
    }
  }
  
  export default BuscadorScreen;
  