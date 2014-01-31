laying = true;

var youHit = Math.random();

var damageThisRound = Math.floor(Math.random() * 5 + 1)

var totalDamage = 0

while(slaying){
    if (youHit = 1){
        console.log("You hit the dragon!");
        totalDamage += damageThisRound;
        if(totalDamage >= 4){
            console.log("You slayed the dragon!");
            slaying = false;
        }
        else{
            youHit = Math.random();
        }
    }
    else {
        console.log("The dragon defeated you!");
    }
    
    slaying = false;
    
}


