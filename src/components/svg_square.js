import React, { Component } from 'react' 

class SVGsquare extends Component {
    render () {
        return (
          <g>
            <rect height="80" width="100" fill="red" x="0" y={this.props.y}/>
            <text x="50" y={this.props.textY}>{this.props.name}</text>
          </g>  
        )
    }
} 

export default SVGsquare;