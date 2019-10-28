import React from 'react';
import { Link } from 'react-router-dom';

import "./Home.css"


var momPic = require("./mother.jpg")





const Home = (props) => {
    props.callBack('#ECE9E0');
    return (
        <div className="containerHome">
            <div className="picConStyle"><img className="picStyle" src={momPic}/></div>
            <h1 className="home-title">Welcome!</h1>
            <Link to={'/acts'} className="homeBtn">GENERATE RANDOM ACT</Link>
        </div>
    )
}

export default Home;