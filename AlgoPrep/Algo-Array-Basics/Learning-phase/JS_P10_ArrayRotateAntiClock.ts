let arrAnti: number[] = [1,2,3,4,5];
// rotate 4 times anti clockwise
let k1:number=2;
let arr_len:number= arrAnti.length;
let rota = k1%arr_len;
function anticlockRotator (arr:number[], sp:number, ep:number): number[]{
    while(sp<ep){
        let temp:number = arr[sp];
        arr[sp] = arr [ep];
        arr[ep] = temp;
        sp++;
        ep--;
    }
    return arr
}

anticlockRotator(arrAnti, 0, (arr_len-1));
anticlockRotator(arrAnti, 0, ((arr_len-rota)-1));
console.log(anticlockRotator(arrAnti, (arr_len-rota), (arr_len-1) ));



