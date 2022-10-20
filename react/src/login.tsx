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
    const [isOpen,setEye]=useState(false)
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
    <div className="login"> 
        <div id="login">
          
            <h1 className="login-text">LOGIN</h1>
            <form action="" className="form">
                <div id="userHolder">
                    
                    <input onChange={e => setUser(e.target.value)} id="user" type="text" placeholder="Username"/>
                </div>
               
                <div id="passwordHolder">
                    <input onChange={e => setPassword(e.target.value)} id="password" type={isOpen? "text":"password"} placeholder="Password"/> 
                    <span onClick={e=>setEye(p=>!p)} id="ojo" className={`eye ${isOpen? "open":"closed"}`}>
                    </span>
                </div>
            </form>
            
            <button onClick={e => login()} className="button zoom" type="submit">LOGIN</button>
            <p onClick={e => signup()} className="account">Create Account ?</p>
            <script id="replace_with_backBtn" src="../functions/back.js"></script>
        </div>
      
    </div>
   
  );
}

export default Login;