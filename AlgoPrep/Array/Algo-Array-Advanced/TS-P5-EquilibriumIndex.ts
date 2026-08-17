/*
==============================================================================================
Given N array elements, Count no. of eguilibrium index.
An index i is said to be equilibaiun index
Sum of all the elements before the ith index = Sum of all the the elements after the ith index
===============================================================================================
*/

let arr_eq:number[] = [1, 2, 3, 4, 3, 2, 1];

function prefSumCreat(arr:number[]):number[]{
    let pref:number[] = [arr[0]];
    for(let i=1; i<arr.length; i++){
        pref[i] = pref[i-1]+arr[i];
    }
    console.log(pref);
    return pref
}

function multyQueryCreate(arr:number[]):void{
    let pref:number[] = prefSumCreat(arr);
    let ls:number=0;
    let rs:number=0;
    for(let i=0; i<arr.length; i++){
        (i===0) ? ls = 0 : ls = pref[i-1]; 
        (i===arr.length-1) ? rs = 0 : rs = pref[arr.length-1] - pref[(i+1)-1];
         if (ls===rs) {
            console.log(`The equilibrium index is ${i}`);
        }
    }
}

multyQueryCreate(arr_eq);


