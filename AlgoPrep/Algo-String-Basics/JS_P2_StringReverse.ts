let ex3:string = 'AlgOpreP';

// Way 1 - 
 let newEx:string = '';
 for(let i:number=ex3.length-1; i>=0; i--){
    newEx += ex3[i];
 }
 console.log(newEx);

 //Way 2 - 
 let newEx1:string[] = ex3.split('');
 let sp = 0;
 let ep = newEx1.length-1;
 while(sp<ep){
    let temp = newEx1[sp];
    newEx1[sp] = newEx1[ep];
    newEx1[ep] = temp;
    sp++;
    ep--;
 }
 let newEx2:string = newEx1.join('');
 console.log(newEx2);

