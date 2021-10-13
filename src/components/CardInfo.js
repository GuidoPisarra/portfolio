import React, {Component} from 'react'



class CardInfo extends Component{
    render(){
        return(
            <div className="box">
                <div className="front">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="back">                    
                    <p>{this.props.info}</p>
                </div>

            </div>
        )

    }



}
export default CardInfo;