//Ananymous function

    // ------> It is also called as the nameless or unnamed function
    //-------> Instead of naming the function we assign it in the variable.

    /*
    Syntax:
    ======

    let var=function(parameter){
    
    //code block.

    }

    */

console.log("==>Ananymous/Unnamed/Nameless function without parameter")
let ant=function(){
    console.log("without Parameter")
}
ant();

console.log("==>Ananymous/Unnamed/Nameless function with parameter without return type")
let dog=function(x:number,y:number){
    console.log(`The value of x:${x} and y:${y}`)
}
dog(1,2);

console.log("==>Ananymous/Unnamed/Nameless function with parameter with return type")
let cat=function(x:number,y:number):number{
    return x+y;
}
console.log(cat(10,20));

console.log("==>Ananymous/Unnamed/Nameless function with Rest-parameter single-datatype")
let lion=function(...lion:number[]){
    console.log(lion.length);
}
lion(1);
lion(1,2);
lion(1,2,3);

console.log("==>Ananymous/Unnamed/Nameless function with Rest-parameter Multiple-datatype")
let tiger=function(...tiger:(string|number)[]){
    console.log(tiger.length);
}
tiger(1);
tiger(1,2);
tiger(1,2,3);

console.log("==>Ananymous/Unnamed/Nameless function with optional-parameter")
let cheeta=function(x:number,y?:number){
    console.log(`The count of cheeta in the x:${x} and y:${y}`);
}
cheeta(1); //------->o/p==> 1,undefined
cheeta(1,2);//------>o/p==>1,2

console.log("==>Ananymous/Unnamed/Nameless function with default-parameter")
let panther=function(x:number,y:number=10){
    console.log(`The count of panther in the x:${x} and y:${y}`);
}
panther(1); //------->o/p==> 1,10
panther(1,2);//------>o/p==>1,2
