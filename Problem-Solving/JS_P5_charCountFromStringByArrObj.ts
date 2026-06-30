// The number of characters in each word of given string by Array Object
let charCount1:string = 'The String Input will be fun';
let charCountArr1:string[] = charCount1.split(' ');
let charCountArrObj : {word:string, count:number}[] = [];
for(let word of charCountArr1){
    charCountArrObj.push({
        word:word,
        count:word.length
    });
}
console.table(charCountArrObj);