let sampleArr: number[] = [10,20,30,50];
let sum: number= 0;
// for(let k of sampleArr){
//     sum +=k;
// }

for(let i:number=0; i<sampleArr.length; i++){
    sum+=sampleArr[i];
}
console.log(sum);