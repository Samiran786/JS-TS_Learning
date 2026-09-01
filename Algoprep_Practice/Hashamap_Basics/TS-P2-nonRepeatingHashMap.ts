/*
Find the first non-repeating element in a given array arr of N integers.
arr[5] = [-1, 2, -1, 3, 2]
*/

let arr:number[] = [-1, 2, -1, 3, 2]
let newHashMap = new Map<number,number>();

for(let i of arr){
    let val:number = newHashMap.get(i) ?? 0
    newHashMap.set(i,val+1);
}

// console.table(newHashMap);

for(let i=0; i<arr.length; i++){
    if(newHashMap.get(arr[i])===1){
        console.log(arr[i]);
    }
}