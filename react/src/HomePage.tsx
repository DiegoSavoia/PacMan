import { useLayoutEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./componentes/Menu";
import "./homePage.css"
import MenuModel from "./models/Menus";
import logo from './public/img/logo.png';


function HomePage() {
    const ipcRenderer = window.require("electron").ipcRenderer
    const navigate = useNavigate()
    const[menuSelected,setMenuSelected]=useState(0)
    const menus:MenuModel[]=[
        {label:"Play",
        action: ()=>navigate("/Game")},
        {label:"Score",
        action: ()=>navigate("/Score")},
        {label:"Skin",
        action: ()=>navigate("/MenuSkins")},
        {label:"Exit",
        action: ()=>ipcRenderer.send('closeApp')},
        
    ]
        
    function redirectLogin(): void {
        throw new Error("Function not implemented.")
    }
    return (
        
        <div className="Homepage">
            <script src="directionalnavigation-1.0.0.0.js"></script>
            <div id="menu-inicio">
                <img id="logo" src="../img/logo.png" />
                <h3 id="menu">Menu</h3>
                <div id="options">
                   <Menu menus={menus}></Menu>
                </div>
            </div>
        </div>
    )

}
export default HomePage;