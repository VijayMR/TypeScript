//class - It is a blue print where it has all the variable and methods stored in it.

class typescript{

    //Variables
    name:String;
    classed:number;
    age:number;
    absentToday:boolean;
    
    constructor(name: string);               //---->Function Overloading used in constructor: 1)write signature 2)write implementation 3)calling implementation
    constructor(name: string, classed: number);
    constructor(name: string, classed: number, age: number);


    //constructor
    constructor(name:string,classed?:number,age?:number){
        this.name=name;
        this.classed=classed ?? 0;
        this.age=age??0;
    }

    //method
    getNameAndclass():string|number{
        return `${this.name} is studying in class ${this.classed}`;
    }

    getage():number{
        return 1;
    }

    getTotalValue():String|number{
        return `${this.getNameAndclass()} , ${this.getage()} , "Success!!!"`
    }
    
}
 //object
    let classIs=new typescript("Madhu");
    console.log(classIs.getTotalValue());

    classIs=new typescript("Madhu",11,);
    console.log(classIs.getTotalValue());

    classIs=new typescript("Madhu",11,5);
    console.log(classIs.getTotalValue());