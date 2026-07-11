//String - Set of characters enclosed in the ' ' or " " or ` ` in the js and ts.

let boat="Happy coding!!!"

//Length - attribute - To find the total indexes of the element
console.log();
console.log("==>Length")
console.log("Length : ",boat.length);

//To uppercase - Convert to uppercase
console.log();
console.log("==>ToUpperCase")
console.log("ToUpperCase : ",boat.toUpperCase());

//To lowercase - Convert to lowercase
console.log();
console.log("==>ToLowerCase")
console.log("ToLowerCase : ",boat.toLowerCase());

//chartAt - To identify the character at index
console.log();
console.log("==>CharAt")
let charat=boat.charAt(1);
console.log("charAt : ",charat);

//IndexOf - To identify the index of the string
console.log();
console.log("==>IndexOf")
let indexof=boat.indexOf("y");
console.log("IndexOf : ",indexof);

//Substring - retrives the value form the starting of the required index to required ending of the index+1;
console.log();
console.log("==>Substring")
let Substring=boat.substring(0,5); // H a p p y
console.log("Substring : ",Substring);

//includes - whether it contains the charater or set of string or not - return type is boolean
console.log();
console.log("==>includes")
let includes=boat.includes("ppy");
console.log("Includes : ",includes);
includes=boat.includes("apy"); 
console.log("Includes : ",includes);

//Starts-with - returns boolean
console.log();
console.log("==>Starts-With")
let Starts=boat.startsWith("Happy");
console.log("Starts : ",Starts);
Starts=boat.startsWith("happy");
console.log("Starts : ",Starts);

//Ends-with -returns boolean
console.log();
console.log("==>Ends-With")
let ends=boat.endsWith("Happy");
console.log("Ends-With : ",ends);
ends=boat.endsWith("!");
console.log("Ends-With : ",ends);

//replace - replaces the old value with the new value
console.log();
console.log("==>Replace")
let replace=boat.replace("Happy","Good");
console.log("Replace : ",replace);


// split - splits a string into an array based on the delimiter
console.log();
console.log("==> Split");
let splitValue = boat.split(" ");
console.log("Split : ", splitValue);

//trim , trimstart, trimend - removes the space in the start and end
console.log();
console.log("==> Trim");
console.log("Trim : ", boat.trim());

//concat - used to combine two strings
console.log();
console.log("==> Concat")
console.log("Concat : ", boat.concat(" Great"));
console.log("Concat : ", "Enjoy ".concat(boat));
console.log("Concat : ", "Enjoy "+ (boat)); // Not Recommended.
console.log("Concat : ", (boat));

//MultiLine
/*
let success="I am 
                a coder"; //should be in single line that's y giving error;
    success='I am 
                a coder'; //should be in single line that's y giving error;
    success=`I am 
                a coder`; // It works fine for the multiline.
*/

//Strings are immutable beacuse the values get stored in the new memory location it does not overide the value\.