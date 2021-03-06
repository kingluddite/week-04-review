const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

// Watch out for sorting numbers!
// Read Docs!!!!
// If compareFunction is not provided, the array elements are converted to strings,
// then sorted according to each characters Unicode code point of view
// What is unicode? - https://flaviocopes.com/unicode/
// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

// Properly sort numbers by providing compareFunction
// const numArr = [1, 30, 4, 21, 100000];
// numArr.sort((a, b) => a - b);
// console.log(numArr);
// expected output: Array [1, 100000, 21, 30, 4]
