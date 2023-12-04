## What are features of ES6 ?

ECMAScript 2015 (ES6) introduced a significant set of new features and improvements to
the JavaScript language. Some of the key features of ES6 include:

1> let and const Declarations:
let allows you to declare block-scoped variables.
const is used to declare constants.

2>Arrow Functions:
A more concise syntax for writing function expressions.

3>Template Literals:
A new way to work with strings using backticks (`).

const name = 'John';
const greeting = `Hello, ${name}!`;

4> Destructuring Assignment:
An expressive syntax to extract values from objects and arrays.

const person = { name: 'John', age: 30 };
const { name, age } = person;

5> Default Parameters:
Allows you to set default values for function parameters.

function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}


6> Rest and Spread Operators:
The rest operator (...) allows you to represent an indefinite number of arguments as an array.
The spread operator (...) allows you to spread elements of an array or object into another array or object.

// Rest operator
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];


// Rest operator
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];


7> Classes:
A more convenient syntax for creating constructor functions and dealing with inheritance.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}


8> Promises:
A built-in mechanism for handling asynchronous operations, making it more manageable than using callbacks.

const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Async operation
    if (/* operation is successful */) {
      resolve(result);
    } else {
      reject(error);
    }
  });
};


9> Modules:
A way to organize code into reusable and maintainable files.

// Exporting module
export const myFunction = () => {
  // ...
};

// Importing module
import { myFunction } from './myModule';


10> Map and Set:
New data structures that provide alternatives to arrays and objects for certain use cases.

// Map
const myMap = new Map();
myMap.set('key', 'value');
console.log(myMap.get('key')); // Outputs: 'value'

// Set
const mySet = new Set([1, 2, 3, 3, 4]);
console.log(mySet); // Outputs: Set { 1, 2, 3, 4 }

------------------------------------------------------------------------------------------------------------------------------

## What are features of ECMAScript 2016 (ES7) ?

1> Array.prototype.includes:
This method checks if an array includes a certain element, returning true or false accordingly.

const array = [1, 2, 3, 4, 5];
console.log(array.includes(3)); // Outputs: true

2> Exponentiation Operator (**):
An operator for exponentiation.

// ES6
const square = Math.pow(2, 2);

// ES7
const square = 2 ** 2;

------------------------------------------------------------------------------------------------------------------------------

## What are features of ECMAScript 2017 (ES8) ?

1> Async Functions:
The async and await keywords provide a cleaner way to work with asynchronous code.

async function fetchData() {
  let result = await fetch('https://api.example.com/data');
  console.log(result);
}


2> Object.values / Object.entries:
Methods for retrieving the values or entries of an object.

const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // Outputs: [1, 2, 3]
console.log(Object.entries(obj)); // Outputs: [['a', 1], ['b', 2], ['c', 3]]


3> String Padding:
The String.prototype.padStart and String.prototype.padEnd methods allow you to pad a string with
a specified character to a certain length.

const paddedString = '5'.padStart(4, '0');
console.log(paddedString); // Outputs: '0005'


------------------------------------------------------------------------------------------------------------------------------

## What are features of ECMAScript 2018 (ES9) ?

Promise.finally:
The finally method for promises, which allows you to specify a function to be executed when the promise is settled.

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log('Completed'));

The finally block is useful for tasks that need to be performed irrespective of the Promise's outcome, such as cleaning up resources, closing connections, or logging.



------------------------------------------------------------------------------------------------------------------------------




