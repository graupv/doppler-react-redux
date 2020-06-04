import React, { Fragment } from 'react';
import './styles.css';

const Phrase = ({
    text, 
    cls, 
    onClick
}) => (
    <div className={cls}>
        {text}
    </div>
);

export default Phrase;