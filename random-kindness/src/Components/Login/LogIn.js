import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './axiosWithAuth.js';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './login.css';

const LogIn = (props) => {
const [cred, setCred] = useState({username: '', password: ''});





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
 <div className="containerStyle">
 <form   onSubmit={newLogin} className="formStyle">
    <div className="headerConStyle">
        <h2 className="headerStyle">Welcome back!</h2>
        <h2 className="headerStyle">Sign into your account</h2>
    </div>
    <div className="loginConStyle">
       <label htmlFor='username' ></label>
       <input
          id="username"
          name="username"
          type="text"
          placeholder="EMAIL"
          value={cred.username}
          onChange={handleChange}
          className="loginStyle"
          />
       <label htmlFor='password' ></label>
       <input
          id="password"
          name="password"
          type="password"
          placeholder="PASSWORD"
          value={cred.password}
          onChange={handleChange}
          className="loginStyle"
          />
          <Link to={'/forgot'} className="forgotStyle">Forgot Password?</Link>
          <button type="submit" className="buttonStyle">Sign In</button>
    </div>
 </form>
 </div>
)

}

export default LogIn;