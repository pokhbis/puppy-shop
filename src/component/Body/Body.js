import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Display from '../Display/Display';
import './Body.css';

const Body = () => {


    const [puppies, setPuppies] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./puppies.json')
            .then(res => res.json())
            .then(data => setPuppies(data))
    }, [])

    // col-md-9 col-lg-9 col-sm-7

    const addToCart = (puppy) => {
        const newCart = [...cart, puppy];
        setCart(newCart);
    }

    return (
        <div className="puppy-container ">
            <div className="display-puppies">
                {
                    puppies.map(puppy => <Display
                        key={puppy.id}
                        puppy={puppy}
                        addToCart={addToCart}
                    >
                    </Display>
                    )
                }
            </div>




            <div className="display-info">
                <Cart cart={cart}></Cart>
            </div>



        </div>
    );
};

export default Body;