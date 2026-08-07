/* Print this when N=4
* * * *
* * * *
* * * *
* * * *
*/

const n=4;
let row="";
for(let i=0; i<n; i++){
    for(let k=0; k<n; k++){
        row = row + "* ";
    }
    console.log(row);
    row="";
}