type Direction = "L" | "R" | "D" | "U"

const modDirection = {
    L: { x: -1, y: 0 },
    R: { x: +1, y: 0 },
    U: { x: 0, y: -1 },
    D: { x: 0, y: +1 }
}

export {modDirection}
export default Direction