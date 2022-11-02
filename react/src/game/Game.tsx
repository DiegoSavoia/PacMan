import { useState } from "react";
import innitGhost from "./innitGhost";
import innitObject from "./innitObject";
import innitMap from "./maps/innitMap";
import "./maps/mapa.css"


function Game() {

    const size = 20
    const [mapa, setMapa] = useState(innitMap)
    const [objetos, setObjetos] = useState(innitObject)
    const [fantasmas, setFantasmas] = useState(innitGhost)

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
        </div>

    )
}

export default Game;