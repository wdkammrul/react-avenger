/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    // ***** step-2 *****
    const [allActors, setAllActors] = useState([]);

    // step-7 
    const [selectedActors, setSelectedActors] = useState([]);

    // step-15 
    const [remaining, setRemaining] = useState(0);

    // step-17 
    const [totalCost, setTotalCost] = useState(0)


    // ***** step-1 ***** 
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllActors(data))
    }, [])

    // console.log(allActors)

    // step-4 
    // step-6 receive actor
    const handleSelectActor = (actor) => {
        // console.log(actor)


        // step-12 
        const isExist = selectedActors.find((item) => item.id == actor.id);

        let count = actor.salary;

        if (isExist) {
            return alert('already booked');
        }
        else {
            // step-13 
            selectedActors.forEach((item) => {
                count = count + item.salary;
            })

            console.log(count)


            // step-14 কতটাকা  আছে ।
            const totalRemaining = 20000 - count;

            // step-18 
            // setTotalCost(count);

            // step-25 
            if (count > 20000) {
                return alert('taka shes')
            } else {
                setTotalCost(count)
                setRemaining(totalRemaining)
                setSelectedActors([...selectedActors, actor]);
            }


            // step-16 
            // setRemaining(totalRemaining)

            // setSelectedActors([...selectedActors, actor]);
        }



        // step-8 আমি বুঝিনি ...selectedActors ।
        // setSelectedActors([...selectedActors, actor]);

    }

    // console.log(selectedActors)


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
                            <h2>{actor.name}</h2>
                            <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, earum.</small></p>
                            <div className="info">
                                <p>salary: {actor.salary}</p>
                                <p>{actor.role}</p>
                            </div>

                            {/* step-5 এই জায়গায় বুঝিনি ।  */}
                            <button onClick={() => handleSelectActor(actor)} >Select</button>
                        </div>
                    ))

                    }
                </div>
                <div className="cart">
                    {/* <h1>this is cart</h1> */}

                    {/* step-9 send selectedActors */}
                    <Cart
                        selectedActors={selectedActors}
                        // step-19 
                        remaining={remaining}

                        // step-21 
                        totalCost={totalCost}


                    ></Cart>
                </div>


            </div>
        </div>
    );
};

export default Home;