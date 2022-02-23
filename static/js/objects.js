var myObj = {
    "firstName": "Lucas",
    "lastName": "Lang",
    email: "lucasl@codingtemple.com",
    printInfo: function() {
        console.log(`${this.firstName} ${this.lastName} (${this.email})`)
    }
};

// console.log(myObj);
// object literal notation
// console.log(myObj["lastName"]);

// object dot notation
// console.log(myObj.firstName);
// console.log(myObj.email);

// myObj.printInfo();

// Object Constructor Function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = `${ this.firstName.toLowerCase() }${ this.lastName.toLowerCase()[0] }@codingtemple.com`;

    this.printInfo = function() {
        console.log(`${ this.firstName } ${ this.lastName } (${ this.email })`);
    }
}

var p1 = new Person('Derek', 'Hawkins');
p1.printInfo();