import React, { useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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
  const [color, setColor] = useState('');
  const backgroundStyle = {
    backgroundColor: color,
    fontFamily: 'Montserrat'
  }
  const callBack = (data) => {
    setColor(data);
    console.log(color)
  }
  return (
    <div className="App" style={backgroundStyle}>
      <Route path="/" render={(props) => <Header {...props} color={color}/> }/>
      <Route path="/" component={Sign} />
      <Route exact path="/" render={(props) => <Home {...props} callBack={callBack}/> } />
      <Route path="/acts" component={Acts} />
      <Route path="/acts" render={(props) => <Acts {...props} callBack={callBack}/> } />
      <Route path="/contacts" render={(props) => <ContactsList {...props} callBack={callBack}/> } />
      <Route path="/signup" render={(props) => <SignUp {...props} callBack={callBack}/> } />
      <Route path="/login" render={(props) => <LogIn {...props} callBack={callBack}/> }/>
      <Route path="/signup-confirm" component={Confirm} />
      <Route path="/forgot" component={Forgot} />
    </div>
  );
}

export default App;
