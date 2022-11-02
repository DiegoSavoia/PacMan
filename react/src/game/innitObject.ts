import ArrayObject from "../models/ArrayObject";

const innitObject:ArrayObject=[
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    [null,6,5,5,5,5,5,5,5,5,5,5,5,5,5,null,null,5,5,5,5,5,5,5,5,5,5,5,5,5,6,null],
    [null,5,null,null,null,null,5,null,null,null,null,null,5,5,5,null,null,5,5,5,null,null,null,null,null,5,null,null,null,null,5,null],
    [null,5,null,null,null,null,5,null,null,null,null,null,5,1,5,null,null,5,0,5,null,null,null,null,null,5,null,null,null,null,5,null],
    [null,5,null,null,null,null,5,null,null,null,null,null,5,5,5,null,null,5,5,5,null,null,null,null,null,5,null,null,null,null,5,null],
    [null,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,null],
    [null,5,null,null,null,null,5,null,null,5,null,null,null,null,null,null,null,null,null,null,null,null,5,null,null,5,null,null,null,null,5,null],
    [null,5,null,null,null,null,5,null,null,5,null,null,null,null,null,null,null,null,null,null,null,null,5,null,null,5,null,null,null,null,5,null],
    [null,5,5,5,5,5,5,null,null,5,5,5,5,5,5,null,null,5,5,5,5,5,5,null,null,5,5,5,5,5,5,null],
    [null,null,null,null,null,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,5,null,null,null,null,null,null],
    [null,null,null,null,null,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,5,null,null,null,null,null,null],
    [null,null,null,null,null,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,5,null,null,null,null,null,null],
    [null,null,null,null,null,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,5,null,null,null,null,null,null],
    [null,null,null,null,null,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,5,null,null,null,null,null,null],
    [null,5,5,5,5,5,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,5,5,5,5,5,4,null],
    [null,4,5,5,5,5,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,5,5,5,5,5,5,null],
    [null,null,null,null,null,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,5,null,null,null,null,null,null],
    [null,null,null,null,null,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,5,null,null,null,null,null,null],
    [null,null,null,null,null,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,5,null,null,null,null,null,null],
    [null,null,null,null,null,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,5,null,null,null,null,null,null],
    [null,null,null,null,null,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,5,null,null,null,null,null,null],
    [null,5,5,5,5,5,5,5,5,5,5,5,5,5,5,null,null,5,5,5,5,5,5,5,5,5,5,5,5,5,5,null],
    [null,5,null,null,null,null,5,null,null,null,null,null,5,2,5,null,null,5,3,5,null,null,null,null,null,5,null,null,null,null,5,null],
    [null,5,null,null,null,null,5,null,null,null,null,null,5,5,5,null,null,5,5,5,null,null,null,null,null,5,null,null,null,null,5,null],
    [null,5,5,5,null,null,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,null,null,5,5,5,null],
    [null,null,null,5,null,null,5,null,null,5,null,null,null,null,null,null,null,null,null,null,null,null,5,null,null,5,null,null,5,null,null,null],
    [null,null,null,5,null,null,5,null,null,5,null,null,null,null,null,null,null,null,null,null,null,null,5,null,null,5,null,null,5,null,null,null],
    [null,5,5,5,5,5,5,null,null,5,5,5,5,5,5,null,null,5,5,5,5,5,5,null,null,5,5,5,5,5,5,null],
    [null,5,null,null,null,null,null,null,null,null,null,5,5,5,5,null,null,5,5,5,5,null,null,null,null,null,null,null,null,null,5,null],
    [null,5,null,null,null,null,null,null,null,null,null,5,5,5,5,null,null,5,5,5,5,null,null,null,null,null,null,null,null,null,5,null],
    [null,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,null],
    [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
];

export default innitObject;