import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './axiosWithAuth.js';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LogIn = (props) => {
const [cred, setCred] = useState({username: '', password: ''});


//styles
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
    fontSize: '2rem',
    margin: '0'
}

const loginConStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
}
const loginStyle = {
    width: '80%',
    fontSize: '1.5rem',
    marginTop: '5%',
    padding: '2%'
}
const forgotStyle = {
    alignSelf: 'flex-end',
    marginRight: '10%',
    color: '#9C9B97',
    fontSize: '1.5rem',
}
const buttonStyle = {
    backgroundColor: '#9C9B97',
    color: 'white',
    fontSize: '2rem',
    padding: '1.5%',
    borderRadius: '35px',
    marginTop: '2%'
}


const newLogin = e => {
    e.preventDefault();
    axiosWithAuth().post('https://random-acts0519.herokuapp.com/api/login', cred)
                   .then(result => {
                        props.logCallBack(true);
                       alert(`Welcome back ${cred.username}.`);
                       localStorage.setItem('token', result.data.token);
                       props.logCallBack(true);
                       props.history.push('/');
                   })
                   .catch(err => {
                       alert('Please enter a valid username/password.');
                   })
}

const handleChange = e => {
    setCred({
        ...cred,
        [e.target.name]: e.target.value,
    })
}

props.callBack('#9C9B97');
return (
 <div style={containerStyle}>
 <form  className="log-in" onSubmit={newLogin} style={formStyle}>
    <div style={headerConStyle}>
        <h2 style={headerStyle}>Welcome back!</h2>
        <h2 style={headerStyle}>Sign into your account</h2>
    </div>
    <div style={loginConStyle}>
       <label htmlFor='username' ></label>
       <input
          id="username"
          name="username"
          type="text"
          placeholder="EMAIL"
          value={cred.username}
          onChange={handleChange}
          style={loginStyle}
          />
       <label htmlFor='password' ></label>
       <input
          id="password"
          name="password"
          type="text"
          placeholder="PASSWORD"
          value={cred.password}
          onChange={handleChange}
          style={loginStyle}
          />
          <Link to={'/forgot'} style={forgotStyle}>Forgot Password?</Link>
          <button type="submit" style={buttonStyle}>Sign In</button>
    </div>
 </form>
 </div>
)

}

export default LogIn;