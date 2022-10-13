import React, { useState } from 'react';
import logo from './logo.svg';
import './login.css';
import { useNavigate } from 'react-router-dom';

const userH = "carlos"
const passwordH = "1234"


function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    function login() {
        if (userH === user && passwordH === password){
            console.log("Login exitoso")
            navigate("/homepage")
        } else
            console.log("Login fallido")
    }

    function signup(){
        navigate("/Signup")
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
            <p onClick={e => signup()} className="account">Create Account ?</p>
            <script id="replace_with_backBtn" src="../functions/back.js"></script>
        </div>
      
    </div>
   
    </div>
  );
}

export default Login;