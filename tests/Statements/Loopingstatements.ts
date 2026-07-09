console.log("=>While Loop")
let e:number=1;
while(e<=5){
    console.log(e);
    e++;
}
///////////////////////////////////
console.log("=>do....While Loop")
let d:number=1;
do{
    console.log(d);
    d++;
}while(d<=5)
///////////////////////////////////
console.log("=>For Loop")
let f:number;               //------>Global Variable
for(f=1;f<=10;f++){         //-------> initialisation done in the for loop for f
    console.log(f)
}
console.log(f);             //--------->So the value of f is considered for the global variable and o/p==> 11
///////////////////////////////////
console.log("=>For Loop with global initilisation")
let g:number=100;               //------>Global Variable
for(let g=1;g<=10;g++){      //-------> Re-initialisation done in the for loop for g
    console.log(g)
}
console.log(g);             //--------->So the value of f is considered for loop initialisation and o/p==> 100
///////////////////////////////////
console.log("=>For Loop without declaration")
let gg:number;               //------>Global Variable
for(let gg=1;gg<=10;gg++){      //-------> Re-initialisation done in the for loop for g
    console.log(gg)
}
//console.log(gg);             //--------->So the value of f is considered for loop initialisation and o/p==> undefined
///////////////////////////////////
console.log("=>Break and continue")
console.log("=>Break Keyword")
for (let i=1;i<=5;i++){
    if(i==5){
        console.log("The Value is 5 so breaking the for loop");
        break;     //-----------> So the break keyword is used it will print till 5 and loop would break;==> o/p==>1,2,3,4,
                    // The Value is 5 so breaking the for loop
    }
    console.log(i);
}
console.log("=>Continue Keyword")
for (let i=1;i<=10;i++){
    if(i==5){
        continue;     //-----------> So the continue keyword is used it will print skip 5 ;==> o/p==>1,2,3,4,6,7,8,9,10
    }
    console.log(i);
}
///////////////////////////////////