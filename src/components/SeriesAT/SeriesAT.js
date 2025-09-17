import React, { Component } from "react";
import '../Series/Series.css';
import CardSeries from "../CardSeries/CardSeries";

class SeriesAT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      page: 1 // contador de página
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
        Authorization: 'Bearer TU_TOKEN_REAL' // <-- reemplazá por tu token
      }
    };

    fetch(`https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=${page}`, options)
      .then(response => response.json())
      .then(data => {
        this.setState({
          datos: this.state.datos.concat(data.results), // ✅ concat bien usado
          page: page + 1
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
            className="cardButton"  // misma clase que los otros botones
          >
            Cargar más
          </button>
        </div>
      </>
    );
  }
}

export default SeriesAT;