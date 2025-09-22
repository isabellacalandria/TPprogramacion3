import React, { Component } from "react";
import "../Series/Series.css";
import CardSeries from "../CardSeries/CardSeries";

class SeriesAT extends Component {
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

    fetch("https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1", options)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          datos: data.results, 
          cargando: false
        })
      )
      .catch((error) => console.log("Error al cargar series:", error));
  }

  cargarSeries() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmU4MGJiYTlkMTY4MzM3NDJlMzJjNGE0YTYwOWM2ZiIsIm5iZiI6MTc1NzQ0NzQ5OC4zOTEsInN1YiI6IjY4YzA4NTRhZTFjODBkMTE1NDk0ODFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WU-O3-2lU1lEcBmdUrfFr2eXUhO769kbRxlpHaz35GQ"
      }
    };

    fetch(`https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=${this.state.page}`, options)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          datos: this.state.datos.concat(data.results),
          page: this.state.page + 1
        })
      )
      .catch((error) => console.log("Error al cargar más series:", error));
  }

  filtrar(e) {
    const texto = e.target.value;
    const filtradas = this.state.datos.filter((serie) =>
      serie.name.toLowerCase().includes(texto.toLowerCase())
    );
    this.setState({ seriesFiltradas: filtradas, textoInput: texto });
  }

  render() {
    return (
      <>
        <input
          className="filtro-input"
          placeholder="Filtrar Series"
          onChange={(e) => this.filtrar(e)}
          value={this.state.textoInput}
        />

        {this.state.cargando ? (
          <p>Cargando...</p>
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

        <button onClick={() => this.cargarSeries()} className="btn-cargar">
          CARGAR MÁS
        </button>
      </>
    );
  }
}

export default SeriesAT;