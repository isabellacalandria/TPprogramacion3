import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Busqueda from "../../components/Busqueda/Busqueda";

class Resultados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: [],
      query: props.match.params.query,
    };
  }

  componentDidMount() {
    var self = this;
    var url = `https://api.themoviedb.org/3/search/${this.state.tipo}?query=${this.state.query}&api_key=TU_API_KEY&language=es-ES`;

    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        var resultadosData;
        if (data.results) {
          resultadosData = data.results;
        } else {
          resultadosData = [];
        }
        self.setState({ resultados: resultadosData });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    var contenido;

    if (this.state.resultados === null) {
      contenido = <p>No se encontraron resultados.</p>;
    } else {
      if (this.state.resultados.length === 0) {
        contenido = <p>No se encontraron resultados.</p>;
      } else {
        contenido = [];
        for (var i = 0; i < this.state.resultados.length; i++) {
          var item = this.state.resultados[i];
          var titulo = item.title;
          if (!titulo) {
            titulo = item.name;
          }

          var imagen;
          if (item.poster_path) {
            imagen = "https://image.tmdb.org/t/p/w300" + item.poster_path;
          } else {
            imagen = "/placeholder.jpg";
          }

          contenido.push(
            <div key={item.id} className="card">
              <img src={imagen} alt={titulo} />
              <h3>{titulo}</h3>
            </div>
          );
        }
      }
    }

    return (
      <React.Fragment>
        <Navbar />
        <Busqueda />

        <h2>
          Resultados de búsqueda para {this.state.query}
          {this.state.tipo === "movie" ? "Películas" : "Series"}
        </h2>

        <div className="contenedor-cards">{contenido}</div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Resultados;
