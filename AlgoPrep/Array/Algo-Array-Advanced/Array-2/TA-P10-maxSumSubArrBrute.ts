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

// function maxNumFinderIndex(arr:number[]):number{
//     let max = arr[0];
//     for(let i of arr){
//         if(i>max){
//             max = i;
//         }
//     }
//     return arr.indexOf(max);
// }

// function minNumFinderIndex(arr:number[],limit:number):number{
//     let min = arr[0];
//     for (let i=1; i<limit+1; i++){
//         if(arr[i]<min){
//             min = arr[i];
//         }
//     }
//     return arr.indexOf(min);
// }

function prefixSumSubArr(arr:number[]):number[]{
    let pref:number[] = [arr[0]];
    for(let i=1; i<arr.length; i++){
        pref[i] = pref[i-1] + arr[i];
    }
    return pref;
}

function maxSumSubArr(arr:number[]):number{
    // let pref:number[] = prefixSumSubArr(arr);
    // // let maxNumIndex:number = maxNumFinderIndex(pref);
    // // let minNumIndex:number = minNumFinderIndex(pref,maxNumIndex);
    
    // let maxSumSubArrVal:number = pref[maxNumIndex] - pref[minNumIndex];

    // return maxSumSubArrVal;
    let prevPref:number = arr[0];
    let sv:number = 0;
    let lv:number = 0;
    let sum:number = 0;
    for(let i=1; i<arr.length; i++){
        let pref:number = prevPref + arr[i];
        console.log(`current pref: ${pref}`)
        if (pref<prevPref){
            sv = pref
            console.log(`Lowest value and previous pref : ${sv}`);
        }else{
            lv = pref;
            sum = lv - sv;
            console.log(`Sum : ${sum}`);
            
        }
        prevPref = pref;
    }
    return sum;
}

console.log(maxSumSubArr(arr_maxSub))

