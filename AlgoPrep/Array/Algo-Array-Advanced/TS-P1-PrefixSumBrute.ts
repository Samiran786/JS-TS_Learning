let arr_pref:number[] = [4,1,6,-2,7]
let pref:number[] =[];

let sum_pref:number = 0;

for(let i=0; i<arr_pref.length; i++){
    if(i===0){
        sum_pref = arr_pref[i];
    }else{
        sum_pref += arr_pref[i];
    }
    pref.push(sum_pref);
}
console.log(pref);