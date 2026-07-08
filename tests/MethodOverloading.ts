//Method overloading 

//NOTE: Like java we cannot create the multiple paramaters or arguments for the same named function

function add(x:number,y:number):number;
function add(X:string,y:string):string;
function add(X:number,y:string):void;

function add(x:any,y:any):any{
    console.log(`The Value of ${x} and ${y}`);
    return x+y;
}
console.log(add(1,2));
console.log(add("Try","New"));
console.log(add(1,"Type"));

//Which will not support is......
/*
function Subtract(x:number,y:number):number{
    return x+y;
}
function Subtract(x:number):number{
    return x;
} */