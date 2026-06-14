/*
Given N array Integers, Calculate number of good integers. 
An element is said to be good integers, 
if {No. of element < element == element itself}

Note: Array elements are distinct.
*/
let goodIntArr: number[] = [-1,-4,3,5,-15,4];
let goodIntMap = new Map<number,number>();
let inc:number=0;
for(let i:number=0; i<goodIntArr.length; i++){
    for(let j:number=0; j<goodIntArr.length; j++){
        if(goodIntArr[i]>goodIntArr[j]){
            inc++;
        }
    }
    goodIntMap.set(goodIntArr[i],inc);
    inc=0;
}
console.log(goodIntMap);

let inc1:number=0;
for(let [key,value] of goodIntMap){
    if(key===value){
        inc1++;
    }
} 
console.log(inc1);