/*
==============================================================================================
Given N array elements, Count no. of eguilibrium index.
An index i is said to be equilibaiun index
Sum of all the elements before the ith index = Sum of all the the elements after the ith index
===============================================================================================
*/

let arr_e:number[] = [1, 2, 3, 4, 3, 2, 1]; // 1 3 6 10 13 15 16 //1 == (16-3)

function prefixSumCal(arr:number[]):number[]{
    let pref:number[]  = [arr[0]];
    for(let i=1; i<arr.length; i++){
        pref[i] = pref[i-1] + arr[i];
    }
    return pref;
}

function equilibriumIndex(arr:number[]):number|null{
    let pref:number[] = prefixSumCal(arr);
    let ls:number = 0;
    let rs:number = 0;
    let ans:number|null = null;
    for(let i=0; i<arr.length; i++){
        (i===0) ? ls = 0 : ls = pref[i-1];
        (i===arr.length-1) ? rs = 0 : rs = pref[arr.length-1] - pref[i];
        if(ls === rs) {ans =  i; break } else{ ans = null}
    }
    return ans;
}

console.log(equilibriumIndex(arr_e));
