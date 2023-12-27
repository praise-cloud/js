//functions

//function declaration
function sayHello(){
    console.log("Hello from a function");
}

// call, run, execue the function or invoke the function itself
sayHello();
// the value put inside the parnthesis are called the local variable that works only inside the function "parameters", they are only applicable to the function block only
//arguements is the input value of a paramenter

function hello(name) {
    console.log(`Hello ${name}`);
}

hello("praise");


//return statements

function returning(num1, num2){
    return num1 * num2;
}


//class work
console.log("\n Class work");

function myFunction(num1, num2){
    return num1 * num2;
}

console.log(myFunction(2,3));

//function declaration 
// function myFunction(num1, num2){
//     return num1 * num2;
// }

//function Expression, is storing a function inside a variable

const greetings = function(user){
    console.log(`Hello ${user}`);
}

greetings("Praise");

//call back function , when a function is an arguement to another function, the initial function is a call back function

function showCallFunction(fn){
    const value = 10;
    fn(value)
}

showCallFunction(function(value){
    console.log(value);
})

//another way, by seperatin gthe functions 
function greet(name, cb) {
    console.log(`Hello ${name}`);
    cb()
}

function cb(){
    console.log(`I am callback function`);
}

greet("Praise", cb);


// Class work
console.log("\nClass work");

function showCallFunc(fn){
    const value = 10;
    fn(value)
}

showCallFunc(function(value){
    console.log(value);
})

//scoope
//local variable is nly accessed inside a block{}
//global can be accessed outside of a block
