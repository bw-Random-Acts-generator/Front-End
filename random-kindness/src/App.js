import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SignUp from './Components/Login/SignUp.js';
import LogIn from './Components/Login/LogIn.js';
import Confirm from './Components/Login/Confirm.js';

function App() {
  return (
    <div className="App">
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
      <Route path="/signup-confirm" component={Confirm} />
    </div>
  );
}

export default App;
