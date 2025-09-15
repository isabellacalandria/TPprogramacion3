

import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="nav nav-tabs my-4">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/peliculas">Películas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/series">Series</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/favoritas">Favoritas</Link>
        </li>
      </ul>

      <form className="search-form">
        <input 
          type="text" 
          className="" 
          name="searchData" 
          placeholder="Buscar..." 
        />
        <button type="submit" className="btn btn-success btn-sm">Buscar</button>
      </form>
    </nav>
  );
}

export default Navbar;