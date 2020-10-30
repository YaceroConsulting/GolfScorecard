import React from 'react';
import './buttons.css';

export function ButtonBase(props) {
    return (
        <button className="button">
            {props.children}
        </button>
    );
}