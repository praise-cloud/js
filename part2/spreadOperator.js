// Spread Opeartors, is a new addition to the set of opeartors in js ES6, it takes in an iterable (eg. array) and expands it into individual elements, it is used for shallow copies of js objects, it makes the code concised and enhances it's readability

//functions
 function giveMe4(a,b,c) {
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("c: ", c);
 }

 const colors = ['red', 'blue', 'green'];

 console.log(...colors);// the ... operator is what is spreading the elements into seperate items of the arrays

 //arrays
 const strNums = ['one', 'two', 'three'];
 const anotherStrNums = ['four', 'five', 'six'];
 const main = [...strNums, ...anotherStrNums]
 console.log(main);