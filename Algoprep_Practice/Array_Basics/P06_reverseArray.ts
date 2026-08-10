let arr3:number[] = [10,20,30,40,50];

function ArrayRev(arr:number[]):number[]{
    let sv:number =0;
    let ev:number= arr.length -1;
    while(sv<ev){
        swapArrRev(arr,sv,ev);
        sv++;
        ev--;
    }
    return arr;
}

function swapArrRev(arr:number[], ind1:number, ind2:number):number[]{
    let mid:number = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = mid;
    return arr;
}

console.log(ArrayRev(arr3));