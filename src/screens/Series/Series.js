import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Series from "../../components/Series/Series";
import Footer from "../../components/Footer/Footer";

function SeriesScreen() {
  return (
    <React.Fragment>
      <Navbar />
      <Series />
      <Footer/>
    </React.Fragment>
  );
}

export default SeriesScreen;