//Find the occurence of element
let occString = 'Monday, Friday, Tuesday, Thursday, Saturday';
let eleIndex = occString.indexOf('day');
let count=0;
while(eleIndex !== -1){
    count++;
    eleIndex = occString.indexOf('day',eleIndex+1);
}
console.log('The count of day in the string :',count);