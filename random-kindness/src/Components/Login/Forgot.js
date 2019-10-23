import React from 'react';

const Forgot = () => {
    const containerStyle = {
    backgroundColor: '#9C9B97',
    height: '60rem',
    display: 'flex',
    justifyContent: 'center',
    }
    const formStyle = {
    backgroundColor: '	#FAEFED',
    marginTop: '7.5%',
    borderRadius: '50%',
    height: '85%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'  
    }
    const headerConStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: '3%'
    }
    const headerStyle = {
    fontSize: '1.5rem',
    margin: '0',
    color: '#9C9B97'
}
const emailConStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
}
const emailStyle = {
    width: '80%',
    fontSize: '1.5rem',
    marginTop: '5%',
    padding: '2%'
}
const buttonStyle = {
    backgroundColor: '#CBBEAF',
    color: '#9C9B97',
    fontSize: '2rem',
    padding: '1.5%',
    borderRadius: '35px',
    marginTop: '2%'
}

    return (
        <div style={containerStyle}>
            <div style={formStyle}>
                <div style={headerConStyle}>
                    <h2 style={headerStyle}>Forgot your password?</h2>
                    <h2 style={headerStyle}>Enter your email and we'll send you a link to reset it.</h2>
                </div>
                <div style={emailConStyle}>
                    <label htmlFor='username' ></label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="EMAIL"
                        style={emailStyle}    
                    />
                    <button type="submit" style={buttonStyle}>Send Now!</button>
                </div>
            </div>
        </div>
    )
}

export default Forgot;