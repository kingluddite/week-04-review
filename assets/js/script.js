// What is the DOM?
// View Source Code vs viewing DOM
// grabbing nodes using querySelector
//   or getElementById('myH1')
//   or getElementsByTagName('h1')[0]
const htmlEl = document.querySelector('head').parentNode;
console.log(htmlEl);

// note: nextSibling returns #text
// spaces are text nodes
// review HTML Tree Generator
const nxtSibEl = document.querySelector('h1').nextElementSibling;
console.log(nxtSibEl);

const firstChildEl = document.querySelector('body').firstElementChild;
console.log(firstChildEl);

const lastChildEl = document.querySelector('body').lastElementChild;
console.log(lastChildEl);

// Discuss Text, Element, Comment
// vs using "Element" returns tags
