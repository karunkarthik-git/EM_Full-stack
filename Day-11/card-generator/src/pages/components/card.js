import React from 'react';

const Card = (props) => {
    const color = props.color;
    return (
        <div className='card-container' style={{"backgroundColor": color}}>
            <h1>Card</h1>
        </div>
    )
}

export default Card;