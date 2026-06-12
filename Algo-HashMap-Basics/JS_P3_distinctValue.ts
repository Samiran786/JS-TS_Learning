/*
Given an array arr[] of length N, The task is to count all distinct elements in arr[].
arr[6] = [10, 20, 20, 10, 30, 10]
*/

let disArr: number[] = [10, 20, 20, 10, 30, 10];
let disHashMap = new Map<number,number>();
for(let k of disArr){
    let val:number = disHashMap.get(k) ?? 0;
    disHashMap.set(k, val+1); 
}
console.log(disHashMap);
let cont:number = 0;
for(let k of disHashMap.keys()){
    cont++;
}
console.log(cont);

// Needs to refine this code with Set concept, also need to implement size method of Set/Hashmap