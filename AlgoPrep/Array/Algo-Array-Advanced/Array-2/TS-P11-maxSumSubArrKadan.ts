/*
=====================================================================================
Arrays2_Max Sum Subarray - O(n) - kadan's Algorithm
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

let arr_kad:number[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSumKad(arr:number[]):number{
    let currentVal:number = 0;
    let sum:number = 0;
    let ans:number = -Infinity;

    for(let i=0; i<arr.length; i++){
        currentVal = arr[i];
        if(sum>=0){
            sum += arr[i];
        }else{
            sum = arr[i];
        }
        if(sum>ans){
            ans = sum;
        }
    }
    return ans;
}

console.log(maxSumKad(arr_kad));