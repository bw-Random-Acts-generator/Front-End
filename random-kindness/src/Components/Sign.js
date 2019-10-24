import React from 'react';
import { Link } from 'react-router-dom';

const Sign = () => {
    const logout = () => {
        localStorage.clear();
        alert('Come back soon!')
        window.location.href = '/login';
    }
    return (
        <div>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}

export default Sign;