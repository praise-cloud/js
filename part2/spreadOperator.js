// Spread Opeartors, is a new addition to the set of opeartors in js ES6, it takes in an iterable (eg. array) and expands it into individual elements, it is used for shallow copies of js objects, it makes the code concised and enhances it's readability

//function with spread opeartor
 function giveMe4(a,b,c) {
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("c: ", c);
 }

 const colors = ['red', 'blue', 'green'];
 console.log(...colors);// the ... operator is what is spreading the elements into seperate items of the arrays


 //arrays with spread opeartor
 const strNums = ['one', 'two', 'three'];
 const anotherStrNums = ['four', 'five', 'six'];
 const main = [...strNums, ...anotherStrNums]
 console.log(main);

//
 //Object with spread operator
 const obj1 = {x:12, y:13, z:14};
 const obj2 = {h:12, f:13, k:14};
 const obj3 = {...obj1, ...obj2};// it tends to give you access inside the object
 const obj4 = {obj1, obj2};
 console.log(obj3);
 console.log(obj4);
 
 //class work
 console.log("\n Class work\n");

 // 1
 let arr = [1,2,3];
 let arr2 = [4,5];
 let arr3 = [...arr, ...arr2];
 console.log(arr3);

 const user ={
   name: "Jen",
   age: 22
 }

const clone ={...user, country : "Nigeria"};

console.log(clone);

//rest operator, it is a parameter syntax that allows a function to accept an indefinte number of arguements, as an array, providing a way to represent variadic functioons in js, and it hass to be the last in a paramenter list

// Variadic Functions are function that can recieve unlimited amount of parameters

function userProfile(x,...userData){
   console.log(x);
   console.log(userData);
}

userProfile("Praise", 19, "Programming", "football");

function person(firstName, lastName, ...Hobbies) {
   console.log("FIrst Name: ", firstName);
   console.log("Last Name: ", lastName);
   console.log("Hobbies: ", Hobbies);
}

person("Praise", "GEorgewill", "playing games", "Watching Animes", "Programming", "Studying");

// Class work
console.log("\n Class work \n");

//1
function unLimited(...limited){
   console.log(limited);
}

unLimited("GAMES", "FISH", "BOYS","Movies","laptops", "Money");

