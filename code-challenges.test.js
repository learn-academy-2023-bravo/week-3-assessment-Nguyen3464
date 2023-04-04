// // ASSESSMENT 3: Coding Practical Questions with Jest

// // const { describe } = require("yargs")

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// // a) Create a test with expect statements for each of the variables provided.

// // Fibonacci Sequence: Is a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8,  the length of the array will be the length of your input

describe("defibrillator", () => {
  const fibLength1 = 6
  // Expected output: [1, 1, 2, 3, 5, 8]
  const fibLength2 = 10
  // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  it("return and array whos length is equal to the value provided as an argument", () => {
    expect(defibrillator(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(defibrillator(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// /*

//  FAIL  ./code-challenges.test.js
//   defibrillator
//     ✕ return and array whos length is equal to the value provided as an argument

//   ● defibrillator › return and array whos length is equal to the value provided as an argument

//     ReferenceError: defibrillator is not defined

// */

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // b) Create the function that makes the test pass.

// /*

// Pseudocode: 1.) Create a function called defibrillator
// 2.) defibrillator will take an argument of a number data type and return an array
// 3.) Create an array called fibonacciArray that has 2 elements [1, 1]
// 4.) Iterate using a for loop 
// 5.) Push the sum of, values at index from the previous two indexes into the fibonacciArray

// */

// const fibLength1 = 6
// // Expected output: [1, 1, 2, 3, 5, 8]
// const fibLength2 = 10
// // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const defibrillator = (num) => {
  const fibonacciArray = [1, 1]
  for (let i = 2; fibonacciArray.length < num ; i++) {
    fibonacciArray.push(fibonacciArray[i- 1] + fibonacciArray[i - 2])
}
  return fibonacciArray
}

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// // Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// // a) Create a test with expect statements for each of the variables provided.
    
describe("smallBigArray", () => {
  const studyMinutesWeek1 = {
    sunday: 90,
    monday: 30,
    tuesday: 20,
    wednesday: 15,
    thursday: 30,
    friday: 15,
    saturday: 60
    }
    // Expected output: [15, 15, 20, 30, 30, 60, 90]
  const studyMinutesWeek2 = {
    sunday: 100,
    monday: 10,
    tuesday: 45,
    wednesday: 60,
    thursday: 20,
    friday: 15,
    saturday: 65
    }
    // Expected output: [10, 15, 20, 45, 60, 65, 100]
    it("return an array of values sorted from least to greatest", () => {
    expect(smallBigArray(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(smallBigArray(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
    })
})

// /*

// FAIL  ./code-challenges.test.js
// defibrillator
//   ✓ return and array whos length is equal to the value provided as an argument (1 ms)
// smallBigArray
//   ✕ return an array of values sorted from least to greatest (1 ms)

// ● smallBigArray › return an array of values sorted from least to greatest

//   ReferenceError: smallBigArray is not defined

//   */

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // b) Create the function that makes the test pass.

// /*

// Pseudocode: 1.) Create a function called smallBigArray
// 2.) smallBigArray will take an argument of an object data type and return an array
// 3.) use Object.value() to access the object's key's value
// 4.) append .sort() Object.value() to access the array and sort the value at index from least to greatest

// */

// const studyMinutesWeek1 = {
//       sunday: 90,
//       monday: 30,
//       tuesday: 20,
//       wednesday: 15,
//       thursday: 30,
//       friday: 15,
//       saturday: 60
//       }
//       // Expected output: [15, 15, 20, 30, 30, 60, 90]
//     const studyMinutesWeek2 = {
//       sunday: 100,
//       monday: 10,
//       tuesday: 45,
//       wednesday: 60,
//       thursday: 20,
//       friday: 15,
//       saturday: 65
//       }
//       // Expected output: [10, 15, 20, 45, 60, 65, 100]

 const smallBigArray = (study) => {
  return Object.values(study).sort((a, b) => a - b)
}

/*

PASS  ./code-challenges.test.js
  smallBigArray
    ✓ return an array of values sorted from least to greatest (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.199 s

    */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("accumulatingSum", () => {
  const accountTransactions1 = [100, -17, -23, -9]
  // Expected output: [100, 83, 60, 51]

  const accountTransactions2 = [250, -89, 100, -96]
  // Expected output: [250, 161, 261, 165]

  const accountTransactions3 = []
  // Expected output: []
    it("return an array of with the sum added from the pervious index", () => {
    expect(accumulatingSum(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(accumulatingSum(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(accumulatingSum(accountTransactions3)).toEqual([])
  })
})

/*

FAIL  ./code-challenges.test.js
accumulatingSum
  ✕ return an array of with the sum added from the pervious index

● accumulatingSum › return an array of with the sum added from the pervious index

  ReferenceError: accumulatingSum is not defined

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// b) Create the function that makes the test pass.

/*

Pseudocode: 1.) Create an function named accumulatingSum
2.) accumulatingSum will take argument of an array data type and return the accumulating sum
3.) Create a variable named accSum to store data from arithmetic
4.) Use a reduce() to iterate over the indexes of the array
5.) add value at index to previous value and pass the return into accSum

*/

// const accountTransactions1 = [100, -17, -23, -9]
// // Expected output: [100, 83, 60, 51]

// const accountTransactions2 = [250, -89, 100, -96]
// // Expected output: [250, 161, 261, 165]

// const accountTransactions3 = []
// // Expected output: []

// b) Create the function that makes the test pass.

const accumulatingSum = (array) => {
let accSum = [];
array.reduce((a,b,i) => {
   return accSum[i] = a+b 
  }, 0);
  return accSum
}

/*

 PASS  ./code-challenges.test.js
  accumulatingSum
    ✓ return an array of with the sum added from the pervious index (2 ms)

*/




