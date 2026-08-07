/*
Given number N=24, number of factors =8 -> 1,2,3,4,6,8,12,24
*/

let N: number=24;
let count: number=0;
let i: number=0;
while(i<=N){
    if(N % i===0){
        count++;
        console.log(i);
    }
    i++;
}
console.log(`The number of factors for ${N} :`,count);