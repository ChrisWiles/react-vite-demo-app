/* eslint-disable no-restricted-syntax */
// create a map with all possible Roman-Integer pairs.
// M, D, C, X, L, V, I

const roman = {
  M: 1000,
  // CM: 900,
  D: 500,
  // CD: 400,
  C: 100,
  // XC: 90,
  L: 50,
  // XL: 40,
  X: 10,
  // IX: 9,
  V: 5,
  // IV: 4,
  I: 1,
};

/**
 * Create a lookup  map that pairs [roman char]: digit
 * Iterate thru the entries
 * if the Quotient of the current roman value and the num is > 1
 *  - subtract the quotient * the value
 *  - add the roman key quotient times do the output
 * if num is 0 return the str
 */
// The time complexity is going to be O(n), there is n is the number of Roman numeral characters. And the space complexity is O(1).
// function convertToRoman(num) {
//   let string = '';

//   for (const [key, value] of Object.entries(roman)) {
//     const q = Math.floor(num / value);
//     if (q) {
//       string += key.repeat(q);
//       num -= q * value;
//     }
//   }

//   return string;
// }

console.log(convertToRoman(813)); // DCCCXIII
console.log(convertToRoman(900)); // CM

/**
 * 1. Starting at the largest romain char M-500, divide 813 / 500, goes in 1 time, q (Quotient) 1
 * 2. Subtract the romain value from the num
 * 3. Add the romain char q times
 * 4. return if num is 0 otherwise loop to next smallest romain digit
 */
// function convertToRoman(num) {
//   let str = '';

//   for (const [key, value] of Object.entries(roman)) {
//     const q = Math.floor(num / value);
//     if (q) {
//       console.log({ num, value, q });
//       num -= q * value;
//       str += key.repeat(q);
//       console.log({ num, str });
//     }
//     if (!num) return str;
//   }
// }

// console.log(convertToRoman(813)); // DCCCXIII
