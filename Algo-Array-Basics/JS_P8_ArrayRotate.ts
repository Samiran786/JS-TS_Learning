let arrRot = [10,20,30,40,50,60];
// need to rotate 3 time
let index_f:number = 0;
let index_l:number = arrRot.length-1;
let k_ = 7; //number of rotation
let rot = (k_%(arrRot.length));
function reverse(arr:number[], sp:number, ep:number):number[]{
    let sp1 = sp;
    let ep1 = ep;

    while(sp1<ep1){
    let temp:number = arr[sp1];
    arr[sp1] = arr[ep1];
    arr[ep1] = temp;
    sp1++;
    ep1--;
    }
    return arr;
}

reverse(arrRot,index_f,index_l);
console.log(arrRot);
reverse(arrRot,index_f,rot-1);
console.log(arrRot);
reverse(arrRot,rot,index_l);
console.log(arrRot); // final answer

// another process - 
// let k_:number = 3; //number of rotation
// let rot:number =  k_%(arrRot.length);
// let x:number = 0;

// while(x<rot){
//     let lastValue:number = arrRot.pop() || 0;
//     arrRot.unshift(lastValue);
//     x++;
// }
// console.log(arrRot);