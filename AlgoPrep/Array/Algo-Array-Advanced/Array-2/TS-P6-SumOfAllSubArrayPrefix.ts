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

let arr_sub2:number[] = [5,3,-1,8];

function prefSumArr(arr:number[]):number[]{
    let pref:number[] = [arr[0]];
    for(let i=1; i<arr.length; i++){
        pref[i] = pref[i-1] + arr[i];
    }
    return pref;
}
function sumAllSubArrPref(arr:number[]):number{
    let sum:number=0;
    let pref:number[] = prefSumArr(arr);
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            if(i===0){
                sum+=pref[j];
            }else{
            sum += pref[j] - pref[i-1];
            }
        }
    }
    return sum;
}

console.log(sumAllSubArrPref(arr_sub2));