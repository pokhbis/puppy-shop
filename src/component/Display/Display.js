import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './Display.css';

const Display = (props) => {
    //de-structuring received data
    const { img, breed, age, weight, location, price } = props.puppy;
    const element = <FontAwesomeIcon icon={faShoppingBag} />
    console.log(props)
    return (
        //display section of puppies
        <div className=" puppy-display">
            <div  >
                <img src={img} className=" puppy-img" alt="..."></img>
            </div>
            <div className="puppy-info">
                <h5>{breed}</h5>
                <p>Age: {age}</p>
                <p>Weight: {weight}</p>
                <p>Location: {location}</p>
                <strong className="text-bold"> <p>Price: $ {price}</p></strong>
            </div>
            <button onClick={() => props.addToCart(props.puppy)}
                className="cart-btn">
                {element} Add to Cart</button>
            <br />
            <br />
            {/* // footer section for social media icons */}
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