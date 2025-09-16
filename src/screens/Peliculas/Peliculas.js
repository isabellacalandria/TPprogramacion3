import Peliculas from "../../components/Peliculas/Peliculas";
import React from "react";
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer";


function Pelis(){
    return(
    <React.Fragment>
        <Navbar/>
        <Peliculas/>
        <Footer/>
        
    </React.Fragment>
    )
}


export default Pelis;



