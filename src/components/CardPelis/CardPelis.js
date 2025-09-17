import React from "react";
import { Link } from "react-router-dom";
import '../Peliculas/Peliculas.css'

function CardPelis({ pelicula }) {
  return (
    <article key={pelicula.id} className="single-card-movie">
      <img
        src={`https://image.tmdb.org/t/p/w342${pelicula.poster_path}`}
        alt={pelicula.title}
        className="card-img-top"
      />
      <div className="cardBody">
        <h5 className="card-title">{pelicula.title}</h5>
        <p className="card-text">{pelicula.overview}</p>
        <Link to={`/peliculas/${pelicula.id}`} className="btn btn-primary">
          Ver más
        </Link>
      </div>
    </article>
  );
}

export default CardPelis;