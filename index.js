// Select the body element of the document
const body = document.body;

// Append an empty node to the body (this does nothing visible)
body.append();

// Create a new <div> element
const div = document.createElement('div');

// Set the inner text of the <div> to "Hello, World!"
div.innerText = "Hello, World!";

// Overwrite the inner text of the <div> with "Hello, World 2"
div.textContent = "Hello, World 2";

// Set the inner HTML of the <div> to bold "Hello, World!"
div.innerHTML = "<strong>Hello, World!</strong>";

// Create a new <strong> element
const strong = document.createElement('strong');

// Append the <strong> element to the <div>
div.append(strong);

// Select the <span> element with the ID 'hi'
const spanHi = document.querySelector('#hi');

// Select the <span> element with the ID 'bye'
const spanBye = document.querySelector('#bye');

// Remove the <span> element with the ID 'bye' from the DOM
spanBye.remove();

// Remove the child element `spanHi` from the `div` (this will throw an error if `spanHi` is not a child of `div`)
div.removeChild(spanHi);

// Get the value of the 'id' attribute of `spanHi`
spanHi.getAttribute('id');

// Log the ID of `spanHi` to the console (this will throw an error because `consolelog` is misspelled)
consolelog(spanHi.id);

// Set the 'id' attribute of `spanHi` to 'Chelshey' and log the result
console.log(spanHi.setAttribute('id', 'Chelshey'));

// Remove the 'id' attribute from `spanHi`
spanHi.removeAttribute('id');

// Log the dataset (data-* attributes) of `spanHi` to the console
console.log(spanHi.dataset);

// Add the class 'new-class' to `spanHi`
spanHi.classList.add('new-class');

// Remove the class 'hi1' from `spanHi`
spanHi.classList.remove('hi1');

// Toggle the class 'hi3' on `div` (add it if not present, remove it if present)
div.classList.toggle('hi3');

// Explicitly remove the class 'hi1' from `div`
div.classList.toggle('hi1', false);

// Explicitly add the class 'hi1' to `div`
div.classList.toggle('hi1', true);

// Set the text color of `spanHi` to red
spanHi.style.color = 'red';

// Set the background color of `spanHi` to blue
spanHi.style.backgroundColor = 'blue';

// Append the `div` element to the body (this will move it to the end of the body if it already exists)
body.append(div);

// Log the text content of `div` to the console (text without HTML tags)
console.log(div.textContent);

// Log the inner text of `div` to the console (text as rendered, including CSS styling)
console.log(div.innerText);