import React, { Component } from 'react';

export default function withReadOnly(WrappedComponent, onClick) {
    return class extends Component {
        constructor(props) {
            super(props);

            this.state = {
                readOnly: props.readOnly
            }
        }

        onClick() {
            if(this.props.readOnly) {
                return;
            } else {
                this.props.onClick();
            }
        }

        render() {
            const { onClick, ...otherProps} = this.props;

            return (
                <WrappedComponent 
                    onClick={() => this.onClick() }
                    {...otherProps }
                 />
                 );
        }
    }
}