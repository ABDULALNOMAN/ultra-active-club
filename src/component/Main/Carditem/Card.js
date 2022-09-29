import React from 'react';
import'./Card.css'

function Card(props) {
    console.log(props)
    const {picture,time,status}=props.data
    return (
        <div className='item'>
            <img className='images' src={picture} alt="" />
            <h2>{status}</h2>
            <h5>{time}</h5>
            <button>click</button>
        </div>
    );
}

export default Card;