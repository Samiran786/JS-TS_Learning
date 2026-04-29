//To sort array by array.sort()
//Sorting the array of string values - 
let fruites = ['banana', 'apple', 'coconut', 'pomagranade', 'mango'];
let sortedFruites = fruites.sort();
console.log('Sorted array :',sortedFruites);

//Sorting the array of numeric values - 
let numbers = [10,20,50,40,30];
let sortedNumbers = numbers.sort((a,b)=>(a-b));
console.log('Sorted array of numeric values:',sortedNumbers);

//Reverse the sorted array - 
console.log('Reversed sorted array of string value :',sortedFruites.reverse());
console.log('Reversed sorted array of numeric value :',sortedNumbers.sort((a,b)=>(b-a)));