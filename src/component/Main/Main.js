import React, { useEffect, useState } from 'react';
import Card from './Carditem/Card';
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
                    <div className=''>
                        <img className='logo' src={'undraw_Activity_tracker_re_2lvv.png'} alt="" />
                        <h1>activities</h1>
                    </div>
                    <div className='girdstyle'>
                        {
                            activity.map(data=><Card data={data}></Card>)
                        }
                    </div>
                </section>
                <section className='inform'>right section</section>
            </div>
        </div>
    );
};

export default Main;