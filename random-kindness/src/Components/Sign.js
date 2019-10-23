import React from 'react';
import { Link } from 'react-router-dom';

const Sign = () => {
    return (
        <div>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
        </div>
    )
}

export default Sign;