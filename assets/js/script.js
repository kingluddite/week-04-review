// grab the div with a class of container
const containerEl = document.querySelector('.container');
const containerTwoEl = document.querySelector('.container-two');
// create a h1 element
const h1El = document.createElement('h1');
// create text
const h1ElText = document.createTextNode('Hello World!');
// add text to the h1 element
h1El.appendChild(h1ElText);
// add the h1 to the div element
containerEl.appendChild(h1El);
containerTwoEl.insertBefore();

// how to use insertBefore() 
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_insertbefore
