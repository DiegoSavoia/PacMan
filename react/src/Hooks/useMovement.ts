import { useEffect, useState } from "react"
import Direction from "../models/Direction"
import Position from "../models/Position"

function useMovement(initialPosition = { x: 0, y: 0 }) {
    const [direction, setDirection] = useState<Direction>("L")

    const [position, setPosition] = useState<Position>(initialPosition)

    const [isMoving, setMoving] = useState(false)

    const modDirection = {
        L: { x: -1, y: 0 },
        R: { x: +1, y: 0 },
        U: { x: 0, y: -1 },
        D: { x: 0, y: +1 }
    }
    useEffect(() => {
        if (isMoving)
            setPosition(p => ({
                x: p.x + modDirection[direction].x,
                y: p.y + modDirection[direction].y
            }))
    }, [position, isMoving, direction])

    function setNewDirection(NewDirection:Direction){
        setDirection(NewDirection)
        setMoving (true)
    }
    return {
        direction, position, isMoving,setDirection:setNewDirection
    }
}
export default useMovement