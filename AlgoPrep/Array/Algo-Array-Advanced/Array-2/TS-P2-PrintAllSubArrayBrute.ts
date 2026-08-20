// Print all the possible subarrays of given array - Solved by Brute force

let subArr2:number[] = [5,3,-1,8];

// Way 1- o(n^3) time complexity
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

//Way 2 - o(n^2) time complexity
function subArrAll2(arr:number[]):void{
    let counter:number=0;
    for(let i=0; i<arr.length; i++){
        let subArr:number[]=[]
        for(let j=i; j<arr.length; j++){
            //subArr.push(arr[j]);
            subArr[j] = arr[j]
            console.table(subArr);
            counter++;
        }
    }
    console.log(counter);
}

subArrAll2(subArr2);
