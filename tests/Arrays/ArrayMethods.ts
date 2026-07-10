let ball:string[]=["a","b","c","d","e"]
let volley:number[]=[1,2,3,4,5]

//Length -- attribute
console.log();
console.log("==>Length");
console.log("Length of ball :",ball.length);

//push - add single/multiple value to the end of the array
console.log();
console.log("==>Push");
ball.push("f","g","h","i");
console.log("After the push : ",ball)

//pop - Remove the last value in the array
console.log();
console.log("==>Pop");
ball.pop();
console.log("After the pop : ",ball)

//shift - Removes the first element in the array
console.log();
console.log("==>Shift");
ball.shift();
console.log("After the shift : ",ball)

//Unshift - add single/multiple value to the start of the array
console.log();
console.log("==>UnShift");
ball.unshift("a","ab");
console.log("After the unshift : ",ball)

//concat - used to join one or more arrays together
console.log();
console.log("==>Concat");
let aa:string[]=["z","y"];
let result=ball.concat(aa);
console.log("After the Concat : ",result)

//slice - used to fetch the array value from one index to the required index it should be always +1 where system fetches requiredindex-1
console.log();
console.log("==>Slice");
//array["a","ab","b","c","d","e","f","g","h"]
let result1=ball.slice(1,4);
console.log("After the slice : ",result1)
result1=ball.slice(2,4);
console.log("After the slice : ",result1)
console.log("After the splice : ",ball)

//splice - add/remove array elements anywhere in the array
console.log();
console.log("==>Splice remove");
//array["a","ab","b","c","d","e","f","g","h"]
result1=ball.splice(1,2); // removes the mentioned index to required index position. start 1(ab) to splice till 2(b). so ab,b will be removed
console.log("After the splice : ",result1)
console.log("After the splice : ",ball)

console.log("==>Splice add");
//array["a","c","d","e","f","g","h"]
result1=ball.splice(1,0,"ab","b");//--->1 is starting index; 0 is no deletion,"ab","b" is value addition in the array after starting index
console.log("After the splice : ",result1)
console.log("After the splice : ",ball)

console.log();
console.log("==>Splice remove and add");
//array["a","ab","b","c","d","e","f","g","h"]
result1=ball.splice(1,1,"bb");//-->1 starting index, 1 is deletion,"bb" is value addition after the index 1
console.log("After the splice : ",result1)
console.log("After the splice : ",ball)

//indexof - used to identify the index of the particular value from the array/ to identify the index of particular value from given index
//return index or -1 if not exist
console.log();
console.log("==>IndexOf without starting index");
let num=ball.indexOf("bb"); //Return the index if exisits
console.log("The index of without required index : ",num)

console.log();
console.log("==>IndexOf with starting index");
num=ball.indexOf("bb",3);// identifying of element starts at index 3 so value not visible so it will return -1
console.log("The index of without required index : ",num)

//includes - to check where the value exist in the array/based on the index also returns boolean
console.log();
console.log("==>Includes without starting index");
let bol=ball.includes("a") //-->true as the value present in the array
console.log("The includes without required index : ",bol)

console.log();
console.log("==>Includes with starting index");
bol=ball.includes("a",1) //--> false due to starts checking element from the 1
console.log("The includes with required index : ",bol)

//toString - converts to string
console.log();
console.log("==>ToString");
let as=ball.toString();
console.log(as)