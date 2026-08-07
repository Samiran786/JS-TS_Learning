let mArr:number[] = [0,1,2,0,3];

let newArr:number[]=[];
let temp:number[]=[];

for(let i of mArr){
    if(i!==0){
        newArr.push(i);
    }else{
        temp.push(i);
    }
}
console.log([...newArr,...temp]);

// diff approach

// function reverser(sp:number, ep:number){
//     let temp = sp;
//     sp = ep;
//     ep = temp;
    
// }
for(let i=0; i<mArr.length-1; i++){

    if(mArr[i]===0){
        let temp = mArr[i];
        mArr[i] = mArr[i+1];
        mArr[i+1] = temp
    }
}
console.log(mArr);



