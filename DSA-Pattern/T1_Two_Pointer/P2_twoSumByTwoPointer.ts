/* The problem statement is same as P1_twoSumByMap, we will solve it by two pointer
pattern
*/
let twoPointerArr:number[] = [2,7,11,15];
let target2:number = 9;


// not sorting the array, as per the problem statement, given array will be sorted


function twoPointerIndentifier(arr:number[], target:number):number[] | null{
    let fPointer = 0;
    let sPointer = arr.length-1;
    while (fPointer<sPointer){
        let total:number = arr[fPointer]+arr[sPointer];
        if(total>target){
            sPointer--;
        }else if(total<target){
            fPointer++;
        }else if(total===target){
            return([fPointer+1,sPointer+1]);
        }
    }
    return null;
}

console.log(twoPointerIndentifier(twoPointerArr,target2));