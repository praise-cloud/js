// datae and time objects

//date : year , Month , day, hours, minutes, seconds, milliseconds
const currentDate = new Date(20,3,23,18,45,7,56);
console.log(currentDate);

//extrate value
const date = new Date(); // giving the current date and time

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();

console.log(`Year: ${year}`);
console.log(`month: ${month}`);
console.log(`day: ${day}`);
console.log(`hours ${hours}`);
console.log(`minutes ${minutes}`);
console.log(`seconds ${seconds}`);
console.log(`milliseconds ${milliseconds}`);

//convert date o string
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());

date.setDate(date.getDate()+ 1); // add one day to date 
console.log(date);

//setInterval, it is used to repet function or specified kind of code in a specified interval, that after it stop running

setInterval(()=>console.log(`this fumction will be executed every 2 seconds.`), 2000);

//setTimeOut, it is used to execute a block of code after a specified amount of time