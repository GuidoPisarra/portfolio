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
                    Me encuentro cursando la Tecnicatura Universitaria en 
                    Desarrollo de Aplicaciones Informáticas, perteneciente a la Universidad 
                    Nacional del Centro de la Provincia de Buenos Aires. 
                </div>                
             </div> 
        </div>               
            
            
        )
    }



}


export default Card;