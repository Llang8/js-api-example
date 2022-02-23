let myData = [
    {
        "firstName": "Lucas",
        "lastName": "Lang",
        "email": "lucasl@codingtemple.com",
    },
    {
        "firstName": "Derek",
        "lastName": "Hawkins",
        "email": "derekh@codingtemple.com",
    },
    {
        "firstName": "Joel",
        "lastName": "Carter",
        "email": "joelc@codingtemple.com",
    },
];

/* let newData = myData.map(function(info) {
    let statement = `Hello, my name is ${ info.firstName } ${ info.lastName } and my email address is ${ info.email }`;
    return statement;
});

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let squaredNums = nums.map(function(val) {
    return val**2;
});
// console.log(newData);
// console.log(squaredNums);
// myData.filter

let filteredNums = nums.filter(function(val) {
    return val%2 ==0;
});
// console.log(filteredNums);

let filteredPersons = myData.filter(function(person) {
    return person.email === 'joelc@codingtemple.com'
});

// console.log(filteredPersons)

let reducedNum = nums.reduce(function(x, y) {
    return x + y;
});
console.log(reducedNum); */


let nums = [1, 2, 3, 4, 7, 5, 6, 9, 8];
/* nums = nums.sort();
console.log(nums) */

myData = myData.sort((a, b) => {
    if (a.firstName > b.firstName) {
        return -1
    } else if (a.firstName < b.firstName) {
        return 1
    } else {
        return 0
    }
})
console.log(myData)