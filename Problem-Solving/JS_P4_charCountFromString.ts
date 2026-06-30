//the number of characters in each word of given string by map
let charCount:string = 'The String Input will be fun';
let charCountArr:string[] = charCount.split(/\s+/);
console.log(charCountArr);
let count:number=0;
let charCountMap = new Map<string,number>();
for(let i=0; i<charCountArr.length;i++){
    count = charCountArr[i].length;
    if(!charCountMap.has(charCountArr[i])){
        charCountMap.set(charCountArr[i],count);
    }
}
console.log(charCountMap);

