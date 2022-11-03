import { useNavigate } from "react-router-dom"
import "./menu.css"
import MenuModel from"../models/Menus";
import { useState, useLayoutEffect } from "react";
import MenuItem from "./MenuItem";

const ipcRenderer = window.require("electron").ipcRenderer

function Menu({ menus }: {menus: MenuModel[] }) {
    const navigate = useNavigate()
    const[menuSelected,setMenuSelected]=useState(0)
    const handleKey=(e:KeyboardEvent)=>{
        console.log("Keydown",e.key,":",e.code)
        let{key}=e;
        console.log(key)
         switch(key){
            case"ArrowUp":
            setMenuSelected(p => p > 0 ? p-1 : menus.length-1)
            break;
            case"ArrowDown":
            setMenuSelected(p => p < menus.length-1 ? p+1 : 0)
            break;
            case"Enter":
            menus[menuSelected].action()
            break;
        }
    }
    useLayoutEffect(()=>{
        window.addEventListener("keydown",handleKey);
        return()=>{
            window.removeEventListener("keydown",handleKey)
        }
    })
    
    
    return (

        <div id="options">
            {menus.map((menu,indexMenu)=><MenuItem selected={indexMenu===menuSelected} label={menu.label}/>)}
         </div>
    )

}
export default Menu;