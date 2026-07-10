//Call Back Function - calling one function in other function to execute later.

//Example:

function expected(a:number,b:number,callback:(name:string)=>void,callback1:(number:number)=>void,callback2:()=>void){ 
    
    //callback:(name:string)=>void -->Syntax
    //callback is not keyword it is just the variable

    let count=a+b;
    console.log("The total count is", count)
    //other functions getting called as
    callback("John")
    callback1(count);
    callback2();
}

//call back function1
function greet(name:string){
    console.log(`The name is ${name}`)
}

//call back function2
function greet1(number:number){
    console.log(`The number is ${number}`)
}

//call back function3
function greet3(){
    console.log(`Success`)
}

//function invoking
expected(5,5,greet,greet1,greet3) //---greet,greet1,greet3 is the function name




