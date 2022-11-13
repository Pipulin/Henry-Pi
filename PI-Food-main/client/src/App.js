import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './componentes/landingPage/landingPage';
import Home from './componentes/home/Home';



function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Switch>
        <Route exact path = '/'> <LandingPage/> </Route>
        <Route path='/home'> <Home/> </Route>     
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
