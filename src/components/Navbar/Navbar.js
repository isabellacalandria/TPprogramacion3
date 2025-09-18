import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Busqueda from "../Busqueda/Busqueda"

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
        <Busqueda/>
      </nav>
    </header>
  );
}

export default Navbar;