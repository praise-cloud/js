//type conversion
let money = "50";
console.log(typeof money);

// convert
money = parseInt(money)
// money = +money // this is another way to turn it to a number
// money = Number(money); // another way to convert to number, number consturctor
console.log(typeof money);

let myMoney = 34;
myMoney = myMoney.toString(); // method
myMoney = String(myMoney) // another way to string ,string consturctor
console.log(typeof myMoney)

let num = "80.909";
num = parseFloat(num);
console.log(typeof num);