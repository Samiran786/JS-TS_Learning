let arr_pref1:number[] = [4,1,6,-2,7]


function prefixSum(arr:number[]):number[]{
    let pref:number[] =[arr[0]];
    for(let i=1; i<arr.length; i++){
        pref[i] = pref[i-1] + arr[i];
    }
    return pref;
}

console.log(prefixSum(arr_pref1));