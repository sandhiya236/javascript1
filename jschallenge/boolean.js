//Understanding Javascript Booleans
let isOnSale = true;
console.log(isOnSale);
isOnSale = false;
console.log(isOnSale);

let isOnSale = false;
console.log(isOnSale);
isOnSale = true;
console.log(isOnSale);

//Assign boolean to a variable
let isTrue;
isTrue = true;
console.log(isTrue);

//Truthy and Falsy in JavaScript
console.log(Boolean(100));

console.log(Boolean(100));
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-5));

const price = 10;
console.log(Boolean(price));

let price;
console.log(Boolean(price)); //ans :false

//convert number to boolean
let num = 5;
num = 0;
const bool = Boolean(num);
console.log(bool);     //false