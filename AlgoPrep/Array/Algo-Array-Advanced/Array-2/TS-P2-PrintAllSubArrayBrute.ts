// Print all the possible subarrays of given array - Solved by Brute force

let subArr2:number[] = [5,3,-1,8];

function subArrAll(arr:number[]):void{
    let subArr:number[] = [];
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            for(let k = i; k<=j; k++){
                subArr.push(arr[k]);
            }
            console.table(subArr);
            subArr = [];
            
        }
        
    }
}

subArrAll(subArr2);
