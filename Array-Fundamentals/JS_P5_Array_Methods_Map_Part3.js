// using array.map - map the array for to multiply 2 with each element
//Syntax way - 1 -
let mapArrayExample = [23,45,21,66,98];
let mapedArray = mapArrayExample.map(function(i){
    return i = i*2;
});
console.log("Mapped array as per syntax 1",mapedArray);

//Syntax way - 2 -
let mapedArray2 = mapArrayExample.map((i)=>(i=i*2));
console.log("Fileterd array as per syntax 2",mapedArray2);

//Syntax way - 3 - without map method
let newMapArr = [];
for(let i=0;i<mapArrayExample.length;i++){
    const temp = mapArrayExample[i]*2;
    newMapArr.push(temp);
}
console.log("Without map method", newMapArr);
