import { Link } from "react-router-dom";
import "./Pelicula.css"

function Pelicula(props) {
  return (
    <article className="single-card-movie">
      <img
        src={`https://image.tmdb.org/t/p/w500${props.imagen}`}
        alt={props.titulo}
        className="card-img-top"
      />
      <div className="cardBody">
        <h5 className="card-title">{props.titulo}</h5>
        {/* 👇 Esto navega a /peliculas/ID */}
        <Link to={`/peliculas/${props.id}`} className="btn btn-primary">
          Ver más
        </Link>
      </div>
    </article>
  );
}

export default Pelicula;