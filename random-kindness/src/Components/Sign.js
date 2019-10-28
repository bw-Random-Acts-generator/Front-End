import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sign = (props) => {
    const [state, setState] = useState({
        loggedIn: ''
    })
    const containerStyle = {
        width: '25rem',
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '4%'

    }
    const buttonStyle1 = {
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
    const buttonStyle2 = {
        backgroundColor: '#eceae0',
        color: '#9C9B97',
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

    useEffect(() => {
        setState({loggedIn: props.log})
    }, [props.log]);

    
    console.log(state.loggedIn)
    const buttons = () => {
        if(state.loggedIn) {
            return(
                <div style={containerStyle}>
                    <div onClick={logout} style={buttonStyle1}>Log Out</div>
                </div>
            )
        }
        else{
            return (
                <div style={containerStyle}>
                    <Link to="/login" style={buttonStyle1}>Sign In</Link>
                    <Link to="/signup" style={buttonStyle2}>Sign Up</Link>
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