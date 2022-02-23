var myOtherList = [ 12, 56, 7, 334, 56, 8 ];
var firstName = "Lucas";

for (var i = 0; i < myOtherList.length; i++) 
{
    console.log((i + 1) + ": " + "" + myOtherList[ i ]);
}


// TYPE COERCION - JavaScript will TRY its best to figure out what you're doing (with certain things) and not throw an error
// == - compares ONLY the values
if(1 == "1") {
    console.log('Hello, ' + firstName + "!");
}

// === - compares BOTH the value AND the object/datatype
if(2 === "2") {
    console.log('Hello!');
}

var i = 1;
while(i <= 10) {
    console.log('Hello #' + i);
    i++;
}

var otherName = 'Girolamo';
switch (otherName) {
    case "Lang":
        console.log("What's up, Lucas!");
        break;
    case "Hawkins":
        console.log("Is your name Derek?");
        break;
    default:
        console.log("Not sure who you are.");
}

if(otherName === "Patel") {
    console.log('Hey! Nice company!')
}
else if(otherName === "Girolamo") {
    console.log("You're doing great!")
}
else {
    console.log("Who are you?")
}


var idx = 10;
console.log('Ready for takeoff!')
do {
    console.log(idx);
    idx--;
}
while( idx >= 1 )
console.log('Blastoff!')

try {
    console.log(myOther);
} catch (err) {
    console.log("Hey, that's an invalid operation");
    console.log(err)
}