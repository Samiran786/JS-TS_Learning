// Object with function
let person = {
    firstname : 'Samiran',
    secondname : 'Banerjee',
    fullname : function(){
        return this.firstname+" "+this.secondname;
    }
};
console.log(person.fullname());