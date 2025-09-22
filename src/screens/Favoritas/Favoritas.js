import { Component } from "react";
import CardPelis from "../../components/CardPelis/CardPelis";
import CardSeries from "../../components/CardSeries/CardSeries";
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

class FavoritosScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            peliculasFavoritas: [], seriesFavoritas: [], contadorPeliculas: 0, idsPeliculas: [], contadorSeries : 0, idsSeries : []
        }
}
    componentDidMount(){
        let peliculasFavoritas = JSON.parse(localStorage.getItem("peliculasFavoritas"))|| []; 
        this.setState({idsPeliculas : peliculasFavoritas})
        let seriesFavoritas = JSON.parse(localStorage.getItem("seriesFavoritas"))|| [];
        this.setState({idsSeries : seriesFavoritas})
        peliculasFavoritas.map(unId => {
          fetch(`https://api.themoviedb.org/3/movie/${unId}?language=en-US`, {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmU4MGJiYTlkMTY4MzM3NDJlMzJjNGE0YTYwOWM2ZiIsIm5iZiI6MTc1NzQ0NzQ5OC4zOTEsInN1YiI6IjY4YzA4NTRhZTFjODBkMTE1NDk0ODFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WU-O3-2lU1lEcBmdUrfFr2eXUhO769kbRxlpHaz35GQ"
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let nuevaLista = this.state.peliculasFavoritas
                nuevaLista.push(data)
                this.setState({
                    contadorPeliculas : this.state.contadorPeliculas +1,
                    peliculasFavoritas: nuevaLista 
                });
                
            })
            .catch(error => console.log(error));
        })
        seriesFavoritas.map(unId => {
          fetch(`https://api.themoviedb.org/3/tv/${unId}?language=en-US`, {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmU4MGJiYTlkMTY4MzM3NDJlMzJjNGE0YTYwOWM2ZiIsIm5iZiI6MTc1NzQ0NzQ5OC4zOTEsInN1YiI6IjY4YzA4NTRhZTFjODBkMTE1NDk0ODFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WU-O3-2lU1lEcBmdUrfFr2eXUhO769kbRxlpHaz35GQ"
            },
        })
            .then(response => response.json())
            .then(data => {
                let nuevaLista = this.state.seriesFavoritas
                nuevaLista.push(data)
                this.setState({
                    contadorSeries : this.state.contadorSeries +1,
                    seriesFavoritas: nuevaLista
                });
                console.log(data)
            })
            .catch(error => console.log(error));
        })
    }
    render(){
        return(
            <>
            <Navbar/>
            <h2 className="">Peliculas favoritas</h2>
            <section className="container">
                {this.state.contadorPeliculas == this.state.idsPeliculas.length ? this.state.contadorPeliculas==0 ? <p>No hay peliculas en favoritos</p> : this.state.peliculasFavoritas.map((pelis, idx) => (
                    <CardPelis key={idx} pelicula={pelis} />
                )) : <p>Cargando...</p>
            }
            </section>
            <h2 className="">Series favoritas</h2>
            <section className="container">
                {this.state.contadorSeries == this.state.idsSeries.length ? this.state.contadorSeries==0 ? <p>No hay series en favoritos</p> : this.state.seriesFavoritas.map((pelis, idx) => (
                    <CardSeries key={idx} serie={pelis} />
                )) : <p>Cargando...</p>
                } 
            </section>
            <Footer/>
            </>
        )
    }
}

export default FavoritosScreen

