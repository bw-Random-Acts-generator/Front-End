import React, { useState, useEffect } from 'react';


const LogIn = (props) => {

return (
 <form  className="log-in">
    <h2>Welcome back!</h2>
    <h2>Sign into your acount</h2>
    <div>
       <label htmlFor='email' ></label>
       <input
          id="email"
          name="email"
          type="text"
          placeholder="EMAIL"
          
          />
       <label htmlFor='password' ></label>
       <input
          id="password"
          name="password"
          type="text"
          placeholder="PASSWORD"
          
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