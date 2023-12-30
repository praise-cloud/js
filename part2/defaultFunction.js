// DefaultFunction parameter, allows you to assign default values to function parameters. When a function is called, and an arguement is not provided for a parameter, the default value will be used instead.This is feature makes it easier to handle cases where arguements might be missing or undefined, still intro in ES6

function countTo5(count = false){
    if(count === true){
        for(let i = 1; i <= 5; i++){
            console.log(`Count: ${i}`);
        }
    }
}
countTo5(true); 

//class work

// function multiply(a, b = 1) {
//     return a * b;
// }
// console.log(multiply(2));   

multiply = (a, b = 1) => a * b;// this is a function to multiply a and b
console.log(multiply(2));

