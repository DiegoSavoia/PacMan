import { useState } from "react";
import Direction from "../models/Direction";
import Position from "../models/Position";

interface PacmanProps {
    position: Position
    direction: Direction
    isMoving: boolean
}

function Pacman({position, direction, isMoving}: PacmanProps) {

    return (
        <div style={{ 
            top: position.y,
            left: position.x
         }} className={`pacman ${direction} ${isMoving ? "comer": ""}`}></div>
    )

}

export default Pacman;