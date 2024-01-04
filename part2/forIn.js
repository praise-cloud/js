// the for in loop is used for itrating over enumerable properties of an object. you can use it toloop through kys of an object
// syntax for (let key in object){...}

let person = {
    name: 'John',
    age: 34,
    gender : "male"
}

for(let keys in person){
    console.log(keys, person[keys]);
}


// with array
let list = ['one', 'two', 'three'];

for (let index in list){
    console.log(`${index} ${list[index]}`);
}

//CLASS WORK

const object= {A: 1, B: 2, C:3};

for(let keys in object){
    console.log(keys, object[keys]);
}
