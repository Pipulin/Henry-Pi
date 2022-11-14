import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './componentes/landingPage/landingPage';
import Home from './componentes/home/Home';
import recipeCreated from './componentes/create recipe/recipeCreated'




function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Switch>
        <Route exact path = '/'> <LandingPage/> </Route>
        <Route path='/home'> <Home/> </Route> 
        <Route path = '/recipes'> <recipeCreated/></Route>

      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
