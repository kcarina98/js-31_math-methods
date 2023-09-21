// # 1_1

console.log(Math.PI);

const PI = Math.PI;
const roundedPI = PI.toFixed(2);

console.log(roundedPI);

// # 1_2

let array1 = 3.14;
let array2 = 193.4464;
let array3 = 0.8596433607;
let array4 = -2.940629089;

console.log(Math.round(array1));
console.log(Math.round(array2));
console.log(Math.round(array3));
console.log(Math.round(array4));

// # 1_3

const randomNum = Math.random();
console.log(randomNum);

const randomNum1_10 = Math.ceil(Math.random() * 10);
console.log(randomNum1_10);

const randomNum1_100 = Math.ceil(Math.random() * 100);
console.log(randomNum1_100);

// # 2_1

function roundTo(num1, nachkommastellen) {
  console.log(num1.toFixed(nachkommastellen));
}

roundTo(3.1415926535, 5);
