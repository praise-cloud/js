// String

let myString = "Hello World";
let myString2 = `Praise`;
console.log(myString , myString2);
console.log((myString + myString2).length);
console.log((myString + " " + myString2).toUpperCase());
console.log((myString +" " + myString2) .toLowerCase());
console.log(myString.concat(" ",myString2).slice(12,18));
console.log(myString.concat(" ",myString2).split(" "));
console.log(myString.concat(" ",myString2).split(" ").join("_"));
console.log(myString.concat(" ",myString2).includes("Praise"));
console.log(myString.concat(" ",myString2).trim()); // it removes the empty space
console.log(myString.concat(" ",myString2));

//append
myString += " its a new day";
console.log(myString);


// ``
let desc = `My name is praise
        and i am a software engineer's`
let full = `${desc} ${myString}`;
console.log(full.toUpperCase());

//classwork
console.log("\n Class work\n")

let favActorFirstName = 'John';
let favActorLasttName = 'George';
let fullName = favActorFirstName +" "+ favActorLasttName;//favActorFirstName.concat(" ",favActorLasttName)
console.log(fullName.toUpperCase());

let message = `My favorite Actor Is ${fullName} &`;
message += ` his best show is Silicon Valley.`
console.log(message.toUpperCase());

