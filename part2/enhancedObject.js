//ENhanced object literals,they are set of enhancements to the syntax for definingobjects in javascript, it makes it more convenient and concise to define object properties and methods in javascript, it was also introduced ECMASCript 6 (ES6)

function user(name, age, work) {
    return{
        // name: name,
        // age: age,
        // work: work, // this is the es5 way of writing
        // intro(){
        //     console.log();
        // }
        name,
        age, // this is es6 way of enhanced Object literals
        work,
        intro: () =>{
            console.log(`my name is ${name} i am ${age} years old and i am a ${work}`);
        }
    }
    
}

const me = user("Praise", 21, "Ëngineer");
console.log(me.intro());

//class work

console.log("\n Class work")

// userGrade = (a,b,c) => {
//     return{
//         a,
//         b,
//         c,
//     }
// }

// console.log(userGrade(1,2,4));

let a = 1;
let b = 2;
let c = 3;

const obj = {a,b,c}

console.log(obj);


//2

//ES5  way of writing
// var lib = {
//     sum : function(a,b){
//         return a + b;
//     },

//     mult: function (a,b) {
//         return a * b;
//     },
// };

// console.log(lib.sum(2,3));
// console.log(lib.mult(2,3));


//ES5 way of writing
let lib = {
    sum: (a,b) => a + b,
    mult: (a,b)  => a * b,
};

console.log(lib.sum(2,3));
console.log(lib.mult(2,3));