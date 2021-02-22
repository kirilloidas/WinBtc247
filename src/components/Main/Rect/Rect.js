import React from 'react';
import './rect.scss';

const Rect = ({idButton, mode, infinite}) => {
    return (
        <div id={idButton} className={mode + ' ' + infinite}>

        </div>
    );
};

export default Rect;
