// Given N array elements and Q queries on an array . for
// each query clalculate Sum of all etements in given range.

let arr_mul:number[] = [-2, 5, 1, 3, 4, 1, 7, -8, 2, 0];

let arr_qr:number[][] = [[3,8], [2,4], [0,3], [5,9], [6,6]];

function querySum(arr0:number[], arr1:number[][] ):number[]{
    let pref:number[]=[];
    let sum:number=0;
    for(let i=0; i<arr1.length; i++){
        for(let j=arr1[i][0]; j<=arr1[i][1]; j++ ){
            sum = sum+arr0[j];
        } 
        pref.push(sum);
        sum=0;
    }
    
    return pref;
}

console.log(querySum(arr_mul,arr_qr));