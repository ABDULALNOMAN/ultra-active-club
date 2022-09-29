import React, { useEffect, useState } from 'react';
import Card from './Carditem/Card';
import Inform from './Inform/Inform';
import"./Main.css"

const Main = () => {
    const [activity, setactivity] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setactivity(data))
    }, [])
    console.log(activity)
    return (
        <div>
            <div className='main'>
                <section className='firstsection'>
                    {/* <div className='headingSection'>
                        <img className='logo' src={'img/undraw_Activity_tracker_re_2lvv.png'} alt="" />
                        <h1 className='headername'>activities</h1>
                    </div>
                    <h3>Selected Exercises</h3>
                    <div className='girdstyle'>
                        {
                            activity.map(data=><Card data={data}></Card>)
                        }
                    </div> */}
                </section>
                <section className='inform'>
                    <Inform></Inform>
                </section>
            </div>
        </div>
    );
};

export default Main;