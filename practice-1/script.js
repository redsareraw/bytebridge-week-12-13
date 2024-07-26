const doubleAge = (age) => age * 2;

const defaultParam = (a, b = 10) => a * b;

const addName = (firstName, lastName) => firstName + " " + lastName;

console.log(doubleAge(37));

console.log(defaultParam(3, 7));

console.log(addName("Derek", "Marshall"));