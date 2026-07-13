//Class - Which is the blue print for the group of properties, methods, variables.

//Class
    /*
    -->read-only variables
    -->regular variables
    -->optional variables
    */

//Static -- It is a keyword and it is common for all the object.
//          It will not accept the keyword of **this** for calling the static variable or method

class sample{
    readonly name:string; //--->The value can be set only once through the constructor and cannot be chnaged once assigned.
    classes:number; //---> Regular property
    pass:boolean; // ----> optional property
    static height:number=34;

//  constructor(name:string,classes:number,pass?:boolean,height:number){ //Error- As the height is used after the optional parameter
    constructor(name:string,classes:number,pass?:boolean){      
            this.name=name;
            this.classes=classes;
            this.pass=pass ?? false;
            //this.height=height; //Error - As not able to fetch at the class level due to **static** keyword
    }

    Morning(){
        console.log("Say goodmorning!! ")
    }

    Afternoon(){
        console.log("Say goodafternoon!! ")
    }

    Evening(){
        console.log("Say goodevening!! ")
    }

    static night(){
        console.log("Goooooood night!!!!!!!!!")
    }

    allWishes():string{
        console.log(this.Morning());
        //console.log(this.height); //Error - As not able to fetch at the class level due to **static** keyword
        console.log(sample.height);
        //console.log(this.night);//Error - As not able to fetch method at the class level due to **static** keyword
         console.log(sample.night());
        return `${this.name} say ${this.classes} and say ${this.pass}`
    }

}

let ab=new sample("John",10,true)
console.log(ab.allWishes());
console.log(ab.pass);

console.log();
ab=new sample("John",10)//optional variable declaration
console.log(ab.allWishes());

console.log(ab.name);
console.log(ab.classes);
console.log(ab.pass);
//ab.name="viay"; //Error because it is a read-only variable..
ab.classes=12;
console.log(ab.classes);
