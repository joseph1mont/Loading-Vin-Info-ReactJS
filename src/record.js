import React from 'react';
// const loadingImg = require('./assets/25.gif');

// const Family = ({name= "Accident History", duration= 240000, image= loadingImg}) => {
    
    const style = {
        display: 'inline-block'
    }
    const Family = ( props ) => {
    return (
        <div onClick={props.clicked} 
            style= {style}>
            <p>Family Name: {props.name}</p>
            <img src={props.image} alt={props.name} width={50} height={50 }/>
        </div>
    )
}

export default Family