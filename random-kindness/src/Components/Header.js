import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    
    return (
        <div className="conStyle">
            <h1 className="fontStyle">Random Acts Generator</h1>
            <div className="navConStyle">
                <Link to="/" className="navStyle">Home</Link>
                <Link to="/contacts" className="navStyle">Contacts</Link>
                <Link to="/acts" className="navStyle">Random Acts</Link>
            </div>
        </div>
    )
}

export default Header;