import { useEffect, useLayoutEffect, useState } from "react";
import useMovement from "../Hooks/useMovement";
import innitGhost from "./innitGhost";
import innitObject from "./innitObject";
import innitMap from "./maps/innitMap";
import "./maps/mapa.css"
import Pacman from "./Pacman";


function Game() {
    const ghost1 = useMovement()
    const pacman = useMovement()
    const size = 20
    const [mapa, setMapa] = useState(innitMap)
    const [objetos, setObjetos] = useState(innitObject)
    const [fantasmas, setFantasmas] = useState(innitGhost)

    const handleKey=(e:KeyboardEvent)=>{
        console.log("Keydown",e.key,":",e.code)
        let{key}=e;
        console.log(key)
         switch(key){
            case"ArrowUp":
            pacman.setDirection("U")
            break;
            case"ArrowDown":
            pacman.setDirection("D")
            break;
            case"ArrowLeft":
            pacman.setDirection("L")
            break;
            case"ArrowRight":
            pacman.setDirection("R")
            break;
            
        }
    }
    useLayoutEffect(()=>{
        window.addEventListener("keydown",handleKey);
        return()=>{
            window.removeEventListener("keydown",handleKey)
        }
    })
    

    useEffect(() => {
        //ghost1.setDirection("D")
    }, [])

    return (
        <div id="mapa">
            {mapa.map((f, fi) => <div className="row" >
                {f.map((t, ti) => <div style={{
                    backgroundPositionX: (-t * size) + "px",
                    backgroundPositionY: "0px",
                }} className="tile">
                    {fantasmas[fi][ti] != null &&
                        <div style={{
                            backgroundPositionX: (-fantasmas[fi][ti]! * size) + "px",
                            backgroundPositionY: "0px",
                        }} className="ghost">
                        </div>
                    }
                    {objetos[fi][ti] != null &&
                        <div style={{
                            backgroundPositionX: (-objetos[fi][ti]! * size) + "px",
                            backgroundPositionY: "0px",
                        }} className="object">
                        </div>
                    }
                </div>)}
            </div>
            )}
            <Pacman position={pacman.position} direction={pacman.direction} isMoving={pacman.isMoving}/>
            <div style={{
                position: "absolute",
                left: (ghost1.position.x * size) + "px",
                top: (ghost1.position.y * size) + "px",
            }} className="ghost" />
        </div>

    )
}

export default Game;