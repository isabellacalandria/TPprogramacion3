import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Home from "./screens/Home/Home";
import Peliculas from "./screens/Peliculas/Peliculas";
import Series from "./screens/Series/Series";
import Favoritas from "./screens/Favoritas/Favoritas";
import Navbar from "./components/Navbar/Navbar"
import PeliculaDetalle from "./screens/Pelicula/Pelicula";

function App() {

   return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/peliculas/:id" component={PeliculaDetalle} /> 
      <Route path="/peliculas" component={Peliculas} />
      <Route path="/series"  component={Series} />
      <Route path="/favoritas"  component={Favoritas} /> 
      
    </Switch>
  );
 }
  
  


export default App;
