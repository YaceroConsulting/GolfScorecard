import React, { Component } from 'react';

class ArrowLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <svg 
                id="left-arrow"
                onClick={() => this.props.onClick()}
                width="30px" 
                height="30px" 
                viewBox="0 0 50 80" >
                <polyline 
                    fill="none" 
                    stroke="#81be41" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
                </svg> 
    }
}

export default ArrowLeft;