class Human {
    constructor(hair) {
        this.hair = hair
    }
}


class Person extends Human {
    constructor(hair, firstName, lastName) {
        super(hair);

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = `${ this.firstName.toLowerCase() }${ this.lastName.toLowerCase()[ 0 ] }@codingtemple.com`;
    }

    printInfo() {
        console.log(`${ this.firstName } ${ this.lastName } (${ this.email }) | Hair: ${this.hair}`);
    }

}

var p1 = new Person('Brown', 'Derek', 'Hawkins');
p1.printInfo();

// class Person:
//     def __init__(self, first_name, last_name):
//         self