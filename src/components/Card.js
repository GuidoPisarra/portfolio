import React, { Component } from "react";
import photocv from '../img/fotoCV.jpeg';


class Card extends Component{
    
    render(){
        return (
        <div>
            <div className="photoandtext">
                <img src={photocv} alt="1" className='photocv'></img>
            </div>
            <div className='presentation'>                
                <div className="texto">
                    Soy Estudiante de la carrera Tecnicatura Universitaria en 
                    Desarrollo de Aplicaciones Informáticas. 
                    Me encuentro en la búsqueda de mi primer empleo en este sector.
                </div>                
             </div> 
        </div>               
            
            
        )
    }



}


export default Card;