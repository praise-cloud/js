// for oof loop is a modern way of iteration statement in ES6, that provides a concise and easy way to loop over elements in iterable objects like arrays, strings maps, sets and more. it helps you iterate over the values of the elements instead of dealing with there index.
//syntax for(variable of iterable){...}

let peoples = ['praime', 'Alex', 'james'];

for (let people of peoples){
    console.log(people);
}

const text = "Hello";

for (const character of text) {
    console.log(character, "\n");
}

//class work

const array1 = ["a", "b", "c"];

for (const letter of array1) {
    console.log(letter);
}