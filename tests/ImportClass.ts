// Importing everything from the exportedFile.ts module
// Import all is indicated using 'import *' 
// and here 'as' keyword 
import * as importAll from "./ExportClass";
let user = "Geeks";

// Calling the imported function
console.log("***********Importing everything from the importAll.sayHello(user) ***********\n");
console.log(importAll.sayHello(user));
console.log("***********End Importing everything from the importAll.sayHello(user) ***********");

// Implementing the imported interface
class hru implements importAll.howareYou {
    howareyou(user: string){
        return "How are you "+user+"!";
    }
}

// Calling the implemented function in the 
// Interface which is imported
let jd = new hru();
console.log("***********Calling the implemented function in the hru class ***********\n");
console.log(jd.howareyou(user));
console.log("*********** End Calling the implemented function in the hru class ***********");

// Creating the object of the imported class
// and calling it's function
let bye = new importAll.sayGoodByeTo();
console.log("***********Calling the function in the sayGoodByeTo class ***********\n");
console.log(bye.goodbye(user));
console.log("*********** End Calling the function in the sayGoodByeTo class ***********");