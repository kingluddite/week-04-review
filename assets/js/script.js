// with slice think "COPY"
// Slice DOES NOT mutate the original array
// DOCS - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// we remove items before array index 2 (ant and bison)
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// we start at index 2 and end at index 4
// note: slice extracts up to but not including end
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

// we see that a new array is created
const newAnimalsArr = animals.slice(1, 5);
console.log(newAnimalsArr);
