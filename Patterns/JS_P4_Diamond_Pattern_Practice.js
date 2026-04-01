/*
Print this pattern when n=5

        *
    *   *   *
*   *   *   *   *
    *   *   *
        *
 */

const n = 5;
let row = "";
let nStr = 1;
let nSpc = Math.floor(n/2);

for(let i=0; i<n; i++){
    for(let j=0; j<nSpc; j++){
        row = row+" ";
    }
    for(let k=0; k<nStr; k++){
        row = row +"*";
    }
    console.log(row);
    row="";
    if(i< Math.floor(n/2)){
        nStr = nStr+2;
        nSpc--;
    }else{
        nStr = nStr-2;
        nSpc++;
    }
}