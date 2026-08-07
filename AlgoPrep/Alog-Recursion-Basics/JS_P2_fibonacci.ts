let stV:number = 0;
let enV: number = 1;
let ite:number=8;
let trV = stV + enV; //1
let arr4:number[] = [stV,enV];
for(let i=1;i<ite-1; i++){
    let val:number = arr4[i]+arr4[i-1];
    arr4.push(val);
}
console.log(arr4);

//Way -2 -Recursion - 
function fino(n:number,ind:number):number[]{
        if(arr4.length>=n){
            return arr4;
        }
        arr4[ind+1] = arr4[ind]+arr4[ind-1];
        console.log(arr4);
        return fino(n,ind+1);
}
console.log(fino(8,1));