import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';
const mongoose= require('mongoose');
function Signup() {
    const navigate = useNavigate();
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [eye, setEye]=useState(true)

    function login() {
        navigate("/Login")
    }

    function signup(){
        if(password===confirm){
            console.log("Registro exitoso")
            navigate("/Login")
        }else{
            console.log("Las contraseñas no coinciden")
        }
        
    }

  return (
    <div className="container">
        <div id="login">
          
            <h1 className="signUp-text">SIGN UP</h1>
            <form action="" className="form">
                <div id="RuserHolder">
                    
                    <input onChange={e => setUser(e.target.value)} id="user" type="text" placeholder="Username"/>
                </div>
               
                <div id="RpasswordHolder">
                    <input onChange={e => setPassword(e.target.value)} id="password" type="password" placeholder="Password"/> 
                    <a id="ojo" className="eye closed">
                    </a>
                </div>
                <div id="RpasswordHolder">
                    <input onChange={e => setConfirm(e.target.value)} id="ConfirmPassword" type="password" placeholder="Confirm password"/> 
                    <a id="ojo" className="eye closed">
                    </a>
                </div>
            </form>
            
            <button onClick={e => signup()} className="button zoom" type="submit">SIGN UP</button>
            <p onClick={e => login()} className="account"><a href="#">Already have an account?Login</a></p>
            <script id="replace_with_backBtn" src="../functions/back.js"></script>
        </div>
      
    </div>
   
  );
}

export default Signup;