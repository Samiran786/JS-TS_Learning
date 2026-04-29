let day = ' Saturday ';
console.log('The length of day',day.length);
console.log('The length of day',day.trim().length);

let subDay = day.slice(0,6);
console.log('The sub part of the day',subDay);
console.log('The type of sub part of the day',typeof(subDay));

let subDayArray = day.split('r');
console.log('The sub part of the sub day array',subDayArray);

// turning string to int or int to string
let day1 = '23';
let day2 = '27';

let calculation = parseInt(day2)-parseInt(day1);
console.log('The calculation :',calculation);
console.log("The type of calculation :",typeof(calculation));
console.log('String version of calculation :',calculation.toString());
console.log("The type of string calculation :",typeof(calculation.toString()));

let nameWithSpace = 'Goo d Morn ing';
let row='';
for(let e of nameWithSpace){
    if(e!==' '){
        row += e
        
    }
}
console.log('Name without spaces : ',row);

