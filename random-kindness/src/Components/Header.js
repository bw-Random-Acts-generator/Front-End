import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    const [menu, setMenu] = useState(false);
    const menuClick = () => {
        if(menu){
            setMenu(false);
        }
        else {
            setMenu(true);
        }
    }

    const mobile = () => {
            if(menu){
                return (
                    <div className="mobileStyle">
                        <div className="navStyle" onClick={menuClick}>Back</div>
                        <div className="navStyle"></div>
                        <Link to="/" className="navStyle navStyle1">Home</Link>
                        <Link to="/contacts" className="navStyle navStyle2">Contacts</Link>
                        <Link to="/acts" className="navStyle navStyle3">Random Acts</Link>
                    </div>
                )
            }
            else {
                return (
                null
            )
            }
    }
    return (
        <div className="conStyle">
            <h1 className="fontStyle">Random Acts Generator</h1>
            <div className="menu-container">
                <div className="menu-button-container" onClick={menuClick}>
                    <div className="menu"></div>
                    <div className="menu"></div>
                    <div className="menu"></div>
                </div>
                {mobile()} 
            </div>
            <div className="navConStyle">
                <Link to="/" className="navStyle">Home</Link>
                <Link to="/contacts" className="navStyle">Contacts</Link>
                <Link to="/acts" className="navStyle">Random Acts</Link>
            </div>
        </div>
    )
}

export default Header;