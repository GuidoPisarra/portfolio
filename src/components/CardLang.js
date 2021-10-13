import React, {Component} from 'react'
import html5 from "../img/html5.jpg"


class CardLang extends Component{
    render(){
        return(
            <div className="box">
                <div className="front">
                    <img src={html5} alt=""></img>
                </div>
                <div className="back">
                    <h1>HTML5</h1>
                    <p>Conocimiento obtenido en la Tecnicatura Universitaria en Desarrollo de Aplicaciones Informaticas</p>
                </div>

            </div>
        )

    }



}
export default CardLang;