/*
Given N array elements and Q queries. 
For every query find frequency of element in array.
arr[19] = [2, 8, 6, 9, 8, 6, 8, 2, 11]
quary[4] = [2, 8, 3, 5]
output 
2
3
*/

let hasArr:number[]=  [2, 8, 6, 9, 8, 6, 8, 2, 11];
let quary:number[] = [2, 8];
let hashMap = new Map<number,number>();

for(let k of quary){
    let val:number = hashMap.get(k) ?? 0;
    hashMap.set(k,val);
}

for(let k of hasArr){
    if(hashMap.has(k)){
        let val:number = hashMap.get(k) ?? 0;
        val++;
        hashMap.set(k,val);
    }
}
for(let k of hashMap.keys()){
    console.log(hashMap.get(k));
}
