//For function overloading 3 steps to be followed as mandatory....
//----> Same class, same function, but different parameters (i.e can be different count of same parameter,different parameter datatype, 
// different return types)

//-->Step 1 : Write all the signature (Without the implementation)
//-->Step 2 : Write the implementation
//-->Step 3 : Call the implementation

console.log("==>Different parameters and same return type")
//Signature creation
function getdata(a:number):string;
function getdata(a:string):string;

//implementation
function getdata(para: number|string):string{
    if(typeof para === "number"){
        return (`It is a number : ${para}`);
    }
    else{
        return (`It is a string : ${para}`)
    }
}

//calling implementation
console.log(getdata("Hello World"));
console.log(getdata(100));

console.log("==>same parameters but count different and same return type")
function getvalue(a:number):number;
function getvalue(a:number,b:number):number;

function getvalue(a:number,b?:number):number{
    if(typeof b === "undefined"){
        return a;
    }

    return a+b;
}

console.log(getvalue(10));
console.log(getvalue(10,20));

console.log("==>Different parameters and different return type")
//Signature creation
function getdatascore(a:number):number;
function getdatascore(a:string):string;

//implementation
function getdatascore(para: number|string):string|number{
    if(typeof para === "number"){
        return (`It is a number : ${para}`);
    }
    else{
        return (`It is a string : ${para}`)
    }
}

//calling implementation
console.log(getdatascore("World"));
console.log(getdatascore(1000));

