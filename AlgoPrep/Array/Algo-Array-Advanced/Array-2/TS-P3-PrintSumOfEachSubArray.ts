// Print sum of each subarray - Brute force

let arr_esub:number[] = [5,3,-1,8];

function bruteForceSum(arr:number[]):void{
    
    for(let i=0; i<arr.length; i++){
        let sum:number = 0;
        for (let j=i; j<arr.length; j++){
            
            console.log(sum += arr[j]);
        }
    }
}

bruteForceSum(arr_esub);