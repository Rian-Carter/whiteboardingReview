// Question #5: Array Sorting
// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms — take the time to read about the following:

// Quick sort
// Merge sort
// Heap sort
// Insertion sort
// Bubble sort
// Selection sort
// You may implement any of the above algorithms (or your own) to solve the problem — as long as it doesn't use sort().

// Example
// Input: [9, 2, 7, 12]
// Output: [2, 7, 9, 12]

function selectSort(array){
  let inputArray = array.length;
  for(let i = 0; i < inputArray; i++) { //finds the smallest number in the subarray
    let min = i;
    for(let a = i+1; a < inputArray; a++){
      if(array[a] < array[min]) {
        min=a;
      }
    }
    if (min != i) { //swapping the elements
      let tempArray = array[i];
      array[i] = array[min];
      array[min] = tempArray;
    }
  }
  return array;
}

console.log(selectSort([9, 2, 7, 12])); //[ 2, 7, 9, 12 ]
console.log(selectSort([9, 2, 7, 12, 1033, 11, 56, 8, 91, 3, 5, 55])); //[2, 3, 5, 7, 8, 9, 11, 12, 55, 56, 91, 1033]
//https://stackabuse.com/selection-sort-in-javascript/