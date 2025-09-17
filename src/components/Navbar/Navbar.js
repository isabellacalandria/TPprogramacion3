import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img
            src="/assets/img/logo.png"
            alt="Logo de la app"
            className="logo-img"
          />
        </Link>
      </div>

      <nav className="navbar-custom">
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/peliculas">Películas Populares</Link>
          </li>
          <li>
            <Link to="/peliculasNP">Películas Now Playing</Link>
          </li>
          <li>
            <Link to="/seriesAT">Series Airing Today</Link>
          </li>
          <li>
            <Link to="/series">Series Populares</Link>
          </li>
          <li>
            <Link to="/favoritas">Favoritas</Link>
          </li>
        </ul>

        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            name="searchData"
            placeholder="Buscar..."
            aria-label="Buscar contenido"
          />
          <button type="submit" className="btn-sm">Buscar</button>
        </form>
      </nav>
    </header>
  );
}

export default Navbar;