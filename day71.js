var list = function(thing) {
    for (var blah in thing) {
        //print firstName
        console.log(thing[blah].firstName);
    }
};

var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Zero",
        number: "(222) 888-9922",
        address: ["10 Game Street", "New York", "New York", "10034"]
    },
    steve: {
        firstName: "Steve",
        lastName: "Quattro",
        number: "(888) 222-0987",
        address: ["566 5th Avenue", "Brooklyn", "New York", "77112"]
    }
};

list(friends);
