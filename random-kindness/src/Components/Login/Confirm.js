import React, { useEffect } from 'react';

var stopwatch = require('../../img/stopwatch.png');

const Confirm = (props) => {
    const containerStyle= {
        backgroundColor: '#F2CFC9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '60rem'
    }
    const timerStyle = {
        height: '40%',
        backgroundColor: '#F2CFC9'
    }
    const textStyle = {
        marginTop: '5%',
        color: '#918C89',
        fontSize: '1.5rem'
    }

    useEffect(() => {
        setTimeout(function(){ props.history.push('/login'); }, 3000);
    }, [])
    return(
        <div style={containerStyle}>
            <img src={stopwatch} style={timerStyle}/>
            <p style={textStyle}>Please Wait while we Create Account</p>
        </div>
    )
}

export default Confirm;