import React from 'react';
import './Record.css';

const record = (props) => {
    return (
        <div className="Item-info">
            <img src={props.image} height="15" width="15" alt={props.name} />
            {props.name}

        </div>
    )
};

export default record;