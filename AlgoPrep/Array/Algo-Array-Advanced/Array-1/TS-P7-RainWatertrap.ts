/*
======================================================================================
Arrays1_TrappingRainWater
Success rate: 28.65%
Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it can trap after raining.

Input Format:
The first line contains an integer n, the number of bars.
The second line contains n space-separated non-negative integers representing the elevation map.

Output Format:
A single integer representing the total amount of water that can be trapped.

Constraints:
n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105

Sample test cases
Input
12
0 1 0 2 1 0 1 3 2 1 2 1

Expected output
6
=======================================================================================
*/

let arr_rain:number[] = [2, 1, 3, 2, 1, 2, 4, 3, 2, 1, 3, 1];

function prefMax(arr:number[]):number[]{
    let pref:number[] = [arr[0]];
    for(let i=1; i<arr.length; i++){
        if(pref[i-1]>=arr[i]){
            pref[i] = pref[i-1];
        }else{
            pref[i] = arr[i];
        }
    }
    return pref;
}

function suffMax(arr:number[]):number[]{
    let suff:number[] = [];
    suff[arr.length-1] = arr[arr.length-1];
    for(let i=arr.length-2; i>=0; i--){
        if(arr[i]>=suff[i+1]){
            suff[i]=arr[i];
        }else{
            suff[i] = suff[i+1];
        }
    }
    return suff;
}

function rainWaterTrap(arr:number[]):number{
    let pref:number[] = prefMax(arr);
    let suff:number[] = suffMax(arr);
    let lb:number=0;
    let rb:number=0;
    let fb:number =0;
    let wa:number=0;
    let counter:number=0;
    for(let i=1; i<arr.length-1; i++){
        lb = pref[i-1];
        rb = suff[i+1];
        (lb<=rb) ? fb = lb : fb = rb ;
        wa = fb - arr[i];
        if(wa>0){
            counter += wa;
        }
    }
    
    return counter;
}

console.log(rainWaterTrap(arr_rain));