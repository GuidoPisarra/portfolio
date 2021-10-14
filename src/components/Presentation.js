import React,{Component} from "react";
import cv from "../img/fotoCV.jpeg"
import '../App.css'
import {BrowserRouter as   Router, Route,Link} from 'react-router-dom';
class Presentation extends Component{
    render(){
        return(
            <div className="index">
                <header className="header">
                <div className="col">
                    <div className="content">
                        <h1 className="heading">Pisarra Guido <span></span></h1>
                        <p className="info">Desarrollador web</p>
                        <Link className="boton" to='/portfolio/page'>Ingresar</Link>
                    </div>
                </div>
                <div className="col">
                    <img src={cv} className="myphoto" alt=""></img>
                </div>
            </header>
            </div>
            
        )
    }
}
export default Presentation;