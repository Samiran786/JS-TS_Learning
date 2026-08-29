/*
=====================================================================================
Arrays2_Max Sum Subarray - Kadans Algo  - O(N)
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
let arr_ka:number[] = [-2,1,-3,4,-1,2,1,-5,4];
let arr_ka1:number[] = [3,4,2,-14,16,-20,5];
function maxSumSubArrKadan(arr:number[]):number{
    let ans :number=0;
    let sum:number=0;
    for(let i=0; i<arr.length;i++){
        (sum>=0) ? sum +=arr[i] : sum = arr[i];
        (sum>ans) ? ans = sum : ans
    }
    return ans;
}
console.log(maxSumSubArrKadan(arr_ka));
console.log(maxSumSubArrKadan(arr_ka1));