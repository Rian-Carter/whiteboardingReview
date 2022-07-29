// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"
// Output: false

// Input: "copyright"
// Output: true

function uniqueness(string){ //creates a function 'uniqueness' that takes 'string' as an argument
  if (string.length === 1) { // if the strings length equals 1 it will return true
    return true; //return true statement
  }
  for (let i = 1; i < string.length; i++) { //uses a for loop to start at index 1 and iterate through the string
    if (string[0] === string[i]) //if string at index 0 is equal to string index returns false
    return false; //return false statement
  }
  return uniqueness(string.substring(1)); 
};

console.log(uniqueness('hello'));
console.log(uniqueness('copyright'));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring