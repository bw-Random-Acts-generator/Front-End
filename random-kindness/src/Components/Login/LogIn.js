import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './axiosWithAuth.js';
import axios from 'axios';

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
    marginTop: '10%',
    borderRadius: '50%',
    height: '70%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    
}
const newLogin = e => {
    e.preventDefault();
    axiosWithAuth().post('https://random-acts0519.herokuapp.com/api/login', cred)
                   .then(result => {
                       localStorage.setItem('token', result.data.token);
                       props.history.push('/');
                   })
}

const handleChange = e => {
    setCred({
        ...cred,
        [e.target.name]: e.target.value,
    })
}
return (
 <div style={containerStyle}>
 <form  className="log-in" onSubmit={newLogin} style={formStyle}>
    <h2>Welcome back!</h2>
    <h2>Sign into your acount</h2>
    <div>
       <label htmlFor='username' ></label>
       <input
          id="username"
          name="username"
          type="text"
          placeholder="EMAIL"
          value={cred.username}
          onChange={handleChange}
          />
       <label htmlFor='password' ></label>
       <input
          id="password"
          name="password"
          type="text"
          placeholder="PASSWORD"
          value={cred.password}
          onChange={handleChange}
          />
          <p>Forgot Password?</p>
          <button type="submit">Sign In</button>
    </div>
 </form>
 </div>
)

}

export default LogIn;