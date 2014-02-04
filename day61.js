//Declare a variable called programming and set it to false. Then,
//write an if/else statement inside happy so that happy returns  
//true if programming is false and false otherwise.


var happy = function(programming) {
        return !programming;
};

// should print from function: 
// should return: false
console.log(happy(true));

// should print from function:
// should return: true
console.log(happy(false));

