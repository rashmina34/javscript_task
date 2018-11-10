for (var x=1; x <= 100; x++) {
    if (x % 3 === 0) {	
    	  console.log('fizz');// provide output fizz if number is divisible by 3
    }
    else if (x % 5 === 0) {
        console.log('buzz');// provide output buzz if number id divisible by 5
    }
    console.log(x);
}