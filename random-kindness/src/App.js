import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SignUp from './Components/Login/SignUp.js'
import LogIn from './Components/Login/LogIn.js'


function App() {
  return (
    <div className="App">
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
    </div>
  );
}

export default App;
