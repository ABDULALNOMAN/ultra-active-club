import React from 'react';
import'./Card.css'

function Card(props) {
    const { data, call } = props
    const {picture,time,status}=data
    return (
        <div className='item'>
            <img className='images' src={picture} alt="" />
            <h2>{status}</h2>
            <h4> time required: {time} Min</h4>
            <button onClick={()=>call(time)}>add to list</button>
        </div>
    );
}

export default Card;