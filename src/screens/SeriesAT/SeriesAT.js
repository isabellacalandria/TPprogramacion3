import SeriesAT from "../../components/SeriesAT/SeriesAT";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function SeriesATScreen(){
    return(
    <React.Fragment>
        <Navbar/>
        <SeriesAT/>
        <Footer/>
    </React.Fragment>
    )
}

export default SeriesATScreen;