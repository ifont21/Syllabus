import React, { Component } from 'react' 

class SVGsquare extends Component {
    render () {
        return (
          <g>
            <rect heigth="80" width="100" fill="red"/>
            <text>{this.props.name}</text>
          </g>  
        )
    }
} 

export default SVGsquare;