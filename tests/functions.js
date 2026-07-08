"use strict";

const { structuredClone } = require("node:worker_threads");

//Normal function
function Success() {
    console.log("Success");
}
Success();
//Normal function with parameter
function trial(a, b) {
    return a + b;
}
console.log(trial(10, 20));
//Argument Function
let a = function () {
    console.log("vijay");
};
console.log(a());
//Function with parameter
function anonyms(name, standard) {
    console.log(`Name is : ${name} and class is : ${standard}`);
}
console.log(anonyms("vijay", "12"));
//Function with parameter and retyurn type
function anonymslittle(name, standard) {
    console.log(`Name is : ${name} and class is : ${standard}`);
    return name + " " + standard;
}
console.log(anonymslittle("John", "10"));
//Optional Parameter
function Optional(name, standard, rollno) {
    console.log(`student name is ${name} studying in class ${standard} and rollno is ${rollno} `);
    return "Pass";
}
console.log(Optional("Ashok", 10, 21));
console.log(Optional("Ashok", 10)); //rollno is optional
//Default parameter
function DefaultParameter(a, b, c = 10) {
    console.log(`Number to be added is ${a}+${b}+${c}`);
    return a + b + c;
}
console.log(DefaultParameter(10, 10)); //As already default value added
console.log(DefaultParameter(10, 10, 30)); //Adding the value to check the count of c is in the consideration.
//Ananymous function
let M = () => console.log("Ananymous Function without parameter");
//Ananymous function with parameter
let N = (x, y) => { console.log(N(2, 2)); };
//Ananymous function with parameter and return type.
let B = (K, L) => {
    console.log(`Ananymous function with parameter and return type : ${K}+${L}`);
    return K + L;
};
console.log(B(12, "Hello"));
//Ananymous function without mandatory and return type and return keyword
let V = (K, L) => {
    console.log(`Ananymous function with parameter and return type : ${K}+${L}`);
    K + L;
};
console.log(B(100, "Hiiii!!!!!"));
