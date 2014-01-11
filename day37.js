//codecademy exercise


var text = "hello hello jenna hello hello jenna";

var myName = "jenna";

var hits = [];

for (var i = 0; i < text.length; i++) {
    if (text[i] === "j") {
        for (var j = 0; j < myName.length; j++) {
            hits.push(text[i+j]);
        }
    }
    
}
console.log(hits);