let a: number= 36;
let counter: number=0;
let arr: number[] =[];
for(let i:number =1; i*i<=a; i++){
    if(a%i===0){
        if(i*i===a){
            counter++;
        }else{
            counter= counter+2;
        }
        arr.push(i);
    }
}
console.log(`The number of factors of ${a}:`,counter);
console.log(`The factors of ${a}:`,arr);
