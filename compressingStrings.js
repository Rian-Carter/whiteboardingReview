// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"
// Output: "3ab2c4da"

//iterative attempt
function compress(string){
  let output = "";
  let count = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i+1] != null && string[i] === string[i+1]) {
      count++;
    } else {
      if (count > 1) {
        output += count.toString() + string[i];
      } else {
        output += string[i];
      }
      count = 1;
    }
  }
  return output;
};

console.log(compress("aaabccdddda"));

//recursive attempt
function compressRecursive(string){
  if (string.length === 0)
  return string;
  let count = 1;
  for (let i = 0; string[i] === string[i+1]; i++) count++;
  if (count > 1) {
    return count.toString() + string[0] + compressRecursive(string.substring(count));
  } else {
    return string[0] + compressRecursive(string.substring(1));
  }
};

console.log(compressRecursive("aaabccdddda")); //3ab2c4da

// https://rebecca-ap-rosenberg.medium.com/string-compression-algorithm-javascript-style-c0213dbc94ad
// https://www.youtube.com/watch?v=Q0alTGQ-lXk
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring