import React from "react";
import { Link } from "react-router-dom";
import '../Series/Series.css'; // usa los mismos estilos que Series

function CardSeries({ serie }) {
  return (
    <article key={serie.id} className="single-card-movie">
      <img
        src={`https://image.tmdb.org/t/p/w342${serie.poster_path}`}
        alt={serie.name}
        className="card-img-top"
      />
      <div className="cardBody">
        <h5 className="card-title">{serie.name}</h5>
        <p className="card-text">{serie.overview}</p>
        <Link to={`/series/${serie.id}`} className="btn btn-primary">
        Ver detalle
        </Link>
      </div>
    </article>
  );
}

export default CardSeries;