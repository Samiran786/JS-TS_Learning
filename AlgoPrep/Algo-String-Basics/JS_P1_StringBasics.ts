let ex1:string = 'Algoprep';

console.log(ex1.charAt(0)); // 'A'
console.log(ex1.substring(0,4)); // sp - 0, ep- actualEndPoint+1

let ex2:string = 'AlgOpreP';
let trv:string='';
for(let i:number=0; i<ex2.length; i++){
    if(ex2[i].toLowerCase()===ex2[i]){
        trv += ex2[i].toUpperCase();
    }else{
        trv += ex2[i].toLowerCase();
    }
}
console.log(trv);
