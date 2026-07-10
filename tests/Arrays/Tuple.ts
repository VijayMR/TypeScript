//Tuple
        //Fixed array in accordance with the datatype declared for a variable only those number of values can be assigned
        //Multiple datatypes can be declared for the variable which is an array
        //Order should be maintained

//Syntax
//======
            //let a:[string|number]=["Hello",101] ----->[string|number] - inaccordance with the datatype only we will be able 
            //                                                            to assign the value


console.log();
console.log("==>Tuple with 2 values as string and number")
let shoe:[string,number]=["Hello",101,];
console.log(shoe);
let shoeSocks:[string,number,boolean]=["Hello",101,true];
console.log(shoeSocks);

console.log();
console.log("==>Tuple with multiple datatypes and values")
let Socks:[string,number,boolean,number,string,boolean,number[]]=["Hello",101,true,102,"World",false,[101,102,103]];
console.log(Socks);

//Error:
//let ant:[string|number]=["Hello",101];//---Error due to the target datatype can be String or nuber but I gave two values so compile error
//let shoe:[string,number]=[101,"Hello"];//---Error due to change in the order datatype is string, number but value is number,string
//let shoe:[string,number]=["Hello",101,101];//---Error due to count of the datatype=2 and value declaratio=3;

console.log();
console.log("==>Tuple with traditional for loop");
let kl:[string,string]=["Hello","World"]
for(let i=0;i<kl.length;i++){
    console.log("The tuple values is :",kl[i])
}

console.log();
console.log("==>Tuple with for..in loop");
let kk:[string,string]=["Hello","World"]
for(let index in kk){
    console.log("For..in loop :: ",kk[index]);
}

console.log();
console.log("==>Tuple with for..of loop");
let kp:[string,string]=["Good","Morning"]
for(let value of kp){
    console.log("For..of loop :: ",value);
}

console.log();
console.log("Tupple array")
let ko:[string,number][]=[["My",201],["Coding",202],["Skill",203]]
for(let i=0;i<ko.length;i++){
    console.log(`The index ${i} value is `,ko[i]);
   let mn= ko[i];
   console.log(mn[0]);
   console.log(mn[1]);
}