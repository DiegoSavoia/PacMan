import React, { useState } from 'react';
import logo from './logo.svg';
import './login.css';

const userH = "carlos"
const passwordH = "1234"

function Login() {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    function login() {
        if (userH === user && passwordH === password){
            console.log("Login exitoso")
        } else
            console.log("Login fallido")
    }

    function signup(){
        console.log("Todavia no te podes registrar")
    }

  return (
    <div className="login"><script id="replace_with_navbar" src="../functions/nav.js"></script> 
    <div className="container">
        <div id="login">
          
            <h1 className="login-text">LOGIN</h1>
            <form action="" className="form">
                <div id="userHolder">
                    
                    <input onChange={e => setUser(e.target.value)} id="user" type="text" placeholder="Username"/>
                </div>
               
                <div id="passwordHolder">
                    <input onChange={e => setPassword(e.target.value)} id="password" type="password" placeholder="Password"/> 
                    <a id="ojo" className="eye closed">
                    </a>
                </div>
            </form>
            
            <button onClick={e => login()} className="button zoom" type="submit">LOGIN</button>
            <p onClick={e => signup()} className="account"><a href="#">Create Account ?</a></p>
            <script id="replace_with_backBtn" src="../functions/back.js"></script>
        </div>
      
    </div>
    <script src='../functions/login.js'></script>
    </div>
  );
}

export default Login;