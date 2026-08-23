/*
==================================================================================================================
Arrays2_BoundedMaximum - O(N^2) Time Complexity
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

let arr_ma1:number[]=[2,1,4,3,5];

let arr_ma2:number[]=[2,9,2,5,6];

function maxBoundBrute1(arr:number[], strtR:number, endR:number):number{
    let counter:number=0;
    for(let strtP=0; strtP<arr.length; strtP++){
        let max:number=0;
        for(let endP=strtP; endP<arr.length; endP++){
            if(arr[endP]>max){
                max = arr[endP]
            }
            if(max >= strtR && max<=endR){
                counter++;
            }
            if(max>endR){
                break;
            }
        }
    }
    return counter;
}

console.log(maxBoundBrute1(arr_ma1,2,4));
console.log(maxBoundBrute1(arr_ma2,2,8));