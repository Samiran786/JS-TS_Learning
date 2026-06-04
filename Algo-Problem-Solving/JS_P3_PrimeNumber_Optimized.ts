let n : number= 22;
let coun: number =0;
for(let i=1; i*i<=n; i++){
    if(n%i===0){
        if(i*i===n){
            coun++;
        }else{
            coun+=2;
        }
    }
}
(coun<=2) ? console.log(`The number ${n} is prime`) : console.log(`The number ${n} is not prime`);