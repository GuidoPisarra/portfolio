import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import html5 from '../img/html5.jpg';
import js from '../img/js.jpg';
import angular from '../img/angular.png';
import go from '../img/go.png';
import java from '../img/java.png';
import node from '../img/node.jfif';
import php from '../img/php.png';
import postgre from '../img/postgre.jfif';
import react from '../img/react.png';
import sql from '../img/sql.png';
import vue from '../img/vue.png';
import git from '../img/git.png';
import npm from '../img/npm.png';
import bootstap from '../img/bootstrap.png';
import {v4 as uuidv4} from "uuid";
 class LangCarusel extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    config: config.slow
  };

  slides = [ 
   {key: uuidv4(),content:<img  src={html5} alt="1" />},
   {key: uuidv4(),content:<img  src={js} alt="2" />},
   {key: uuidv4(),content:<img  src={angular} alt="3" />},
   {key: uuidv4(),content:<img  src={go} alt="4" />},
   {key: uuidv4(),content:<img  src={java} alt="5" />},
   {key: uuidv4(),content:<img  src={node} alt="6" />},
   {key: uuidv4(),content:<img  src={php} alt="7" />},
   {key: uuidv4(),content:<img  src={postgre} alt="8" />},
   {key: uuidv4(),content:<img  src={sql} alt="9" />},
   {key: uuidv4(),content:<img  src={react} alt="10" />},
   {key: uuidv4(),content:<img  src={vue} alt="11"  />},
   {key: uuidv4(),content:<img  src={git} alt="12" />},
   {key: uuidv4(),content:<img  src={npm} alt="13" />},
   {key: uuidv4(),content:<img  src={bootstap} alt="14"  />}
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

 

  render() {
    return (
      
      <div style={{ width: "80%", height: "100px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
         </div>
         </div>
    );
  }
}
export default LangCarusel;