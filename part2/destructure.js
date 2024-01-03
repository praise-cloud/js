//Destructureing allows us to "unpack" values from a data-sturctures (Arrays, Objects) into seperate distinct Variables


// Array in destructuring
// if you have like thousands of item using barcket operation will not be efficent  

//getting data
const foo = ['one','two','three'];

// storing and destructuring the data
const[one] = foo;

//logging
console.log(one);

let a,b;
[a=5, b=8] = [];// we can assig a new value to the variable in the empty array
console.log(b);

function f() {
    return [1,2];
}

let x , y;
[x, y] = f();
console.log(x, y);

// how to ignore a value
function f() {
    return [1,2,3];
}

const [v, ,h] = f();
console.log(h, v);

//class work

const colors =['red', 'blue', 'green', 'yellow', 'orange'];


const [color1, color2, color3] = colors;
console.log(color1, color2, color3);


// in array destrucuting the other matter but the name don't, but in object destructuring the name don't matter but the other matter

// const student = {name: 'Praise',age : 14}
// const {name} = student;
// console.log(name);

// class work
const person = {
    name: "JOhn DOe",
    age : 30,
    gender : "male",
    country: "USA"
};

const {name, age, country} = person;
console.log(name, age, country);

//function destructure
function printPersonInfo({name, age, country}){
    console.log(`Name::${name}`);
    console.log(`age::${age}`);
    console.log(`Country::${country}`);
}

printPersonInfo(person)

//tenaray operator "?" it is a conditioon statement
const userMoney = true

const moneyChecker = userMoney === true ? "Buy some product": "They should bring  moeny";

console.log(moneyChecker);