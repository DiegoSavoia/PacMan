import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mongoose from 'mongoose';

const signUp =new mongoose.Schema({
    userName:{
        type:String,
        required:true
    
    },
    userPassword:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
        
})
function Signup() {
    const navigate = useNavigate();
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [isOpen,setEye]=useState(false)

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
    <div className="login">
        <div id="login">
          
            <h1 className="login-text">SIGN UP</h1>
            <form action="" className="form">
                <div id="RuserHolder">
                    
                    <input onChange={e => setUser(e.target.value)} id="user" type="text" placeholder="Username"/>
                </div>
               
                <div id="passwordHolder">
                    <input onChange={e => setPassword(e.target.value)} id="password" type={isOpen? "text":"password"} placeholder="Password"/> 
                    <span onClick={e=>setEye(p=>!p)} id="ojo" className={`eye ${isOpen? "open":"closed"}`}>
                    </span>
                </div>
                <div id="passwordHolder">
                <input onChange={e => setPassword(e.target.value)} id="password" type={isOpen? "text":"password"} placeholder="Password"/> 
                    <span onClick={e=>setEye(p=>!p)} id="ojo" className={`eye ${isOpen? "open":"closed"}`}>
                    </span>
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