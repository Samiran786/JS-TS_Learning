let arrTwoSum:number[] = [2, -1, 0, 3, 2, 5, 7];

function arrTwoSumRes (arr:number[], sum:number):boolean{
    for(let i=0; i<(arr.length-1); i++){
        for(let j=i+1; j<(arr.length);j++){
            if (arr[i]+arr[j]===sum) {
                console.log(`two elements are:${arr[i]} and ${arr[j]}`);
                return true;
            }
        }

    }
    return false;
}

console.log(arrTwoSumRes(arrTwoSum,8));