import React from 'react';
import './Header.css';
import logo from '../../logo/logo.png';
const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="header-logo" src={logo} alt="" />
            </div>
            <div className="header-text">
                <h1>Buy The <span className="header-span">Best Puppies</span> !!!</h1>
                {/* <h4>Buy the cutest puppies from us at a resonable price</h4> */}
                <h4>Choose you  puppy from our collection of 1700 puppies</h4>
                {/* <h4>Number of Puppies Available: 1700</h4> */}
                {/* <h4>Number of <span className="header-span">Puppies</span> Available: 1700</h4> */}
                <h2>Collection of <span className="header-span">Puppies</span> worth over: $ 1 Million</h2>

            </div>
        </div>
    );
};

export default Header;