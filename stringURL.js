// Question #1: Turning Strings to URLs

// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.
// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Input: "Jasmine Ann Jones"
// Output: "Jasmine%20Ann%20Jones"

// iterative attempt
function replaceSpace(string){
  let newString = "";
  for(let i = 0; i < string.length; i++){
    if(string[i]===" "){
      newString = newString + "%20"
    } else {
      newString = newString + string[i];
    }
  }
  return newString;
};

//test



// recursion attempt
// w3schools.com
// The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
// The substring() method extracts characters from start to end (exclusive).
// The substring() method does not change the original string.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

function replaceSpaceRecurse(string){ //create function 'replaceSpaceRecurse' that takes 'string' as an argument.
  if (string === "") { //base case for string being empty
    return string; //if string is empty, return it
  } else if (string[0] === " ") { //check to see if index 0 is an empty space
    return "%20" + replaceSpaceRecurse(string.substring(1)); //if an empty space replace it with %20
  } else {
    return string[0] + replaceSpaceRecurse(string.substring(1)); //after function runs its course, return string with all spaces replaced
  }
};

// test
console.log(replaceSpace("Jasmine Ann Jones")); // "Jasmine%20Ann%20Jones"
console.log(replaceSpaceRecurse("Jasmine Ann Jones")); // "Jasmine%20Ann%20Jones"