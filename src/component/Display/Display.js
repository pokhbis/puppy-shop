import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './Display.css'
const Display = (props) => {

    const { img, breed, age, weight, location, price } = props.puppy;
    const element = <FontAwesomeIcon icon={faShoppingBag} />

    return (

        <div className=" puppy-display">
            <div  >
                <img src={img} className=" puppy-img" alt="..."></img>
            </div>
            <div className="puppy-info">
                <h5 className="">{breed}</h5>
                <p className="">Age: {age}</p>
                <p className="">Weight: {weight}</p>
                <p className="">Location: {location}</p>

            </div>
            <div className="">
                <strong className="text-bold"> <p>Price: $ {price}</p></strong>
            </div>
            <button onClick={() => props.addToCart(props.puppy)}
                className="cart-btn">
                {element} Add to Cart</button>
            <br />
            <br />
            <p>Follow our pages to get latest update!
            </p>
            <div>
                <i className="fab fa-facebook fa-3x icon"></i>
                <i className="fab fa-instagram fa-3x icon"></i>
            </div>
        </div>


    );
};

export default Display;