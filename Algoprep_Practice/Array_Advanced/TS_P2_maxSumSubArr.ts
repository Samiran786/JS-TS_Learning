/*
=====================================================================================
Arrays2_Max Sum Subarray
Success rate: 46.39%

Given an integer array nums, find the subarray with the largest sum, and return its sum.

Input Format:
The first line contains an integer n (length of the array nums).
The second line contains n space-separated integers representing the elements of the array nums.

Output Format:
A single integer representing the sum of the subarray with the largest sum.

Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104

Sample test cases
Input
9
-2 1 -3 4 -1 2 1 -5 4

Expected output

6
=============================================================================================
 */

let arr_ms:number[] = [-2,1,-3,4,-1,2,1,-5,4]; // perfix -> -2,-1,-4,0,-1,1,2,-3,1
let arr_ms1:number[] = [3,4,2,-14,16,-20,5];

function maxSumSubArrPrefix(arr:number[]):number{
    let ans :number=0;
    let candidate:number=0;
    let sv:number=0;
    let pref:number=0;
    for(let i=0; i<arr.length;i++){
        pref +=arr[i];
        candidate = pref - sv;
        if(sv>pref){
            sv = pref;
        }
        if(candidate>ans){
            ans = candidate;
        }
    }
    return ans;
}

function maxSumSubArrKadan(arr:number[]):number{
    let ans :number=0;
    let currentVal:number=0;
    let sum=0;
    for(let i=0; i<arr.length;i++){
        currentVal = arr[i];
        if(ans>=0){
            ans +=currentVal;
        }else{
            ans = currentVal
        }
    }
    return ans;
}



// console.log(maxSumSubArrPrefix(arr_ms));
// console.log(maxSumSubArrPrefix(arr_ms1));
console.log(maxSumSubArrKadan(arr_ms));
console.log(maxSumSubArrKadan(arr_ms1));