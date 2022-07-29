// Question #2: Array Deduping

// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi" 7, 53]
// Output: [7, 9, "hi", 12, 53]

// iterative attempt
function deduping(array){
  let output = [];
  array.forEach((element, i) => {
    if (!array.slice(0, i).includes(element)) output.push(element);
  });
  return output;
};

console.log(deduping([7, 9, "hi", 12, "hi", 7, 53])); // [ 7, 9, 'hi', 12, 53 ]

// recursive attempt
