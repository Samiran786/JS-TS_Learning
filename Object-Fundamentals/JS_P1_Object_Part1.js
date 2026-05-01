// Object syntax - 
let person = {
    firstname : 'Samiran',
    secondname : 'Banerjee'
};

console.log('The first name of the user :',person.firstname);
// printing the first name with different syntax
console.log('The first name of the user by diff syntax :',person['firstname']);
// modifing value of the existing key
person.firstname = 'Tiasha'
console.log('The modified first name :',person.firstname);
// adding new key-value in object
person.gender = 'male'
console.log("The modified object of the user :",person); 

//deleting a key-pair in the object
delete person.gender
console.log("The modified object of the user after delete:",person); 

//checking if key is available
if('gender' in person){
    console.log('The key is available');
}else{
    console.log('The key is not available');
}

// printing the values as per key by for loop
for(let key in person){
    console.log(person[key]);
}