import {Switch,Route} from "react-router-dom";

import Home from "./pages/Home";
import AddMovie from "./pages/AddMovies";
import MovieDetails from "./pages/MovieDetails";
const Router =() =>{
    return(
        <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/AddMovie">
        <AddMovie />
      </Route>
      <Route exact path="/:movieId">
        <MovieDetails />
      </Route>
      </Switch>
    )
}
export default Router;