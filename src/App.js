import './App.css';
import NavBar from './components/NavBar'
import LangCarusel from './components/LangCarusel';
import Card from './components/Card';
import Card3d from './components/Card3d';
import Formacion from './components/Formacion';



function App() {
  return (
    <div className="App">        
      <NavBar title="Pisarra Guido"/>
      <Card/>
      <div>
        <h1 className="skills"> Tengo conocimientos en : </h1>
        <LangCarusel/>
      </div>
      <div>
        <Formacion/>
      </div>        
      <div className="contacto">
        <Card3d/>                 
      </div>      
  </div>
  );
}

export default App;
