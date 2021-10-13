import React, { Component } from 'react'
import wpp from '../img/wpp.png';
import ln from '../img/iconoln.png';
import telegram from '../img/telegram.jfif';
import Card from 'react-animated-3d-card'
//import Presentation from './Presentation';
 
class Card3d extends Component {
 
  render() {
    return (
      <Card
    config={{
        rotation: 15,
        transition:{
            duration:0.5,
            timingMode: "ease"
        },
        transform:{
            figureIcon: {
                rotation: 20,
                translateZ: 160
            },
            titleTranslateZ: 140,
            bodyTextTranslateZ: 100,
            buttonTranslateZ: 80
        }
    }}
>

<div className="card">
      
          
  <div className="contentcard">
    <h2 className="title">Acerca de mi...</h2>
    <div className="contactitem">
                
                <div className="icon">
                  <img src={wpp} alt="1" className="iconocontacto"></img>
                </div>
                <div className="textcontact">
                  <p>+54 (02983)15694278</p>
                </div>
                <div className="icon">
                  <img src={telegram} alt="2" className="iconocontacto"></img> 
                </div>
                <div className="textcontact">
                  <p>+54 (02983)15694278</p>
                </div>
              
                <div className="icon">
                  <img src={ln} alt="3" className="iconocontacto"></img> 
                </div>
                <div className="textcontact">
                  <p>linkedin.com/in/guido-pisarra</p>
                </div>
              
                
          
        </div>            
   </div>
  </div>
      
        


</Card>




    )

   
   
  }
 
}

export default Card3d;