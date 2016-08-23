import React, { Component } from 'react' 

const HEIGHT = 60;
const WIDTH = 180;
const spaceY = 20;
const spaceX = 30;
const characterLimits = 22;

class SVGsquare extends Component {
    render () {
        let name = ( this.props.name.length > characterLimits ? `${this.props.name.substring(0,characterLimits)}...` : this.props.name);
        let x = (WIDTH + spaceX)*(this.props.level-1);
        return (
          <g>
            <rect height={HEIGHT} 
                  width={WIDTH} 
                  fill="white"
                  stroke="black"
                  strokeWidth="2"
                  x={x}
                  y={(HEIGHT+spaceY)*this.props.index}/>
            <text className="name-subject"
                  x={x+(WIDTH*0.1)}
                  y={(1/2)*HEIGHT*(this.props.index*2 + 1) + spaceY*this.props.index} 
                  alignmentBaseline="central">{name}</text>
          </g>  
        )
    }
} 

export default SVGsquare;