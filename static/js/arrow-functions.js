// function printSomething(aName)
// {
//     // string interpolation
//     console.log(`Hello, ${ aName }`);
// }
// printSomething('Derek');



// var printSomethingElse = function (anotherName)
// {
//     console.log(`Hello, ${ anotherName }`);
// }

// var printSomethingElse = (anotherName) => console.log(`Hello, ${ anotherName }`);
// printSomethingElse('Derek');

// var printSomethingElse = anotherName => console.log(`Hello, ${ anotherName }`);
// printSomethingElse('Derek');

// var printSomethingElse = (firstName, lastName) => console.log(`Hello, ${ firstName } ${ lastName }`);
// printSomethingElse('Derek', 'Hawkins');

// var printSomethingElse = (firstName, lastName) => { console.log(`Hello, ${ firstName }`); console.log(`${ lastName }`) };
// printSomethingElse('Derek', 'Hawkins');

// var printSomethingElse = (firstName, lastName) => { 
//     console.log(`Hello, ${ firstName }`); 
//     console.log(`${ lastName }`) 
// };
// printSomethingElse('Derek', 'Hawkins');


function Person(firstName, lastName)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = `${ this.firstName.toLowerCase() }${ this.lastName.toLowerCase()[ 0 ] }@codingtemple.com`;

    this.printInfo = () => console.log(`${ this.firstName } ${ this.lastName } (${ this.email })`);
}

var p1 = new Person('Derek', 'Hawkins');
p1.printInfo();