// Print sum of each subarray - using prefix sum


let arr_esub1:number[] = [5,3,-1,8];

function prefixSumArr(arr:number[]):number[]{
    let pref:number[] = [arr[0]];
    for(let i=1; i<arr.length; i++){
        pref[i] = pref[i-1] + arr[i];
    }
    return pref; // [5,8,7,15]
}

function sumOfEachArr(arr:number[]):void{
    let pref:number[] = prefixSumArr(arr);
    for(let strtP=0; strtP<arr.length; strtP++){
        let sum:number=0;
        for(let endP=strtP; endP<arr.length; endP++){
            if(strtP===0){
                console.log(pref[endP]);
            }else{
                console.log(pref[endP]-pref[strtP-1]);
            }
        }
        
    }
}

sumOfEachArr(arr_esub1);