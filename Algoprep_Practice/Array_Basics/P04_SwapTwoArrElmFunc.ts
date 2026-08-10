let swapArr:number[] = [30,40];
function ArraySwap(arr:number[]):number[]{
    let mid = arr[0];
    arr[0] = arr[1];
    arr[1] = mid;
    return arr;
}
console.log(`The swap version of the given array : `+ArraySwap(swapArr));