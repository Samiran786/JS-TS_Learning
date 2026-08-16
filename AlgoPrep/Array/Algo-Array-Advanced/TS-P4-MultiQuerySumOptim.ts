// OPtimized Given N array elements and Q queries on an array . for
// each query clalculate Sum of all etements in given range.

let arr_mu:number[] = [-2, 5, 1, 3, 4, 1, 7, -8, 2, 0];

let arr_q:number[][] = [[3,8], [2,4], [0,3], [5,9], [6,6]];

function prefSumOpt(arr:number[], arr1:number[][]):number[]{
    let pref:number[] = [arr[0]];
    for(let i=1; i<arr.length; i++){
        pref[i] = pref[i-1]+arr[i];
    }
    let result:number[]=[];
    
    for(let i=0; i<arr1.length; i++){
        let indL:number = arr1[i][0];
        let indR:number = arr1[i][1];
        if(indL===0){
            result[i] = pref[indR];
        }else{
            result[i] = pref[indR] - pref[indL-1];
        }
    }
    return result;
}

console.log(prefSumOpt(arr_mu, arr_q));