function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let x = i + 1; x < array.length; x++) {
      if(array[i] + array[x] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 

O(n^2)

Given an input of n elements, the worst case scenario is that 
the algorithm needs to make O(log n) iterations.

Given an input of n elements, the algorithm will retain a constant
space optimization.
*/

/*  

  build function with parameter of array and target
    iterate through the array with two variables
    an i and a j
    one inside the other
   checking to see if i and j together = the target

   test case [1, 2, 3], 9,
   test case [1, 2, 3] 4

*/

/*

hasTargetSum iterates through the array parameter twice.
the first iteration is through the i variable, the second
is by way of the x variable. 

the function checks the sum of these two numbers against the 
target parameter. if, at any point, it finds that two numbers
in the array add up to the target, it exits the iteration loop
and returns true

once it checks every possible sum against the target without
returning true, the function returns false
*/

/*
Write a function with two inputs/parameters: an array and a target number.
the function should iterate through the array, looking to see if any pair
of numbers in the array add up to the target number
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expected: true");
  console.log("=>", hasTargetSum([1, 2, 3], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1,2,3], 7));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
