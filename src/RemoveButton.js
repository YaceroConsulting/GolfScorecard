import React, { Component } from 'react';
import withReadOnly from './HOCs/readOnly';
import './Icons.css';

class RemoveButton extends Component {

    render() {
        return <svg onClick={() => this.props.onClick()} version="1.1" id="add-button" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 31.059 31.059"  >
                <g>
                    <g>
                        <path className="path" d="M15.529,31.059C6.966,31.059,0,24.092,0,15.529C0,6.966,6.966,0,15.529,0
                            c8.563,0,15.529,6.966,15.529,15.529C31.059,24.092,24.092,31.059,15.529,31.059z M15.529,1.774
                            c-7.585,0-13.755,6.171-13.755,13.755s6.17,13.754,13.755,13.754c7.584,0,13.754-6.17,13.754-13.754S23.113,1.774,15.529,1.774z"
                            />
                    </g>
                    <g>
                        <path className="path" d="M21.652,16.416H9.406c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.397-0.888,0.888-0.888h12.246
                            c0.49,0,0.887,0.398,0.887,0.888C22.539,16.02,22.143,16.416,21.652,16.416z"/>
                    </g>
                </g>
            </svg>
    }
}

export default withReadOnly(RemoveButton);