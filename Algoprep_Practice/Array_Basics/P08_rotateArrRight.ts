let rotter:number = 5;
let arr_rot:number[] = [1,2,3,4,5,6,7]; //6 7 1 2 3 4 5
let k:number = rotter % arr_rot.length;

function swapRot(arr:number[], sv:number, ev :number):void{
    let mid:number = arr[sv];
    arr[sv] = arr[ev];
    arr[ev] = mid;
}

function swapArrFunc(arr:number[], strtPnt:number, endPnt:number):number[]{
    while(strtPnt<endPnt){
        swapRot(arr, strtPnt, endPnt);
        strtPnt++;
        endPnt--;
    }
    return arr;
}

swapArrFunc(arr_rot, 0, arr_rot.length-1);
swapArrFunc(arr_rot, 0, k-1);
swapArrFunc(arr_rot, k, arr_rot.length-1);
console.log(`The rotated array : ${arr_rot}`);




