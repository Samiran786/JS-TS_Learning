/*
==================================================================================================================
Arrays2_BoundedMaximum
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

let arr_m3:number[] = [2, 9, 2, 5, 6];
let qury3:number[] = [2, 8];

let arr_m4:number[] = [2, 1, 4, 3, 5];
let qury4:number[] = [2, 4];

function arrboundMax(arr:number[], qrArr:number[]):number{
    let ans:number=0;
    let prevValidCount:number  =0;
    let lastValidEndPoint:number = 0;
    let count:number=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>qrArr[1]){
            ans = ans+0;
            prevValidCount =0;
            lastValidEndPoint=i+1;
            count=0;
            console.log('answer when element is big '+ans);
        }else if(arr[i]>=qrArr[0] && arr[i]<=qrArr[1]){
            ans  = ans + (i-lastValidEndPoint+1);
            prevValidCount = i-lastValidEndPoint+1;
            console.log('answer when element is in range '+ans);
        }else{
            ans  = ans + prevValidCount
            console.log('answer when element is small '+ans);
        }
    }
    return ans;
}

console.log(arrboundMax(arr_m4,qury4));