/*
print this when n=7
    * * * * _ * * * *
    * * * _ _ _ * * *
    * * _ _ _ _ _ * *
    * _ _ _ _ _ _ _ *
    * * _ _ _ _ _ * *
    * * * _ _ _ * * *
    * * * * _ * * * * 
*/

const n= 7;
let nSpc = 1;
let nStr = (Math.floor(n/2))+1;
let row="";
for (let i=0; i<n; i++){
    for (let j=0; j<nStr; j++){
        row = row+"* ";
    }
    for(let k=0; k<nSpc; k++){
        row  = row+"_ ";
    }
    for (let l=0; l<nStr; l++){
        row = row+"* ";
    }
    console.log(row);
    row="";
    if(i<Math.floor(n/2)){
        nStr--;
        nSpc+=2;
    }else{
        nStr++;
        nSpc-=2;
    }
}