let result= function(arr:number[],firstIndex:number,secondIndex:number):number[]{
    let temp:number = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp
    return arr;
}



let arrSwapInd: number[] = [11,12,13,14,15];
// swap the 1st index and 4th index values
console.log(result(arrSwapInd,1,4));