/*
Find the first non-repeating element in a given array arr of N integers.
arr[5] = [-1, 2, -1, 3, 2]
*/

let nonArr: number[] = [2, 8, 6, 9, 8, 6, 8, 2, 11];
let nonHashMap = new Map<number, number>();
for(let k of nonArr){
    let val = nonHashMap.get(k) ?? 0;
    nonHashMap.set(k,val+1);
}
console.log(nonHashMap);

for(let i:number=0; i<nonArr.length; i++){
    if(nonHashMap.get(nonArr[i])===1){
        console.log(nonArr[i]);
        break;
    }
}