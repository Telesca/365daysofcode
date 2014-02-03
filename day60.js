//first exercise

var answer = prompt("What is your favorite U.S. city?");

switch(answer){
    case 'New York':
        alert("New York is the city that never sleeps.")
        break;
    case 'Paris':
        alert("Ah, the city of lights!")
        break;
    case 'New Orleans':
        alert("The food! The music!")
        break;
    default:
        alert("I don't think that city qualifies")
}

//logic operators
var hungry = true;
var foodHere = true;

var eat = function() {
  if (hungry && foodHere === true){
    return true;
  }
  else {
      return false;
  }
};

//exercise #3
// Declare your variables here!
var tired = true;
var bored = false;

var nap = function() {
  if (tired || bored == true){
      return true;
  }
  else {
      return false
  }
     
  
};
