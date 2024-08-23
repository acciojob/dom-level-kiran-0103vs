//your JS code here. If required.
// Select the element with id 'level'
const element = document.getElementById('level');

// Initialize the level count starting from the element itself
let level = 1;

// Traverse up the DOM tree to the root <html> element
let currentElement = element;
while (currentElement.parentNode) {
  currentElement = currentElement.parentNode;
  level++;
}

// Display the result using alert
alert(`The level of the element is: ${level}`);
