import { ClassNames } from "@emotion/react"
import { useState } from "react"
import MenuModel from "../models/Menus"

interface props{
    name:string,

}

function MenuItem({selected, label}:{selected:boolean,label:string}){
    return(<div className={`button zoom ${selected? "selected":" "}`}>{label}</div>)
}
export default MenuItem