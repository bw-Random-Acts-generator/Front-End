import React from 'react';
import "./login.css";
const Forgot = () => {

    return (
        <div className="containerStyle">
            <div className="formStyle">
                <div className="headerConStyle">
                    <h2 className="headerStyle">Forgot your password?</h2>
                    <h2 className="headerStyle">Enter your email and we'll send you a link to reset it.</h2>
                </div>
                <div className="loginConStyle">
                    <label htmlFor='username' ></label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="EMAIL"
                        className="loginStyle"    
                    />
                    <button type="submit" className="buttonStyle">Send Now!</button>
                </div>
            </div>
        </div>
    )
}

export default Forgot;