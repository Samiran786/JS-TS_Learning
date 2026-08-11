let rot_lft:number = 5;
let arr_rotLft:number[] = [1,2,3,4,5,6,7]; // 7 6 5 4 3 2 1         4 5 6 7 1 2 3
let kLft:number = rot_lft % arr_rotLft.length;

function swapArrLft(arr:number[], sp:number, ep:number):void{
    let mid:number = arr[sp];
    arr[sp] = arr[ep];
    arr[ep] = mid;
}

function swapFunc(arr:number[], strtp:number, endp:number):number[]{
    while(strtp<endp){
        swapArrLft(arr,strtp,endp);
        strtp++;
        endp--;
    }
    return arr
}

swapFunc(arr_rotLft, 0, arr_rotLft.length-1);
swapFunc(arr_rotLft, 0, (arr_rotLft.length-1)-kLft)
swapFunc(arr_rotLft, ((arr_rotLft.length-1)-kLft)+1, (arr_rotLft.length-1) );

console.log(`The left rotated array : ${arr_rotLft}`);


