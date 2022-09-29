import React, { useEffect, useState } from 'react';
import Card from './Carditem/Card';
import Inform from './Inform/Inform';
import"./Main.css"
import Question from './Question/Question';

const Main = () => {
    const [activity, setactivity] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setactivity(data))
    }, [])

    // sent data to inform
    const [item, setitem] = useState([])
    const callbtn = (time) => {
        const data = [...item, time]
        setitem(data)
    }
    return (
        <div>
            <div className='main'>
                <section className='firstsection'>
                    <div className='headingSection'>
                        <img className='logo' src={'img/sport-house-active-people-logo-vector-4139222-removebg-preview.png'} alt="" />
                        <h1 className='headername'> on activities</h1>
                    </div>
                    <h3 className='selected'>Selected Exercises</h3>
                    <div className='girdstyle'>
                        {
                            activity.map(data=><Card key={data.id} call={callbtn} data={data}></Card>)
                        }
                    </div>
                    <Question></Question>
                </section>
                <section className='inform'>
                    <Inform item={item}></Inform>
                </section>
            </div>
        </div>
    );
};

export default Main;