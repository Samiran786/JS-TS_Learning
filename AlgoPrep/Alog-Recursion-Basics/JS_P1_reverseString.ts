let revRecStr: string= 'Samiran';
 let arr:string[] = revRecStr.split('');
function revRec(arr:string[], sp:number, ep:number):string[]{
    
    if(sp>=ep){
        return arr;
    }
    let temp:string = arr[sp];
    arr[sp] = arr[ep];
    arr[ep] = temp;
    // console.log(arr);
    return revRec(arr,sp+1,ep-1);
}

console.log((revRec(arr,0,arr.length-1)).join(''));