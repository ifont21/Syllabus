import React, { Component } from 'react'

class PRLine extends Component {
    render () {
        let points = `${this.props.x1},${this.props.y1} ${this.props.x2},${this.props.y2}`;
        return (
            //<line x1={this.props.x1} y1={this.props.y1} x2={this.props.x2} y2={this.props.y2} stroke="black" />
            <polyline points={points} stroke="black"/>
        )
    }
}

export default PRLine