import React from 'react';
import './App.css';
import LangCarusel from './components/LangCarusel';
import Card from './components/Card';
import Card3d from './components/Card3d';
import Formacion from './components/Formacion';
import CardLang from './components/CardLang';
import Presentation from './components/Presentation';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './components/Presentation'
import Page from './Page'


function App() {
  return (
    <Router>
      <div >
      
          <Route exact path="/" component={Home}/>
          <Route path="/page" component={Page}></Route>
        
      </div>
    </Router>
  );
}
export default App;

