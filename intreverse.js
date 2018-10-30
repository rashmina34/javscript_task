let x=12345678912;
let v="";
let y = x.toString();
console.log(y);
for(var i=y.length-1;i>=0;i--){
    let z=y[i];
    v+=z;
}
let w=parseInt(v,10);
console.log(w);