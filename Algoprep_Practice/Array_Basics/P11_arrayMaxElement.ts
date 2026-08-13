let arr_max:number[] = [-4, -3, 7, 9, 7, 8, 9, -1, 11, 0];
let maxNum:number = arr_max[0];
for(let i of arr_max){
    if(i>maxNum){
        console.log(`element ${i} is greater than ${maxNum}`);
        maxNum = i;
        console.log(`hence max element now :  ${maxNum}`);
        
    }else{
        console.log(`element ${i} is not greater than ${maxNum}`);
    }
}

let counter_arr:number=0;
for(let i of arr_max){
    if(i<maxNum){
        counter_arr++;
    }
}

console.log(`Total ${counter_arr} elements have at least one element greater than themselves in the same array`);