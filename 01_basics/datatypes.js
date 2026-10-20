/*
    Dataypes are of 2 types:
    1. Primitive, &
    2. Non - Primitive
*/

// Primitive Datatype in JS (7 types) - null, number, Boolen, bigint, boolean, string, symbol, undefined
let a = null;
let b = 345;
let c = true;
let d = BigInt("567");
let e = "Akash";
let f = Symbol("I am a symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof c);

// Non - Pimitive Datatype in JS --> Object
const account = {
    "name": "Akash",
    "age": 30,
    "status": true
}

console.log(account["status"]);