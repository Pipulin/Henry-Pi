import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Created from './components/Created'
import Details from './components/Details'

function App() {
  return (
  <BrowserRouter>

      <div className="App">
        
          <Route exact path = '/'> <LandingPage/> </Route>          
          <Route path='/home'> <Home/> </Route> 
          <Route path ='/poke' component={Created}/>  
          <Route path ='/home/:id' component={Details}/>      
                 
      </div>

  </BrowserRouter>
  
  );
}


export default App;
