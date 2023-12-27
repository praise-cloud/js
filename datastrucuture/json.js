//JSON javascript Object Notation, it is a lightweight data interchange format that makes it easy for humans to read and write and computers to parts and generate
// json  are also know to be objects

const person = {
    name: "Praise",
    age: 10,
    email: "praise@gmail.com",
    isSubscribe: true,
    hobbies: "Racing",
    address: {
        city: "New Yourk",
        idk: true
    }
}

//JSON.stringify() it will convert the object to a JSON string

console.log(JSON.stringify(person));
const jsonString = JSON.stringify(person);

const parsedObject = JSON.parse(jsonString)
console.log(parsedObject);