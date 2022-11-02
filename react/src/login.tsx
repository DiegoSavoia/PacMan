import React, { useState } from 'react';

import './login.css';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';



const ipcRenderer = window.require("electron").ipcRenderer

function Login({changeUser}:{changeUser:(id:string)=> void}) {

    const navigate = useNavigate();
    const [username, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [isOpen,setEye]=useState(false)
    
    function login() {
        if (username && password){
            let credentials={
                username,password
            }
            ipcRenderer.invoke("login",credentials).then((r:string)=>{
                navigate("/HomePage")
                changeUser(r)
            }) 
        }else
        setMessage("error login")
    }

    function goSignup(){
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
            <p onClick={e => goSignup()} className="account">Create Account ?</p>
            <script id="replace_with_backBtn" src="../functions/back.js"></script>
        </div>
      
    </div>
   
  );
}

export default Login;