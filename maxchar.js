var x = 'abbba' ;
var y = {};
var maxKey = '';
for(var i = 0; i < x.length; i++)
{
    var key = x[i];
    if( ! y[key]){
     y[key] = 0;
    }
    y[key] ++;
    if(maxKey == '' || y[key] > y[maxKey]){
        maxKey = key;
    }
}

console.log(maxKey + ":" + y[maxKey]);
