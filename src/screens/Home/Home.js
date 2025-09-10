import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Peliculas from "../../components/Peliculas/Peliculas"

let items= [{pagina:"Home", direccion:"/"},{pagina:"Peliculas",direccion:"/peliculas"},{pagina:"Series",direccion:"/series"},{pagina:"Favoritos",direccion:"/favoritos"}]


function Home(){
    return(
        <React.Fragment>
            <Navbar items={items}/>
            <Peliculas/>
            <Footer/>
        </React.Fragment>
    );
}

export default Home;