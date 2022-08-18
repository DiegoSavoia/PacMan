import React from 'react';
import logo from './logo.svg';
import './App.css';

function login() {
  return (
    <div className="login"><script id="replace_with_navbar" src="../functions/nav.js"></script> 
    <div className="container">
        <div id="login">
          
            <h1 className="login-text">LOGIN</h1>
            <form action="" className="form">
                <div id="userHolder">
                    
                    <input id="user" type="text" placeholder="Username"/>
                </div>
               
                <div id="passwordHolder">
                    <input id="password" type="password" placeholder="Password"/> 
                    <a id="ojo" className="eye closed">
                    </a>
                </div>
            </form>
            
            <button className="button zoom" type="submit">LOGIN</button>
            <p className="account"><a href="#">Create Account ?</a></p>
            <script id="replace_with_backBtn" src="../functions/back.js"></script>
        </div>
      
    </div>
    <script src='../functions/login.js'></script>
    </div>
  );
}

export default login;