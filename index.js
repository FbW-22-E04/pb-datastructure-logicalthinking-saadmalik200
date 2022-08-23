// Q1

const array = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];

array.sort((a, b) => a - b);
// console.log(array);

// Q2

const alpha = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];

// console.log(alpha.sort());

// BONUS

function calcLength(arr) {
  console.log(arr);

  arr.sort((a, b) => a.length - b.length);
  return arr;
}

console.log(calcLength(alpha));
