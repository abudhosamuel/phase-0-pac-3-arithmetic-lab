1 + 80; //=> 81
60 - 40; //=> 20
2 * 3.4; //=> 6.8
5.0 / 2.5; //=> 2

// Function to add two numbers
function add(a, b) {
    return a + b;
  }
  
  // Function to subtract two numbers
  function subtract(a, b) {
    return a - b;
  }
  
  // Function to multiply two numbers
  function multiply(a, b) {
    return a * b;
  }
  
  // Function to divide two numbers
  function divide(a, b) {
    return a / b;
  }
  
  // Function to increment a number
  function increment(n) {
    return n + 1;
  }
  
  // Function to decrement a number
  function decrement(n) {
    return n - 1;
  }
  
  // Function to parse a string as an integer
  function makeInt(n) {
    return parseInt(n, 10);
  }
  
  // Function to parse a string as a floating point number
  function preserveDecimal(n) {
    return parseFloat(n);
  }
  
  // Example usage to verify function definitions
  console.log(add(1, 80)); // 81
  console.log(subtract(60, 40)); // 20
  console.log(multiply(2, 3.4)); // 6.8
  console.log(divide(5.0, 2.5)); // 2
  
  console.log(increment(2)); // 3
  console.log(decrement(2)); // 1
  
  console.log(makeInt("42")); // 42
  console.log(makeInt("42px")); // 42
  console.log(makeInt("0x42")); // 0
  
  console.log(preserveDecimal("2.718")); // 2.718
  console.log(preserveDecimal("2.718px")); // 2.718
  console.log(preserveDecimal("invalid")); // NaN
  