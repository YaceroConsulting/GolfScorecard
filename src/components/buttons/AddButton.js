import React from 'react';
import withReadOnly from '../higher-order/readOnly';
import { AddIcon } from '../Icons/AddIcon';
import { ButtonBase } from './ButtonBase';

function AddButton(props) {
    return (
        <ButtonBase onClick={() => props.onClick()}>
            <AddIcon></AddIcon>
        </ButtonBase>
    );
}

export default withReadOnly(AddButton);
