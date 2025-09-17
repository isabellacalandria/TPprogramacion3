import { Link } from "react-router-dom";
import "./Pelicula.css"

function Pelicula(props) {
  return (
    <article className="single-card-movie">
      <img
        src={`https://image.tmdb.org/t/p/w342${props.imagen}`}
        alt={props.titulo}
        className="card-img-top"
      />
      <div className="cardBody">
        <h5 className="card-title">{props.titulo}</h5>
        <Link to={`/peliculas/${props.id}`} className="btn btn-primary">
        Ver detalle
        </Link>
      </div>
    </article>
  );
}

export default Pelicula;