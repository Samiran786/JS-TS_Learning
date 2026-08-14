/*
Given n length array "arr". 
Find the pair with maximum value of arr[i] - arr[j]. 
You need to print max value of (arr[i] - arr[j]) possible and not the (i,j) itself.
 */
let arr1:string = '3 2 8 4 1 9';
let strInp:string[] = arr1.split(' ');// ['3', '9', '8', '4', '1']
let inpArr:number[]=[];
for(let i of strInp){
    inpArr.push(Number.parseInt(i));
}
console.log(inpArr); // [3, 2, 8, 4, 1, 9]

function maxFinder(arr:number[],param:string):number{
    let mm:number = arr[0];
    for(let i of arr){
        if(param==='max'){
            if(i>mm){
                mm = i;
                console.log('max number',mm);
            }
        }else if(param==='min'){
            if(i<mm){
                mm = i;
                console.log('min number',mm);
            }
        }else{
            console.log('invalid condition');
        }
            
    }
    return mm;
}
let maxValue:number  = maxFinder(inpArr,'max');
console.log(maxValue);
let minValue:number  = maxFinder(inpArr,'min');
console.log(minValue);
console.log(maxValue - minValue);
