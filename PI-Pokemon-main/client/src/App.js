import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Created from './components/Created'
import Details from './components/Details'

function App() {
  return (
  <BrowserRouter>

      <div className="App">
      <Switch> 
          <Route exact path = '/'> <LandingPage/> </Route>          
          <Route path='/home'> <Home/> </Route> 
          <Route path ='/poke'> <Created/>  </Route> 
          <Route path ='/pokemons/:id' component={Details}></Route>      
      </Switch>        
      </div>

  </BrowserRouter>
  
  );
}


export default App;
