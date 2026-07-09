console.log("=>If conditional statment");
let a:number=10;
if(a>5){
    console.log("Working as expected");
}
/////////////////////////////////////////////
console.log("=>If & else conditional statment");
let b:number=5;
if(b>5){
    console.log("Expected Value is 5");
}
else{
    console.log("Expected Value did not appear")
}
//////////////////////////////////////////////
console.log("=>If , else if , else conditional statment");
let c:number=5;
if(c>5){
    console.log("Expected Value is 5");
}
else if(c=5){
console.log("Exactly matched the same value 5")
}
else{
    console.log("Expected Value did not appear")
}
//////////////////////////////////////////////
console.log("=> Switch cases")
let val:string="Car";
switch(val){
    case "bike":
        console.log("It is bike");
        break;
    
    case "Car":
        console.log("It is Car");
        break;

    default:
        console.log("It is Vehicle");
}
/////////////////////////////////////////////