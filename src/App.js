import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './components/Presentation'
import Page from './Portfolio'


function App() {
  return (
    <Router>
      <div >
      
          <Route exact path="/portfolio/page" component={Page}/>
          <Route path="/portfolio" component={Home}></Route>
        
      </div>
    </Router>
  );
}
export default App;

