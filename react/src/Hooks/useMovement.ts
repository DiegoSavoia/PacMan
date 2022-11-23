import { useEffect, useState } from "react"
import innitMap from "../game/maps/innitMap"
import Direction, { modDirection } from "../models/Direction"
import Position from "../models/Position"

function useMovement(initialPosition = { x: 0, y: 0 }) {
    const [direction, setDirection] = useState<Direction>("L")

    const [position, setPosition] = useState<Position>(initialPosition)

    const [isMoving, setMoving] = useState(false)

    useEffect(() => {
        let MathMod = {
            x: modDirection[direction].x === -1 ? Math.floor : modDirection[direction].x === 1 ? Math.ceil : Math.round,
            y: modDirection[direction].y === -1 ? Math.floor : modDirection[direction].y === 1 ? Math.ceil : Math.round,
        }
        let nextPosition = innitMap
        [MathMod.y((position.y + modDirection[direction].y) / 20)]
        [MathMod.x((position.x + modDirection[direction].x) / 20)]
        if (isMoving && nextPosition == 0)
            setPosition(p => ({
                x: p.x + modDirection[direction].x,
                y: p.y + modDirection[direction].y
            }))
            setMoving(false)
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