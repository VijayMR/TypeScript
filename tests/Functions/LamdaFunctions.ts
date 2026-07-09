//Lamda functions/ Arrow functions.

//syntax
//======

/*
let b=(Parameter)=>{
    //code of block
}
b(); 
*/

console.log("==>Lamda Function/ Arrow Function without parameter")
let parrot=()=>{
    console.log("Lamda expression")
}
parrot();

console.log("==>Lamda Function/ Arrow Function with parameter")
let lovebirds=(x:number,y:number)=>{
    console.log(`With Parameter : x:${x}, y:${y}`)
}
lovebirds(10,20);

console.log("==>Lamda Function/ Arrow Function with parameter with return type")
let tails=(x:number,y:number):number=>{
   return x*y;
}
console.log(tails(10,20));

console.log("==>Lamda Function/ Arrow Function with optional-parameter without return type")
let seabird=(x:number,y?:number)=>{
   console.log(`optional parameter : ${x}+${y}`);
}
seabird(20,30);

console.log("==>Lamda Function/ Arrow Function with default-parameter with return type")
let mynaa=(x:number,y:number=10):number=>{
   return x*y
}
console.log(mynaa(20)); //---->x:20;y:default value as value is not assigned==>o/p=200
console.log(mynaa(20,20));//---->x:20;y:20==>o/p=400

console.log("==>Lamda function with Rest-parameter single-datatype")
let cukooo=(...cukooo:number[])=>{
    console.log(cukooo.length);
}
cukooo(1);
cukooo(1,2);
cukooo(1,2,3);

console.log("==>Lamda function with Rest-parameter Multiple-datatype")
let sparrow=(...sparrow:(string|number)[])=>
{
    console.log(sparrow.length);
}
sparrow(1);
sparrow(1,"Bird");
sparrow(1,"Bird",3);