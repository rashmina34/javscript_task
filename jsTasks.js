// task1 Reverse a string

/*let ReverseStr = str => {
    let RevStr = "";
    for (let i = str.length-1 ; i >= 0 ; i--){
        RevStr += str[i];
    }
    return RevStr;
}*/
/********************************************** ***/
var x = "welcome";
var z = "";
for (let i = x.length - 1; i >= 0; i--) {
    var y = x[i];
    z += y; //concat the string 
}
console.log(z);




//Task2 Validate a palindrome String

/*let str = "abba";
let revstr = "";
for (let i = str.length-1; i >= 0 ; i--){
    revstr += str[i];
}
console.log(str === revstr);*/
/******************************************** */
function ISPalindrome(str){
    return str.split('').reverse().join('') === str;
}
console.log(ISPalindrome("aba"));



//Task3 Reverse an Integer

let integer = 123456;
let st = "";
let strint = integer.toString();
for (let i = strint.length-1 ; i >= 0 ; i--){
    st += strint[i];
}
let revint = parseInt(st , 10);
console.log(revint);

//Task4 Capitalize the first letter of every word

/*let capitalize_letter = (str) => {
    str = str.split(" ");
    for (let i = 0, x = str.length; i < x ; i++){
        str[i] = str[i][0].toUpperCase() + str[i].substr(1); //uppercase the first letter
    }
    return str.join(" ");
}
console.log(capitalize_letter("program in javascript"));*/

/***************************************************************** */

function capitalizeLetters(str) {
return str.replace(/\b[a-z]/gi, function (char) {
    return char.toUpperCase();
  });
}
console.log(capitalizeLetters("programmer loves research"));

//Task5 Max Character
// Return a character which is maximum in the word

var A = 'available' ;
var B = {};
var maxKey = '';
for(var i = 0; i < A.length; i++)
{
    var key = A[i];
    if( ! B[key]){
     B[key] = 0;
    }
    B[key] ++;
    if(maxKey == '' || B[key] > B[maxKey]){
        maxKey = key;
    }
}

console.log(maxKey + ":" + B[maxKey]);

//Task6 FIZZBUZZ

for (var c=1; c <= 100; c++) {
    if (c % 3 === 0) {	
    	  console.log('fizz');// provide output fizz if number is divisible by 3
    }
    else if (c % 5 === 0) {
        console.log('buzz');// provide output buzz if number id divisible by 5
    }
    console.log(c);
}


//Task7 Chunk Array

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

//Task8  Combination of all possible array

const powerSet = (array) => {
    let power = [];
    let total = Math.pow(2,array.length);
    for(let i=0; i<total; i++)
    {
        let temp = [];
       // converts in the binary form of two element as 00 01 10 11
        let num = i.toString(2); 
        while(num.length < array.length)
        {
            num = '0' + num;        }
        for (var b = 0; b < num.length; b++) 
        {
            if (num[b] === '1') 
            { 
                temp.push(array[b]);             }    
        }
        power.push(temp);
    }
    return power;
}
console.log(powerSet([1,2]));

//Task9 integer to string where eachstring are splited

let p = 1234;
let q = p.toString();
let r = [...q];
console.log(r);

