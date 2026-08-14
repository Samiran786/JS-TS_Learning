let arrRev:number[] = [10,20,30,40,50];
// let l:number=0;
// let j:number=1;
// while(l<(arrRev.length-j)){
//     let temp:number=arrRev[l];
//     arrRev[l]=arrRev[arrRev.length-j];
//     arrRev[arrRev.length-j]=temp;
//     l++;
//     j++
// }

//another process -
let l:number=0;
let j:number=(arrRev.length-1);
while(l<j){
    let temp:number=arrRev[l];
    arrRev[l]=arrRev[j];
    arrRev[j]=temp;
    l++;
    j--;
}

console.log(arrRev);