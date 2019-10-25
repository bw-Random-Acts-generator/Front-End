import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sign = (props) => {
    const state = {
        loggedIn: props.log
    }
    const containerStyle = {
        position: 'relative',
        left: '71%',
        top: '-90px',
        width: '30%',
        display: 'flex',
        justifyContent: 'space-evenly'

    }
    const buttonStyle = {
        backgroundColor: '#9C9B97',
        color: 'white',
        fontSize: '2rem',
        padding: '2.5%',
        borderRadius: '35px',
        marginTop: '2%',
        textDecoration: 'none',
        border: '.5px solid black',
        boxShadow: '1px 4px 4px black',
        cursor: 'pointer',
        fontWeight: '500'
    }
    const logout = () => {
        localStorage.clear();
        alert('Come back soon!')
        window.location.href = '/login';
    }
    console.log(state.loggedIn)
    const buttons = () => {
        if(state.loggedIn) {
            return(
                <div style={containerStyle}>
                    <div onClick={logout} style={buttonStyle}>Log Out</div>
                </div>
            )
        }
        else{
            return (
                <div style={containerStyle}>
                    <Link to="/signup" style={buttonStyle}>Sign Up</Link>
                    <Link to="/login" style={buttonStyle}>Sign In</Link>
                </div>
            )
        }
    };
    return (
        <div>
            {buttons()}
        </div>
    )
}

export default Sign;