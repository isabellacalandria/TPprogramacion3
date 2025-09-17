import PeliculasNP from "../../components/PeliculasNP/PelicuasNP";
import React from "react";
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer";


function Pelis(){
    return(
    <React.Fragment>
        <Navbar/>
        <PeliculasNP/>
        <Footer/>
        
    </React.Fragment>
    )
}


export default Pelis;
