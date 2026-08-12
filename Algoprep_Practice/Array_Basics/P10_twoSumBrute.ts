let arr_sum:number[] = [2, -1, 0, 3, 2, 5, 7];


function twoSumBrute(arr:number[], target:number):boolean{
    for(let i:number=0; i<arr_sum.length-1; i++){
        for (let j:number=i+1; j<arr_sum.length; j++){
            if(arr[i]+arr[j]===target){
                return true;
            }
        }
    }
    return false;
}

if(twoSumBrute(arr_sum,8)===true){
    console.log(`The values are present`);
}else{
    console.log(`The values are not matching`);
}