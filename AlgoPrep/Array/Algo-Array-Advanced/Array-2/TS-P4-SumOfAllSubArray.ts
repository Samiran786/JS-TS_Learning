/*
======================================================================================
Arrays2_SumofSubarrays
Success rate: 37.86%
Given an array A with N elements , you need to find the sum all sub arrays of array A.

Input Format:
First line contains size of the array
Second line contains the elements of the array

Output Format:
Print the Sum of Subarray using Contribution technique.

Constraints:
1 ≤ N ≤ 10^3
1 ≤ A[i] ≤ 10^3

Sample test cases
Input
4
5 3 -1 8

Expected output
64
=======================================================================
*/

let arr_sub1:number[] = [5,3,-1,8];

function sumAllSubArr(arr:number[]):number{
    let sum:number=0;
    let arrLength:number = arr.length;
    for(let i=0; i<arrLength; i++){
        sum += ((arr[i]*(arrLength-i))*(i+1));
    }
    return sum;
}

console.log(sumAllSubArr(arr_sub1));