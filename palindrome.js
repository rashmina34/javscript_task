let x="aba";
let y="";
for(let i=x.length-1;i>=0;i--){
    let z=x[i];
    y+=z;
}
console.log(x===y);