let arr2:number[]= [10,20,30,40,50];
function swapperByIndieces(arr:number[], ind1:number, ind2:number):number[]{
    let mid:number = arr[ind1];
    arr[ind1]  = arr[ind2];
    arr[ind2]= mid;
    return arr;
}
console.log(swapperByIndieces(arr2,1,4));