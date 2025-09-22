import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";


class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busqueda: "", tipo: ""
        }
    }
    prevenirRecarga(event){
        event.preventDefault()
        this.props.history.push("/resultados/" + this.state.tipo + "/" + this.state.busqueda);
  
    }
    controlarCambios(event){
        this.setState(
            {busqueda: event.target.value          
            })
    }
    controlarTipo(event){
        this.setState(
            {tipo: event.target.value          
            })
    }
    render() {
        return (
            <section className="Formulario">
                <div>
                    <form className="buscador-form" onSubmit={(event) => this.prevenirRecarga(event)}>
                        <input className="buscador-input" onChange={(event) => this.controlarCambios(event)} name="busqueda" value={this.state.busqueda}  />
                        <label>Pelicula</label>
                        <input type="radio" name="tipo" value="movie" onChange={(e)=> this.controlarTipo(e)} />
                        <label>Serie</label>
                        <input type="radio" name="tipo" value="tv" onChange={(e)=> this.controlarTipo(e)}/>
                        <button className="buscador-btn" type="submit">Buscar</button>
                    </form>
                </div>
            </section>
        )
    }
}
export default withRouter(Buscador);



   


