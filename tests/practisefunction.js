"use strict";
//Normal function
function A() {
    console.log("Normal function");
}
A();
//Normal function with parameter
function Bus(x) {
    return x;
}
console.log(Bus(3));
//Optional parameter
function OptionalP(x, y, z) {
    console.log(` ${x} +   ${y}   +   ${z || 0}`);
    return x + y + (z || 0);
}
console.log(OptionalP(10, 20, 30)); //With optional value
console.log(OptionalP(10, 20)); //Without optional value
//Default Parameters
function defaultP(x, y, z = 10) {
    return x + y + z;
}
console.log(defaultP(10, 20, 10)); //with default value provided
console.log(defaultP(10, 30)); //with default value provided
//ananymous function
let me = () => console.log("Welcome to TypeScript Practise");
