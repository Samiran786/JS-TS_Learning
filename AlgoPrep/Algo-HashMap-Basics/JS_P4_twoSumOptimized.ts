/*
Given an array Arr of N positive integers and another number X. Determine 
whether or not there exist two elements in Arr whose sum is exactly X.

arr[6] = [1, 4, 45, 6, 10, 8]
target = 16
*/

// Way -1 
let twoArr:number[] = [1, 4, 45, 6, 10, 8];
let target:number = 16;

let twoSumMap = new Map<number,number>();
let found:boolean=false;

for(let i:number=0; i<twoArr.length; i++){
    let diff: number = target - twoArr[i];

    if(twoSumMap.has(diff)){
        console.log('Y');
        console.log([twoSumMap.get(diff),i]);
        found=true;
        break;
    }else{
        twoSumMap.set(twoArr[i],i);
    }
}
console.log(twoSumMap);

// Only print 'N' if the loop finished without finding a pair
if (!found) {
    console.log('N');
}

// Way -2 - By function - 
function twoSumChecker(arr:number[], target:number):number[]{
    for(let i:number=0; i<arr.length; i++){
    let diff: number = target - arr[i];

        if(twoSumMap.has(diff)){
            console.log('Y');
            found=true;
            return [twoSumMap.get(diff) ?? 0,i] ;
            
        }else{
            twoSumMap.set(arr[i],i);
        }
    }
    return [];

}
console.log(twoSumChecker(twoArr,target));