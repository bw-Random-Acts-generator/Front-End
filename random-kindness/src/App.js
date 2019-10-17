import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SignUp from './Components/Login/SignUp.js'
function App() {
  return (
    <div className="App">
      <Route path="/" component={SignUp} />
    </div>
  );
}

export default App;
