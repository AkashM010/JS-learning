let flag = "name";
console.log(Boolean(flag));

let str = "33";
let convertedStr = Number(str)
console.log(typeof convertedStr)
console.log(convertedStr)

// Boolean() and Number() perform different types of conversion
// Boolean() checks whether a value is truthy or falsy. However, it checks the value's truthiness, not its data type
/*
    Boolean(value) returns true or false
    Number(value) attempts to convert the value into a number
    String(value) converts a value into a string
*/