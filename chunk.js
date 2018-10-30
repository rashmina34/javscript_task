let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13];
let number=3;
function arraychunk(arr,number){
    const chunked=[];
     for(let i=0;i<arr.length;i++){
         let last=chunked[chunked.length-1];
         if(!last||last.length===number){
             chunked.push([i]);
         }
         else{
             last.push([i]);
         }
     }
return chunked;
}
console.log(arraychunk(arr,number));