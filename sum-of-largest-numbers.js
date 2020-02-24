// In this exercise, we will be given an array of 2 or more numbers. We will then have to find the two largest numbers in that array, and sum them together.

let sumLargestNumbers = function(data) {
  // Put your solution here
  let sortedData = data.sort(function(a,b) {
    // sort numbers in descending order
    return b - a;
  })
  
  return sortedData[0] + sortedData[1]

};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
