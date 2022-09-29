import React, { useEffect, useState } from 'react';
import { localStorageGetitem, localStoragesetitem } from '../Local/Local';
import"./Inform.css"

function Inform(props) {
    // exercise time 
    const { item } = props
    const data = item.reduce((previous, current) => previous + current, 0)
    // break time
    const [time, settime] = useState([])
    const id = (time) => {
        localStoragesetitem(time)
        settime(time)
    }
    // local storage time set
    useEffect(() => {
         const GetTime = localStorageGetitem()
            settime(GetTime)
    }, [])
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
            <h2 className='break'>add a break</h2>
            <div className='break-button'>
                <button onClick={()=>id(10)}>10s</button>
                <button onClick={()=>id(20)}>20s</button>
                <button onClick={()=>id(30)}>30s</button>
                <button onClick={()=>id(40)}>40s</button>
            </div>
            <h2 className='details'>exercises details</h2>
            <div className='details-constent first'>
                <h3>exercise time</h3>
                <h4>{data}min</h4>
            </div>
            <div className='details-constent'>
                <h3>break time</h3>
                <h4>{time}second</h4>
            </div>
            <button className='lestbtn'>activity completed</button>
        </div>
    );
}

export default Inform;