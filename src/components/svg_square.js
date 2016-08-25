import React, { Component } from 'react'
import PRLine from './pr_line'; 

const HEIGHT = 60;
const WIDTH = 180;
const spaceY = 30;
const spaceX = 40;
const characterLimits = 22;

class SVGsquare extends Component {
    
    renderLines(){
        let ids = this.props.prIds;
        let x = (WIDTH + spaceX)*(this.props.level-1);
        if(ids.length > 0){  
          return this.props.prIds.map((id,i)=>{
              let y = (HEIGHT+spaceY)*this.props.index;
              let y1 = y+(HEIGHT/2)+(i*5);
              return(
               <PRLine x1={x} y1={y1} x2={x-(spaceX/2)} y2={y1} key={id}/>   
              );
          });
        }else{
            return ids;
        }
        
    }

    render () {
        let name = ( this.props.name.length > characterLimits ? `${this.props.name.substring(0,characterLimits)}...` : this.props.name);
        let x = (WIDTH + spaceX)*(this.props.level-1);
        let y = (HEIGHT+spaceY)*this.props.index;
        return (
          <g>
            <rect height={HEIGHT} 
                  width={WIDTH} 
                  fill="white"
                  stroke="black"
                  strokeWidth="2"
                  x={x}
                  y={y}/>
            <text className="name-subject"
                  x={x+(WIDTH*0.1)}
                  y={(1/2)*HEIGHT*(this.props.index*2 + 1) + spaceY*this.props.index} 
                  alignmentBaseline="central">{name}</text>
           {this.renderLines()}
          </g>  
        )
    }
} 

export default SVGsquare;