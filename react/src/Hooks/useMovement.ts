import { useEffect, useState } from "react"

type Directions = "L" | "R" | "D" | "U"
function useMovement() {
    const [direction, setDirection] = useState<Directions>("L")

    const [position, setPosition] = useState({ x: 0, y: 0 })

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

    function setNewDirection(NewDirection:Directions){
        setDirection(NewDirection)
        setMoving (true)
    }
    return {
        direction, position, isMoving,setDirection:setNewDirection
    }
}
export default useMovement