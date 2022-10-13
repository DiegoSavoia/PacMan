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

<<<<<<< HEAD
    function signup(){
        navigate("/Signup")
=======
    function signup() {
        console.log("Todavía no te podes registrar")
>>>>>>> a07bb9fe8c5423170127a890dfc0f1db94e1e897
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