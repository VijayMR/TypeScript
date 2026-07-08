//number
let a:number=2980;
console.log("Number :"+a);

//string
let b:String='Hello';
console.log("String :"+ b);

//Boolean
let c:boolean=false;
console.log("Boolean :" +c);

//array
let d: Array<Object> = [1, "Str"];
console.log("Array :"+d)

//tuple
let e:[String | any]=["Type", 10];// doubt
console.log("Tuple :"+e);

//enum
enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING"
}

let f: Status = Status.Active;
console.log(f); // "ACTIVE"

//Any
let g:any="hi";
g=10;
console.log("Any :"+g)

//Void//null//undefined----> ask



