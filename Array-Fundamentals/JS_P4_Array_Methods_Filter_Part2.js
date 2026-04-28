// using array.filter - filter the array for even numebrs
//Syntax way - 1 -
let filterArrayExample = [23,45,21,66,98];
let fileteredArray = filterArrayExample.filter(function(i){
    if (i%2==0){
        return true;
    }
});
console.log("Fileterd array as per syntax 1",fileteredArray);

//Syntax way - 2 -
let fileteredArray2 = filterArrayExample.filter((i)=>(i%2==0));
console.log("Fileterd array as per syntax 2",fileteredArray2);

//Syntax way - 3 - without filter method
let newArr = [];
for(let i=0;i<filterArrayExample.length;i++){
    if((filterArrayExample[i]%2)==0){
        newArr.push(filterArrayExample[i]);
    }
}
console.log("Without filter method", newArr);
