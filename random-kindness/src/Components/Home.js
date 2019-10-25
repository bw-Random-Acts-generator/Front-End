import React from 'react';
import { Link } from 'react-router-dom';

import "./Home.css"


var momPic = require("./mother.jpg")

const homeBtn = {
    backgroundColor: "#EB7F75",
    width: "32rem",
    height: "5.5rem",
    borderRadius: "35px",
    color: "white",
    fontSize: "2rem",
    cursor: "pointer",
    textDecoration: "none",
    padding: "1.5%",
    boxShadow: "1px 4px 4px black",
}



const Home = (props) => {
    props.callBack('#ECE9E0');
    return (
        <div className="containerHome">
            <div className="picConStyle"><img className="picStyle" src={momPic}/></div>
            <h1 className="home-title">Welcome!</h1>
            <Link to={'/acts'} style={homeBtn}>GENERATE RANDOM ACT</Link>
        </div>
    )
}

export default Home;