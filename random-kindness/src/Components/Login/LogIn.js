import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './axiosWithAuth.js';
import axios from 'axios';

const LogIn = (props) => {
const [cred, setCred] = useState({username: '', password: ''});

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
 <form  className="log-in" onSubmit={newLogin}>
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
      <div>
    </div>
 </form>
)

}

export default LogIn;