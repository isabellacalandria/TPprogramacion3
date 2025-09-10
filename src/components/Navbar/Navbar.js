import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom"

function Navbar(props){
    return(
        <nav>
        <ul class="nav nav-tabs my-4">
            <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="movies.html">Películas</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="series.html">Series</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="favorites.html">Favoritas</a>
            </li>
        </ul>
    
        <form class="search-form" action="results.html" method="get">
            <input type="text" class="" name="searchData" placeholder="Buscar..." value=""></input>
            <button type="submit" class="btn btn-success btn-sm">Buscar</button>
        </form>
    </nav>
    )
};

export default Navbar