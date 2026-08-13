// need to find the count of values which have atleast 1 value greater than itself availble in the array
let arrExp:number[] = [-4,-3,7,9,7,8,9,-1,11,0]; // number is 9
//lets find the max value in this, all others will be small

let max:number = arrExp[0];
let cou:number= 0; 
for(let i:number=1; i<arrExp.length; i++){
    
    if (arrExp[i] > max) {
        max = arrExp[i];
    }

}
console.log(max)

for(let i:number=0; i<arrExp.length; i++){
    if(max===arrExp[i]){
        cou++;
    }
}
console.log(cou);
let res = (arrExp.length) - cou;
console.log(res);