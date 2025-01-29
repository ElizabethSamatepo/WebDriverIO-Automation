for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Even Numbers Between 1 and 20

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//Sum of Numbers from 1 to 10

let sumOfNumbers = 0;

for (let i = 1; i <= 10; i++) {
  sumOfNumbers = sumOfNumbers + i;
}

console.log(sumOfNumbers);

//reverse order from 10 to 1.

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//write multiplication table for 5, up to 5 x 10 = 50.

for (let i = 0; i <= 10; i++) {
  console.log(` 5 x ${i} = ${5 * i}`);
}

// for loop that prints the square (number multiplied by itself) of numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}

//for loop that counts how many numbers between 1 and 30 are multiples of 3
let count = 0;

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    count = count + 1;
  }
}
console.log(`Total multiples of 3: ${count}`);

// Write a for loop that calculates the factorial of 5 (5! = 5 × 4 × 3 × 2 × 1).

let factorialOfFive = 1;

for (let i = 5; i >= 1; i--) {
  factorialOfFive = factorialOfFive * i;
}
console.log(factorialOfFive);
