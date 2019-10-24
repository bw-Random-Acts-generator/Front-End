import React from 'react';

import './App.css';
import ContactsList from "./Components/Contacts/ContactsList";
import { Route } from 'react-router-dom';
import './App.css';
import SignUp from './Components/Login/SignUp.js';
import LogIn from './Components/Login/LogIn.js';
import Confirm from './Components/Login/Confirm.js';
import Forgot from './Components/Login/Forgot.js';
import Header from './Components/Header.js';
import Home from './Components/Home.js';
import Acts from './Components/RandomActs/generateAct.js';
import Sign from './Components/Sign.js';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Route path="/" component={Sign} />
      <Route exact path = "/" component={Home} />
      <Route path="/generateAct" component={Acts} />
      <Route path="/contacts" component={ContactsList} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
      <Route path="/signup-confirm" component={Confirm} />
      <Route path="/forgot" component={Forgot} />
    </div>
  );
}

export default App;
