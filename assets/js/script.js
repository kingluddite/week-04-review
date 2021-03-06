// when i is equal to 4, it skips over that iteration and console.log(i)
//   doesn't run again until the next time that the code loops
for (let i = 1; i <= 5; i++) {
  if (i === 4) {
    continue;
  }
  console.log(i);
}

/* output */

/*
1
2 
3
5
*/
