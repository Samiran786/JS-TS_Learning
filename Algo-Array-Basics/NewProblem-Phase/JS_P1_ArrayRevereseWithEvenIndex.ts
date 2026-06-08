let expData:string = "Today is a good day"; // output should be : day doog a si Today (total string and odd elements should be reversed)
let expArr:string[] = expData.split(' ');
console.log(expArr);
function stringReverse(arr:string[], sp:number, ep:number):string[]{
    while(sp<ep){
        let temp = arr[sp];
        arr[sp] = arr[ep];
        arr[ep] = temp;
        sp++;
        ep--;
    }
    return arr;
}

console.log(stringReverse(expArr,0,expArr.length-1));

for(let i=1; i<expArr.length; i=i+2){
    let exp:string[] = expArr[i].split('');
    console.log(exp);
    stringReverse(exp,0,exp.length-1);
    let n:string = exp.join('');
    console.log(n);
    expArr[i] = n;
}


console.log(expArr);
console.log(expArr.join(' '));