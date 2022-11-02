import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mongoose from 'mongoose';

const ipcRenderer = window.require("electron").ipcRenderer

function Signup() {

    const navigate = useNavigate();
    const [username, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [message, setMessage] = useState("")
    const [isOpen,setEye]=useState(false)

    

    function signup(){
        if (password === passwordConfirm && username) {
            let credentials = {
              username, password
            }
            
            ipcRenderer.invoke("signup", credentials).then((r: string) => {
              alert("USER ID: " + r)
            })    
            setMessage("signup")
        }else
            setMessage("error password")
    }
    
    function goLogin() {
      navigate("/Login")
  }
  return (
    <div className="login">
        <div id="login">
          
            <h1 className="login-text">SIGN UP</h1>
            <form action="" className="form">
                <div id="RuserHolder">
                    
                    <input onChange={e => setUser(e.target.value)} id="user" name="user" type="user" placeholder="Username"/>
                </div>
               
                <div id="passwordHolder">
                    <input onChange={e => setPassword(e.target.value)} id="password" type={isOpen? "text":"password"} placeholder="Password"/> 
                    <span onClick={e=>setEye(p=>!p)} id="ojo" className={`eye ${isOpen? "open":"closed"}`}>
                    </span>
                </div>
                <div id="passwordHolder">
                <input onChange={e => setPasswordConfirm(e.target.value)} id="passwordConfirm" type={isOpen? "text":"password"} placeholder="Password confirm"/> 
                    <span onClick={e=>setEye(p=>!p)} id="ojo" className={`eye ${isOpen? "open":"closed"}`}>
                    </span>
                </div>
            </form>
            
            <button onClick={e => signup()} className="button zoom" type="submit">SIGN UP</button>
            <p onClick={e => goLogin()} className="account"><a href="#">Already have an account?Login</a></p>
            <script id="replace_with_backBtn" src="../functions/back.js"></script>
            <p id="mensaje">Mensaje: {message}</p>
        </div>
      
    </div>
   
  );
}

export default Signup;