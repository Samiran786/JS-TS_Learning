//using array.reduce - reduce the array for summing up the value
//Syntax way - 1 -
let reduceArrayExample = [10,20,30,40,50];
let reducedArrayValue = reduceArrayExample.reduce(function(totalValue,value){
    return totalValue+value;
});
console.log("Reduced array value as per syntax 1",reducedArrayValue);

//reduce() is used to transform an array of strings into a single object 
// that shows how many times each string appears in the array
// Input : var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
//Output : 
 /*
 { 
    dog: 2, 
    chicken: 3, 
    cat: 1, 
    rabbit: 1 
 }
*/
let pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
let objects = pets.reduce(function(obj,pet){
    if(!obj[pet]){
        obj[pet]=1;
    }else{
        obj[pet]++;
    }
    return obj;
},{}) 
console.log("The object : ",objects);

// Doing the same problem without reduce method

let obj ={};
for(let i=0; i<pets.length;i++){
    if(!obj[pets[i]]){
        obj[pets[i]]=1;
    }else{
        obj[pets[i]]++;
    }
}
console.log("The object is :",obj);