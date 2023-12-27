//objects they are a data structure that allows us to store data and tag them
// the tpye of an array is an object
const PERSON = {
    name: 'Praise ugochim', // name property
    age: 25,
    occupation: 'Developer'
};

console.log(PERSON.name); //dotted notation

console.log(PERSON["age"]); // barcket notation 
 // to add property

PERSON.location = "Earth";

console.log(PERSON); 

// delete PERSON.location; delet a property from an object

//class work

console.log("\n Class work")

const CAR ={
    type: "AMG engine",
    model: "2024 model, in the CLE",
    color: "Midnight Black"
};

console.log(typeof CAR);

// updating the object
CAR.type = "Toyota";

// adding a new property to the object
CAR.wheels = "Kilnes den jacks wheels";

console.log(CAR);


