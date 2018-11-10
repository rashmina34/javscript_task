const powerSet = (array) => {
    let power = [];
    let total = Math.pow(2,array.length);
    for(let i=0; i<total; i++)
    {
        let temp = [];
        let num = i.toString(2); // converts in the binary form of two element as 00 01 10 11
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

