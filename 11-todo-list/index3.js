// ------------------------------
// 1. Finding the first occurrence of 'search' in the "words" array
// ------------------------------

// Define an array of strings.
let words = ['hello', 'world', 'search', 'good', 'search'];

// Initialize "index" to -1 (a common convention to indicate "not found").
let index = -1;

// Loop through each element in the "words" array.
for (let i = 0; i < words.length; i++) {
  // Check if the current element is equal to the string 'search'.
  if (words[i] === 'search') {
    // If it is, set "index" to the current position (i)...
    index = i;
    // ...and exit the loop immediately (we only want the first occurrence).
    break;
  }
}

// Output the found index (or -1 if 'search' wasn't found).
console.log(index); // Expected output: 2



// ------------------------------
// 2. Defining and using a function to find the index of a value in an array
// ------------------------------

// This function searches for "value" in "array" and returns its index if found.
// If not found, it returns -1.
function findIndex(array, value) {
  // Loop through each element of the input array.
  for (let i = 0; i < array.length; i++) {
    // Compare the current element with the provided value.
    if (array[i] === value) {
      // Return the index if a match is found.
      return i;
    }
  }
  // If no match is found after the loop, return -1.
  return -1;
}

// Define a new array to test the findIndex function.
let words1 = ['apple', 'banana', 'cherry', 'date'];
// Search for the string 'search' in the "words1" array.
let index1 = findIndex(words1, 'search');

// Check if findIndex returned a valid index (anything other than -1).
if (index1 !== -1) {
  console.log(`Found at index: ${index1}`);
} else {
  // If -1, then the value wasn't found in the array.
  console.log('Not found');
}



// ------------------------------
// 3. Function to process "array1" by filtering based on a condition (using continue)
// ------------------------------

const array1 = ['egg', 'apple', 'banana', 'cherry'];

// This function loops through "arr" and pushes elements into a new array
// only when they meet a specific condition.
// NOTE: Despite the name "removeEgg", this function actually collects 'egg' values.
function removeEgg(arr) {
  // Initialize an empty array to hold selected elements.
  let newArray = [];
  // Loop through each element in the input array.
  for (let i = 0; i < arr.length; i++) {
    // If the current element is NOT 'egg', skip the rest of the loop iteration.
    if (arr[i] !== 'egg') {
      continue;
    }
    // If the element is 'egg', push it into newArray.
    newArray.push(arr[i]);
  }
  // Output the new array, which will only contain the 'egg' elements.
  console.log(newArray);
}

// Call the function with "array1".
// For the given array, only the first element ('egg') matches, so it logs: ['egg']
removeEgg(array1);



// ------------------------------
// 4. Removing only the first two occurrences of 'egg' from an array
// ------------------------------

const array2 = ['egg', 'egg', 'egg', 'apple', 'banana', 'cherry', 'egg'];

// This function removes the first two occurrences of 'egg' while keeping all other elements.
function removeFirstTwoEggs(arr) {
  // Initialize an empty array to hold the filtered results.
  let newArray = [];
  // Counter to keep track of how many 'egg' elements have been skipped.
  let eggCount = 0;
  
  // Loop through each element in the array.
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is 'egg' and if we have skipped less than two of them.
    if (arr[i] === 'egg' && eggCount < 2) {
      // Increment the counter for each 'egg' that we want to remove.
      eggCount++;
      // Skip adding this element to the new array.
      continue;
    }
    // For all other cases (either non-'egg' or after the first two 'egg's),
    // add the element to the new array.
    newArray.push(arr[i]);
  }
  // Return the filtered array.
  return newArray;
}

// Output the new array after removing the first two 'egg' elements.
console.log(removeFirstTwoEggs(array2));
// Expected output: [ 'egg', 'apple', 'banana', 'cherry', 'egg' ]
//   (The first two 'egg's are removed; subsequent 'egg's are kept.)

// ------------------------------
// 5. Reversing the filtered array
// ------------------------------

// Directly reversing the array returned by removeFirstTwoEggs.
// Note: The reverse() method reverses the array in place.
console.log(removeFirstTwoEggs(array2).reverse());

// To avoid modifying the filtered array, we can create a shallow copy using slice() and then reverse it:
const filteredArray = removeFirstTwoEggs(array2);
const reversedArray = filteredArray.slice().reverse(); // slice() with no arguments creates a copy.
console.log(reversedArray);



// ------------------------------
// 6. Classic FizzBuzz: Looping from 0 to 99 and printing special strings for multiples of 3 and/or 5.
// ------------------------------

for (let i = 0; i < 100; i++) {
  // If "i" is divisible by both 3 and 5, print 'FizzBuzz'
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  }
  // Else if "i" is divisible by 3, print 'Fizz'
  else if (i % 3 === 0) {
    console.log('Fizz');
  }
  // Else if "i" is divisible by 5, print 'Buzz'
  else if (i % 5 === 0) {
    console.log('Buzz');
  }
  // Otherwise, print the number itself.
  else {
    console.log(i);
  }
}



// ------------------------------
// 7. Creating a function to extract unique values from an array
// ------------------------------

// This function finds the index of a given word in an array.
// If the word exists, it returns its index; if not, it returns -1.
function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }
  return -1;
}

// This function returns a new array containing only unique elements from the input array.
function unique(array) {
  // Initialize an empty array to store unique values.
  const result = [];

  // Loop through each element in the original array.
  for (let i = 0; i < array.length; i++) {
    // Store the current element in a variable "word".
    const word = array[i];
    // Check if "word" is not already in the result array using our findIndex function.
    if (findIndex(result, word) === -1) {
      // If the word is not found in "result", add it.
      result.push(word);
    }
  }

  // Return the array containing only unique values.
  return result;
}

// Testing the unique function with two examples:
console.log(unique(['green', 'red', 'blue', 'red'])); // Expected output: ['green', 'red', 'blue']
console.log(unique(['red', 'green', 'green', 'red']));  // Expected output: ['red', 'green']

