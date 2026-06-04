let palindromNum = 121;
function checkPalindromNum(value){
    let original = value;
    let reverse=0;
    while (value>0){
        let lastDigit = value % 10;
        reverse = (reverse * 10) + lastDigit;
        value = parseInt(value/10);
    }
}