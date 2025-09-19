import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Home from "./screens/Home/Home";
import Peliculas from "./screens/Peliculas/Peliculas";
import Series from "./screens/Series/Series";
import Favoritas from "./screens/Favoritas/Favoritas";
import PeliculaDetalle from "./screens/Pelicula/Pelicula";
import SerieDetalle from "./screens/Serie/Serie";
import PeliculasNP from "./screens/PeliculasNP/PeliculasNP";
import SeriesAT from "./screens/SeriesAT/SeriesAT";
import Resultados from "./screens/Resultados/Resultados";




function App() {

   return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/peliculas/:id" component={PeliculaDetalle} /> 
      <Route path="/series/:id" component={SerieDetalle} /> 
      <Route path="/peliculas" component={Peliculas} />
      <Route path="/series"  component={Series} />
      <Route path="/favoritas"  component={Favoritas} /> 
      <Route path="/peliculasNP" component={PeliculasNP} />
      <Route path="/seriesAT" component={SeriesAT} />
      <Route path="/resultados/:tipo/:query" component={Resultados} />
      <Route path="/favoritas" component={Favoritas} />
      <Route component={Error}/>
    
      
    </Switch>
  );
 }
  
  


export default App;
