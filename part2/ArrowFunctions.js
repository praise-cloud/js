//arrow functions, they are more a defined waty to create a concise and shorter function, they where introduced in ECMAscript 6 (ES6)

greet = () =>{
    return `hELLO WORLD`;
}

console.log(greet());

greeting = userName => `Hello ${userName}`;

console.log(greeting("praise"));

double = number => number * 2;

console.log(double(5));

//class work

setTimeout(() =>{
    console.log("Hello");
    setTimeout(() =>{
        console.log("Hey");
        setTimeout(() =>{
            console.log("Namaste");
            setTimeout(() =>{
                console.log("Hi");
                setTimeout(() =>{
                    console.log("Bonjour");
                }, 2000);
            }, 2000)
        }, 2000)
    }, 2000)
},2000)
