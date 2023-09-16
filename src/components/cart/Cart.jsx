/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

// step-10 receive selectedActors and destructuring 
// step-20 receive remaining
// step-22 receive totalCost
const Cart = ({ selectedActors, remaining, totalCost }) => {
    // console.log(selectedActors)
    return (
        <div>
            {/* step-23  */}
            <h3>Remaining: {remaining}</h3>
            {/* step-24  */}
            <h3>Total Cost: {totalCost}</h3>


            <h5> Total Actors: {selectedActors.length}</h5>
            {/* step-11  */}
            {selectedActors.map((actor) => (
                <li> {actor.name}</li>

            ))}

        </div>
    );
};

export default Cart;