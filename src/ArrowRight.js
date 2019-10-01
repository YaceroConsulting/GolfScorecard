import React, { Component } from 'react';

class ArrowRight extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <svg 
                id="right-arrow"
                onClick={() => this.props.onClick()}
                width="30px" 
                height="30px" 
                viewBox="0 0 50 80">
                <polyline 
                    fill="none" 
                    stroke="#81be41" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
                </svg> 
        
      
    }
}

export default ArrowRight;