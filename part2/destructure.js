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
