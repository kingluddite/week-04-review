// strings are not arrays
// But in some ways they are similar to arrays
// you can access each character in a string by it's index
let str = 'icanloopthroughanarray';
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
/* view the console to see this! */

// Change a letter
let dogStr = 'dog';
dogStr[0] = 'l';

console.log(dogStr);
// why not log? The reason is that strings are immutable
