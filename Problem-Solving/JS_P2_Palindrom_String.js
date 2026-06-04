let palindromString = 'Cadam';
function checkPalindrom(value){
    value = value.toLowerCase().replace(/\s/g, "");
    let reverse='';
    for(let i= value.length-1; i>=0; i--){
        reverse += value[i];
    }
    return value === reverse;
}

console.log(checkPalindrom(palindromString));