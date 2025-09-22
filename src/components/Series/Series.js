import React, { Component } from "react";
import "./Series.css";
import CardSeries from "../CardSeries/CardSeries";

class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      page: 2, 
      seriesFiltradas: [],
      textoInput: "",
      cargando: true
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

    fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1", options)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          datos: data.results,
          cargando: false
        })
      )
      .catch((err) => console.log("Error al cargar series:", err));
  }

  cargarSeries = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmU4MGJiYTlkMTY4MzM3NDJlMzJjNGE0YTYwOWM2ZiIsIm5iZiI6MTc1NzQ0NzQ5OC4zOTEsInN1YiI6IjY4YzA4NTRhZTFjODBkMTE1NDk0ODFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WU-O3-2lU1lEcBmdUrfFr2eXUhO769kbRxlpHaz35GQ"
      }
    };

    fetch(
      `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${this.state.page}`,
      options
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          datos: this.state.datos.concat(data.results),
          page: this.state.page + 1
        })
      )
      .catch((err) => console.log("Error al cargar más series:", err));
  };

  filtrar = (e) => {
    const texto = e.target.value;
    const filtradas = this.state.datos.filter((serie) =>
      serie.name.toLowerCase().includes(texto.toLowerCase())
    );
    this.setState({ seriesFiltradas: filtradas, textoInput: texto });
  };

  render() {
    return (
      <>
        <input
          className="filtro-input"
          placeholder="Filtrar Series"
          onChange={this.filtrar}
          value={this.state.textoInput}
        />

        {this.state.cargando ? (
          <h3>Cargando...</h3>
        ) : (
          <section className="row cards all-movies" id="series">
            {this.state.textoInput.length === 0
              ? this.state.datos.map((serie, idx) => (
                  <CardSeries key={idx} serie={serie} />
                ))
              : this.state.seriesFiltradas.map((serie, idx) => (
                  <CardSeries key={idx} serie={serie} />
                ))}
          </section>
        )}

        <div className="load-more">
          <button onClick={this.cargarSeries} className="cardButton">
            Cargar más
          </button>
        </div>
      </>
    );
  }
}

export default Series;