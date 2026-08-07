let arrRevGiv = [10,20,30,40,50,60,70]

// reverse from index 2 to 5
let index1:number = 2;
let index2:number = 5;

function arrRevSwapper(arr:number[], sp:number, ep:number): number[]{
    while(sp<ep){
    let temp:number = arr[sp];
    arr[sp] = arr[ep];
    arr[ep] = temp;
    sp++;
    ep--;
} return arr;
}

console.log(arrRevSwapper(arrRevGiv, index1,index2));