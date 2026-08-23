/*
Given N array elements and Q queries. 
For every query find frequency of element in array.
arr[9] = [2, 8, 6, 9, 8, 6, 8, 2, 11]
quary[4] = [2, 8, 3, 5]
output 
2
3
*/

let arr_fre:number[] = [2, 8, 6, 9, 8, 6, 8, 2, 11];
let quary_fre:number[] = [2, 8, 9, 6]

let hashMap1 = new Map<number,number>();

for(let i of quary_fre){
    let val:number = hashMap1.get(i) ?? 0;
    hashMap1.set(i,val);
}

for(let i of arr_fre){
    if(hashMap1.has(i)){
        let val:number = hashMap1.get(i) ?? 0;
        val++;
        hashMap1.set(i,val);
    }
}

for(let k of hashMap1.keys()){
    console.log(hashMap1.get(k));
}
