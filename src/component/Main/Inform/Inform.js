import React from 'react';
import"./Inform.css"

function Inform(props) {
    return (
        <div className='information'>
            <div className='my-info'>
                <img className='img' src={'img/my-bg.png'} alt="" />
                <div>
                    <h3>abdul al noman</h3>
                    <p>chittagong,bangaldesh</p>
                </div>
            </div>
            <div className='health-info'>
                <div>
                    <h2>60<sub>kg</sub></h2>
                    <h5>weight</h5>
                </div>
                <div>
                    <h2>5.8</h2>
                    <h5>height</h5>
                </div>
                <div>
                    <h2>22<sub>kg</sub></h2>
                    <h5>age</h5>
                </div>
            </div>
            <h2>add a break</h2>
            <div>
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
            </div>
            <h2>exercises details</h2>
            <div>
                <h3>exercise time</h3>
                <h3></h3>
            </div>
            <div>
                <h3>break time</h3>
                <h3></h3>
            </div>
            <button>activity completed</button>
        </div>
    );
}

export default Inform;