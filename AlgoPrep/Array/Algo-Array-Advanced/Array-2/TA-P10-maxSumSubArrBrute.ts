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

let arr_maxSub:number[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSumSubArr(arr:number[]):number{
    let currentPrefSum:number = 0;
    let minimumPrefSum:number = 0;
    let candidate:number = 0;
    let ans:number = 0;
    for(let i=0; i<arr.length; i++){
        if(i===0){
            currentPrefSum = arr[0];
            minimumPrefSum = arr[0];
            candidate = arr[0];
            ans = candidate;
        }else{
            currentPrefSum += arr[i];
            candidate = currentPrefSum - minimumPrefSum;
            (currentPrefSum < minimumPrefSum) ? minimumPrefSum = currentPrefSum : minimumPrefSum ; 
        }
        if(candidate>ans){
            ans = candidate
        }
    }
    return ans;
}

console.log(maxSumSubArr(arr_maxSub));

