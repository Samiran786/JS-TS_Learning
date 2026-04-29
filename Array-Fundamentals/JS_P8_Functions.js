// Create Function with name

function add(a,b){
    return a+b;
}
let sum = add(10,20);
console.log("The sum by function",sum);

// Create Anonymouse funcitons
//Syntax 1-
let sumAnon = function(a,b){
    return a*b;
}
console.log('The multiplication by anonymouse function',sumAnon(2,3));

//Syntax 2-
let sumAnon2 = (a,b)=>(a*b);
console.log('The multiplication by anonymouse function by pipe',sumAnon2(6,3));