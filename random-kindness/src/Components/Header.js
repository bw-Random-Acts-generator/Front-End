import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <h1>Random Acts Generator</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/contacts">Contacts</Link>
                <Link to="/acts">Random Acts</Link>
            </div>
        </div>
    )
}

export default Header;