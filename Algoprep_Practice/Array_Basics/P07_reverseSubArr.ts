let arr4:number[] = [10,20,30,40,50,60];

function SubArrRev(arr:number[], startInd:number, endInd:number):number[]{
    while(startInd<endInd){
        swapSubArrRev(arr, startInd, endInd);
        startInd++;
        endInd--;
    }
    return arr;
}

function swapSubArrRev(arr:number[], ind1:number, ind2:number):void{
    let mid:number = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = mid;
}

console.log(SubArrRev(arr4,2,5));