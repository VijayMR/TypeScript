class calculator{

    addition(x:number,...y:number[]):any{
        let sum=x;
        let total=0;
        for (let index = 0; index < y.length; index++) {
            let element:number= y[index];
            total=element+total;
        }
        return x+total;
    }

    subraction(x:number,y:number):number{
        return x-y;
    }

    multiplication(x:number,y:number):number{
        return x*y;
    }

     divisionForQuotient(x:number,y:number):number{
        return x/y;
    }

     divisionForRemainder(x:number,y:number):number{
        return x%y;
    }
}
let calc=new calculator();
console.log("Addition with one value : "+calc.addition(10));//with one value
console.log("Addition with two value : "+calc.addition(10,10));//with two values
console.log("Addition with multiple value : "+calc.addition(10,10,10,10,10));//with two values
console.log("Subtraction : "+calc.subraction(60,50));
console.log("Multiplication : "+calc.multiplication(9,8));
console.log("Division For Quotient : "+calc.divisionForQuotient(100,2));
console.log("Division For Remainder : "+calc.divisionForRemainder(3,2));