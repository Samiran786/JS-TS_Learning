/*
=============================================================================================
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Input Format:
The first line contains an integer n, the size of the array.
The second line contains n space-separated integers representing the elements of the array nums.

Output Format:
A single line containing n space-separated integers representing the elements of the answer array.

Constraints:
2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Sample test cases

Input
4
1 2 3 4

Expected output
24 12 8 6 
=============================================================================================
 */

let arr_pr:number[] = [1,2,3,4];

function prefixProd(arr:number[]):number[]{
    let pref:number[] = [arr[0]];
    for(let i=1; i<arr.length; i++){
        pref[i] = pref[i-1] * arr[i];
    }
    return pref;
}

function arrSuffix(arr:number[]):number[]{
    let pref:number[] = prefixProd(arr);
    let suffix:number =1;
    for(let i=arr.length-1; i>=0; i--){
        (i===0) ? pref[i] = suffix : 
        pref[i] = pref[i-1] * suffix;
        suffix *= arr[i];
    }
    return pref
}

console.log(arrSuffix(arr_pr));

