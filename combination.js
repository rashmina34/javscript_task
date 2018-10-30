let number=[1,2];
let comb=[];
for(let i=number.length;i>0;i--){
    comb.push([number[i],number[i+1]]);
    if(number[i+1]===null){
        alert('0');
    }
}
console.log(comb);
