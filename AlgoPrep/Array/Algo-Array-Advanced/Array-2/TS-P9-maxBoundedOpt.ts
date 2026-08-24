/*
==================================================================================================================
Arrays2_BoundedMaximum - O(N) Time Complexity
Success rate: 32.96%

Given an integer array nums and two integers left and right, return the number of contiguous non-empty subarrays such that the value of the maximum array element in that subarray is in the range [left, right].

Input Format:
The first line contains an integer n (length of the array nums).
The second line contains n space-separated integers representing the elements of the array nums.
The third line contains two space-separated integers left and right.

Output Format:
A single integer representing the number of contiguous non-empty subarrays where the value of the maximum array element in that subarray is in the range [left, right].

Constraints:
1 <= nums.length <= 105
0 <= nums[i] <= 109
0 <= left <= right <= 109
Sample test cases
Input
5
2 9 2 5 6
2 8

5
2 1 4 3 5
2 4

Expected output
7

9

==================================================================================================================
*/

let arr_m1:number[] = [2, 9, 2, 5, 6];
let qury1:number[] = [2, 8];

let arr_m2:number[] = [2, 1, 4, 3, 5];
let qury2:number[] = [2, 4];

/*
we have 3 conditions
if
arr[ep]>endLimit
Then
ans = ans + 0;
underLimitIndex = ep + 1;
previousValidCount = 0;

ifElse
2<=arr[ep]<=8
Then
ans = ans + (ep-underLimitIndex+1);
previousValidCount = (ep-underLimitIndex+1)

Else
arr[ep]<startLimit
ans = ans + previousValidCount

 */

function boundMax(arr:number[], strtLimit:number, endLimit:number):number{
    let ans:number = 0;
    let underLimitIndex:number = 0;
    let previousValidCount:number = 0;
    for(let ep =0 ; ep<arr.length; ep++){
        if(arr[ep]>endLimit){
            ans = ans + 0;
            underLimitIndex = ep +1;
            previousValidCount = 0;
        }if(arr[ep] >= strtLimit && arr[ep] <= endLimit) {
            ans = ans + (ep - underLimitIndex +1);
            previousValidCount = ep - underLimitIndex + 1;
        } else{
            ans  = ans + previousValidCount;
        }
    }
    return ans;
}

console.log(boundMax(arr_m1, qury1[0], qury1[1]));
console.log(boundMax(arr_m2, qury2[0], qury2[1]));