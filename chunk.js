let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13];
//Number of Chunk we Wanted
let number = 3; 
//implementing arraw function
let arraychunk = (arr,number) => { 
    const chunked=[];
     for(let i=0 ; i < arr.length ; i++){
         let last = chunked[chunked.length-1];
           // check if last and last length of chunk is equal to chunked number or not
         if(!last || last.length === number){
             chunked.push([i]);
         }
         else{
             last.push([i]);
         }
     }
return chunked;
}
console.log(arraychunk(arr,number));