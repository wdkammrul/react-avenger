/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../cart/Cart';

const Home = () => {

    // ***** step-2 *****
    const [allActors, setAllActors] = useState([]);


    // ***** step-1 ***** 
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllActors(data))
    }, [])

    console.log(allActors)






    return (
        <div className='container'>
            <div className="home-container">
                <div className="card-container">

                    {/* ***** step-3 ***** */}
                    {allActors.map(actor => (
                        <div key={actor.id} className="card">
                            <div className="card-img">
                                <img src={actor.image} alt="" />
                            </div>
                            <h2>Altaf Mahmud</h2>
                            <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, earum.</small></p>
                            <div className="info">
                                <p>salary: 200</p>
                                <p>Writter</p>
                            </div>
                            <button>Select</button>
                        </div>
                    ))

                    }
                </div>
                <div className="cart">
                    <h1>this is cart</h1>
                </div>


            </div>
        </div>
    );
};

export default Home;