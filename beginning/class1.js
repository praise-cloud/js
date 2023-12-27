// comparsion operators
// -> Relational operaturs
// == equality operator


// Relational operators
console.log(10 > 20);
console.log(10 < 20);
console.log(10 >= 20);
console.log(10 <= 20,"\n");

// === strict equality (checks type + value)
// !== strict non-equality (checks type + value)
// == lose equality (checks value only)
// != lose non-equality (checks value only)

console.log("Equality");
console.log(10 === 10);
console.log(10 !== "10");
console.log(10 == 10);
console.log(10 != 10);

// classWork
console.log("\nClass Work");

let firstFavNumb = 9;
let secondFavNumb = 9;
if(firstFavNumb > secondFavNumb){
    console.log(firstFavNumb + " is greater than " + secondFavNumb);
}else if(firstFavNumb < secondFavNumb){
    console.log(firstFavNumb + " is less than " + secondFavNumb);
}else if(firstFavNumb >= secondFavNumb){
    console.log(firstFavNumb + " is greater than or equal to " + secondFavNumb);
}else if(firstFavNumb <= secondFavNumb){
    console.log(firstFavNumb + " is less than or equal to " + secondFavNumb);
}else if(firstFavNumb === secondFavNumb){
    console.log(firstFavNumb + " is equal to " + secondFavNumb);
}else if(firstFavNumb !== secondFavNumb){
    console.log(firstFavNumb + " is not equal to " + secondFavNumb);
}else if(firstFavNumb == secondFavNumb){
    console.log(firstFavNumb + " is equal to " + secondFavNumb);
}else if(firstFavNumb != secondFavNumb){
    console.log(firstFavNumb + " is not equal to " + secondFavNumb);
}
