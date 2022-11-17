import { useState } from "react";

function Pacman() {
    const [position, setPosition] = useState([])
    const [direction, setDirection] = useState([])

    return (
        <div className="pacman"></div>
    )

}

export default Pacman;