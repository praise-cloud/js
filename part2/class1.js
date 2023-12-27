//Template strings, also known as template literals, they enable you to creat strings with embedded expressions. they are denoted by ``(Backticks). Template provides more flexibility and concise way to construct strings, especially when they involve variables or expressions.

console.log(`this is some tempalte`);

//exppressions
console.log(`${2+2}`);
// ${} stands as a placeholder, and any thing can be inside the placeholder

//class work


let tempalte = `The quick
                brown fox
                jumps over
                the lazy dog`;
    
let firstName = 'praise';
let lastName = 'vein';

console.log(`${firstName} ${tempalte} ${lastName}`)