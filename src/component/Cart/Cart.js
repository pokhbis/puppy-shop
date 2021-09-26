import React from 'react';
import './Cart.css';
const Cart = (props) => {
    console.log(props)
    const { cart } = props;
    let total = 0;
    for (let puppy of cart) {
        total = total + puppy.price;

    }

    return (
        <div>
            <h2 className="text-style">Order Summary</h2>
            <h5><i className="fas fa-dog"></i>  Number of Puppies: {props.cart.length}</h5>
            {/* <h5>Puppy Breed: {props.cart.breed} </h5> */}
            <h3>Price  : ${total}</h3>
            <br />
            <button className="cart-btn">Buy Now</button>
        </div >
    );
};

export default Cart;