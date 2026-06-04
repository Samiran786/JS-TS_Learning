function ArrSwapper(arr: number[]): number[]{
    let arrSwap = arr[0];
    arr[0]=arr[1];
    arr[1]=arrSwap;
    return arr;
}
let arrNew: number[]= [40,50];
console.log(ArrSwapper(arrNew));
