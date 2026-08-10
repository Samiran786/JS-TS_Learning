let x1:number = 2;
let y1:number = 5;

function swapper(a:number,b:number):void{
    let mid = a;
    a=b;
    b=mid;
    console.log(`the value if a ${a}`);
    console.log(`the value if b ${b}`);
}
swapper(x1,y1);