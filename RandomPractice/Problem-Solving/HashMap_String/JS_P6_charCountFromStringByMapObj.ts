let charCount2:string = 'The String Input will be fun and fun';
let charSpliter:string[] = charCount2.split(/\s+/);

let charMapObj = new Map<string,{numOfChar:number,occurance:number}>();

for(let word of charSpliter){
    let occCount:number = 1
    if(charMapObj.has(word)){
        occCount++;
    }
    
    charMapObj.set(word,
        {
            numOfChar:word.length,
            occurance:occCount
        }
    );
}

console.table(charMapObj);