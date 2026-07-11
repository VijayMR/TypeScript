//Callback - calling one function in the other function for the later execution is called as callback function


//main function
function named(callback:(number:number)=>void,callback1:()=>void){

    console.log("working as expected");
    callback(100);
    callback1();
}


//callback function
function asd(number:number){
    console.log("this is call back function");
}

//callback function
function asdd(){
    console.log("this is call back function1");
}

named(asd,asdd);