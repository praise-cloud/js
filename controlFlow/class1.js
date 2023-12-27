// control flow
let a = 10;
let b = 20;

//conditional statement
if(a > b){
    console.log(`a is greater than b`);
}else if(a < b){
    console.log("a is less than b")
}else{
    console.log("a is equal to b");
}

//classwork
console.log("\nClasswork")

let password = 10;
if(password === 8){
    console.log("Welcome");
}else if(password <= 8){
    console.log("password is too short");
}else if(password >= 8){
    console.log("Too long Password " + " and passowrd should be 8 characters")
}else{
    console.log("Please provide a password");
}