// Define an array 'nums' with three numbers.
const nums = [10, 20, 30];

// Change the element at index 2 (the third element) from 30 to 100.
nums[2] = 100;

// Log the updated 'nums' array to the console.
// Expected output: [10, 20, 100]
console.log(nums);

// ---------------------------------------------------------------------------------
// Define an array 'myArray' with several numbers.
const myArray = [1, 20, 22, 24, 5]

// Function to retrieve the last element of an array.
// It loops through the array and returns the element when the index 
// matches the last index (array.length - 1).
function getLastValue(myArray) {
	for (let i = 0; i < myArray.length; i++) {
		return myArray[myArray.length - 1];
	}
	// Alternatively, you could simply return myArray[myArray.length - 1]
}

// Log the last element of 'myArray' using the getLastValue function.
console.log(getLastValue(myArray));

// ---------------------------------------------------------------------------------
// Define an array 'myArray2' containing strings.
const myArray2 = ['i', 'want', 'to', 'be', 'like', 'chelshey'];

// Function to retrieve the last element from a string array.
// The approach is the same: iterate until the last index is reached, then return that element.
function getLastValue2(myArray2) {
	for (let i = 0; i < myArray2.length; i++) {
		return myArray2[myArray2.length - 1];
	}
}

// Log the last element of 'myArray2' using the getLastValue2 function.
console.log(getLastValue2(myArray2));

// ---------------------------------------------------------------------------------
// Define an array 'arr' with several numbers.
const arr = [1, 2, 3, 4, 5];

// Function to swap the first and last elements of the given array.
// It uses array destructuring to swap without needing a temporary variable.
function swapFirstandLast(arr) {
	// Swap arr[0] and arr[last index] in one line.
	[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
	// Return the modified array.
	return arr;
}

// Log the array after swapping the first and last elements.
// Expected output: [5, 2, 3, 4, 1]
console.log(swapFirstandLast(arr));

// ---------------------------------------------------------------------------------
// A loop that iterates from 0 to 10, incrementing by 2 each time.
// It logs even numbers between 0 and 10 (inclusive).
for(let i = 0; i <= 10; i+=2) {
	console.log(i);
	// Outputs: 0, 2, 4, 6, 8, 10 on separate lines.
}

// A loop that counts down from 5 to 0.
// It logs each number in the countdown.
for(let i = 5; i >= 0; i--) {
	console.log(i);
	// Outputs: 5, 4, 3, 2, 1, 0 on separate lines.
}

// ---------------------------------------------------------------------------------
// Define an array 'numbers' of numbers.
let numbers = [1, 2, 3, 4, 5];
// Create an empty array 'newNumbers'.
let newNumbers = [];

// Loop through each element in 'numbers',
// add 1 to each element, and push the result into 'newNumbers'.
for(let i = 0; i < numbers.length; i++) {
	newNumbers.push(numbers[i] + 1);
}

// Note: This updated array 'newNumbers' is built but not logged.

// ---------------------------------------------------------------------------------
// Function that takes an array and returns a new array with each element increased by one.
function addOneToArray(numbers) {
	let newNumbers = [];
	// Iterate over the input array.
	for(let i = 0; i < numbers.length; i++) {
		// Add 1 to the current element and push it to 'newNumbers'.
		newNumbers.push(numbers[i] + 1);
	}
	// Return the new array with incremented values.
	return newNumbers;
}

// Define another array 'numbers2'.
let numbers2 = [6, 7, 8, 9, 10];
// Log the result of adding one to each element in 'numbers2' using addOneToArray.
console.log(addOneToArray(numbers2));
// Expected output: [7, 8, 9, 10, 11]

// ---------------------------------------------------------------------------------
// Function that adds a given number 'num' to every element of an input array.
function addNum(array, num) {
	const result = [];
	// Loop through each element in the array.
	for(let i = 0; i < array.length; i++) {
		// Add 'num' to the current element and push the result to the 'result' array.
		result.push(array[i] + num);
	}
	// Return the new array containing the incremented values.
	return result;
}

// Define an array 'originalArray'.
const originalArray = [20, 21, 22, 23, 24];
// Call addNum to increase each element of originalArray by 5.
const increasedArray = addNum(originalArray, 5);
// Log the result. Expected output: [25, 26, 27, 28, 29]
console.log(increasedArray);

// ---------------------------------------------------------------------------------
// Define two arrays 'array3' and 'array4'.
let array3 = [14, 15, 16, 17, 18];
let array4 = [20, 21, 22, 23, 24];

// Function to add two arrays element-wise.
// Assumes both arrays are of the same length.
function addArrays(array3, array4) {
	const result = [];
	// Loop through the arrays using the index.
	for(let i = 0; i < array3.length; i++) {
		// Sum the elements from both arrays at the same index and push to the result.
		result.push(array3[i] + array4[i]);
	}
	// Return the resulting array.
	return result;
}

// Call addArrays and store the result in 'array5'.
const array5 = addArrays(array3, array4);
// Log the result. Expected output: [34, 36, 38, 40, 42]
console.log(array5);

// ---------------------------------------------------------------------------------
// Define an array 'array6' with a mix of positive and negative numbers.
const array6 = [-1, 2, -3, 4, -5, 24, 32, 34, -100, 8, -14];

// Function to filter out only the positive numbers from an array.
function countPositive(array6) {
	let positiveNumbers = [];
	// Loop through each element in 'array6'.
	for(let i = 0; i < array6.length; i++) {
		// Check if the element is greater than zero.
		if(array6[i] > 0) {
			// If so, add it to the positiveNumbers array.
			positiveNumbers.push(array6[i]);
		}	
	}
	// Return the array of positive numbers.
	return positiveNumbers;
}

// Log the filtered positive numbers.
console.log(countPositive(array6));
// Expected output: [2, 4, 24, 32, 34, 8]

// ---------------------------------------------------------------------------------
// Define an array 'array7' with numbers.
const array7 = [1, 2, 3, 4, 5];

// Function to find the minimum and maximum values in an array.
// It initializes both min and max to the first element and then iterates
// over the rest of the array to update these values.
function minMax(array7) {
	let min = array7[0];
	let max = array7[0];

	// Start loop from index 1 since index 0 is already used.
	for(let i = 1; i < array7.length; i++) {
		// If current element is less than 'min', update 'min'.
		if(array7[i] < min) {
			min = array7[i];
		} 
		// If current element is greater than 'max', update 'max'.
		if(array7[i] > max) {
			max = array7[i];
		}
	}
	// Return an array with the minimum and maximum values.
	return [min, max];
}

// Log the min and max values for array7.
// Expected output: [1, 5]
console.log(minMax(array7));

// ---------------------------------------------------------------------------------
// Function similar to minMax but initializes 'min' and 'max' as null.
// It then checks if min or max are null before assigning the first value.
function minMaxWithNull(array7) {
	let min = null;
	let max = null;

	// Loop through every element of the array.
	for(let i = 0; i < array7.length; i++) {
		// If 'min' is null (i.e., not set yet) or current element is less than 'min', update 'min'.
		if(min === null || array7[i] < min) {
			min = array7[i];
		}
		// If 'max' is null or current element is greater than 'max', update 'max'.
		if(max === null || array7[i] > max) {
			max = array7[i];
		}
	}
	// Return the found minimum and maximum.
	return [min, max];
}

// Log the result of minMaxWithNull.
// Expected output: [1, 5]
console.log(minMaxWithNull(array7));

// ---------------------------------------------------------------------------------
// Define an array 'array8' containing several words.
const array8 = ['hello', 'world', 'this', 'is', 'a', 'test'];

// Function to count the occurrence of each word in an array.
// It creates an object (wordCount) where keys are words and values are their counts.
function countWords(array8) {
	const wordCount = {};
	// Loop through each word in the array.
	for(let i = 0; i < array8.length; i++) {
		const word = array8[i];
		// If the word is already in the object, increment its count.
		if(wordCount[word]) {
			wordCount[word]++;
		} else {
			// Otherwise, initialize the count for this word to 1.
			wordCount[word] = 1;
		}
	}
	// Return the object with word counts.
	return wordCount;
}

// Log the result of countWords.
// Expected output: { hello: 1, world: 1, this: 1, is: 1, a: 1, test: 1 }
console.log(countWords(array8));
