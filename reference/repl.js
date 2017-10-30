/*
 * JavaScript Crash Course
 * by Angus Lam <angushtlam@gmail.com> (http://angus.works)
 */
// Variable declarations and assignment
// JavaScript is cool because ending lines with semicolons is optional
// (but for the love of god please keep it consistent)

var x // x is declared
x = 'Hello World' // The string 'Hello World' is now assigned to x
console.log(x) // The Hello World

// Before we put more things in variables, lets learn about what are not things
x = null // Null
x = undefined // Undefined

// tldr use null in your code

// Variable types are implicit
var anotherOne = 'String' // Strings
var number = 101 // Number (You might know this as a double in other languages)
var anotherNumber = 123456789.123456789 // This is also a Number
var boolean = true // Boolean
var array = ['i', 'am', 'cse', 50] // Arrays (Python lists or Java ArrayLists)
var objects = { // Objects (Python dictionaries or Java HashMaps)
  'key': 'value',
  'apples': 'oranges',
}

// Functions
function helloWorldInAFunction() {
  console.log('Hello World in a function')
}

helloWorldInAFunction()

function addTwo(firstValue, secondValue) {
  console.log(firstValue + secondValue)
}

addTwo(1, 1336)
addTwo('1', 1336)
addTwo('1', '1336')
addTwo(false, 500) // False is 0

// Functions are values that can be assigned to variables too!
var functionVariable = function () {
  console.log('Hello World through a function stored in a variable')
}

functionVariable()

// More Operators
console.log(10 + 9) // => 19 (Addition
console.log(10 - 5) // => 5 (Subtraction)
console.log(5 * 3) // => 15 (Multiplication)
console.log(90 / 9) // => 10 (Division)

// Equality
console.log('The Same Thing' == 'The Same Thing') // Equality
console.log('The Same Thing' === 'The Same Thing') // Identity

console.log(true == 1) // => true
console.log(true === 1) // => false

// Basically, when in doubt, use ===

console.log(!false) // Not
console.log(true != 1) // Not equal
console.log(true !== 1) // Not identical

// Conditional Blocks
// If statements
if (true || false && true) {
  console.log('It happens.')
}

// Semicolons are not optional for classic for-loops!
for (var i = 0; i < 10; i++) {
  console.log('This is iteration #' + i + '.')
}

// Enhanced for-loops
var content = [
  'Angus',
  'Ricky',
  'Stephen',
  'Arthur',
]

for (var elem of content) {
  console.log(elem)
}

// While loops
var count = 0
while (true) {
  if (count > 3) {
    break
  }

  count++
}
console.log(count)