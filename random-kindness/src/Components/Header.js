import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const conStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
    const fontStyle = {
        fontWeight: '900',
        fontSize: '3.5rem',
        marginBottom: "0"
    }
    const navConStyle = {
        display: 'flex',
        justifyContent: 'center',
    }
    const navStyle = {
        fontSize: '2rem',
        textDecoration: 'none',
        fontWeight: '400',
        marginLeft: '2.5%',
        marginRight: '2.5%',
        color: 'black'
    }
    return (
        <div style={conStyle}>
            <h1 style={fontStyle}>Random Acts Generator</h1>
            <div style={navConStyle}>
                <Link to="/" style={navStyle}>Home</Link>
                <Link to="/contacts" style={navStyle}>Contacts</Link>
                <Link to="/acts" style={navStyle}>Random Acts</Link>
            </div>
        </div>
    )
}

export default Header;