import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-custom">
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/peliculas">Películas</Link>
        </li>
        <li>
          <Link to="/series">Series</Link>
        </li>
        <li>
          <Link to="/favoritas">Favoritas</Link>
        </li>
      </ul>

      <form className="search-form">
        <input
          type="text"
          name="searchData"
          placeholder="Buscar..."
        />
        <button type="submit" className="btn-sm">Buscar</button>
      </form>
    </nav>
  );
}

export default Navbar;