//methods are functions inside an object
//functons without name is an anonymous function

const person = {
    name: "praise",
    age: 20,
    sayHello: function(){
        console.log(`Hello ${this.name}`);
    }
}

console.log(person.sayHello());

//using the "this" keyword is to say that the current person object,  is what you are passing to that point

