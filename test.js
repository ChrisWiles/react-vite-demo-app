/* eslint-disable unicorn/no-for-loop */
/**
 * @param {number[]} nums
 * @return {number}
 */
// const removeDuplicates = function (nums) {
//   let i = 0;
//   for (let j = 0; j < nums.length; j++) {
//     console.log({ j, i });
//     console.log(nums[j], nums[i]);
//     if (nums[j] != nums[i]) {
//       console.log(`Set ${nums[i + 1]} = ${nums[j]}`);
//       nums[++i] = nums[j];
//     }
//   }
//   // console.log(nums);
//   return ++i;
// };

// console.log(removeDuplicates([1, 2, , 3, 3]));

// function solution(str) {
//   const result = [];
//   let i = 0;
//   while (i < str.length) {
//     result.push(str[i] + (str[i + 1] || '_'));
//     i += 2;
//   }
//   return result;
// }

// console.log(solution('abcdefg')); // ["ab", "cd", "ef", "g_"]

//  given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// function firstMissingPositive(A) {
//   const lookUp = {};

//   A.forEach((n) => {
//     if (n > 0) {
//       lookUp[n] = n;
//     }
//   });

//   for (let i = 1; i < A.length + 1; i++) {
//     if (!lookUp[i]) {
//       return i;
//     }
//   }
//   return A.length + 1;
// }

// console.log(firstMissingPositive([1, 2, 3, 5, 6])); //

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const lengthOfLastWord = function (s) {
//   return s.trim().split(' ').at(-1).length;
// };

// console.log(lengthOfLastWord('   fly me   to   the moon  '));

// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
// const plusOne = function (digits) {
//   const addOneToIndex = (index) => {
//     if (index === -1) {
//       return [1, ...digits];
//     }

//     const nextValue = digits[index] + 1;
//     if (nextValue === 10) {
//       digits[index] = 0;
//       return addOneToIndex(index - 1);
//     }

//     digits[index] = nextValue;
//     return digits;
//   };
//   return addOneToIndex(digits.length - 1);
// };

// console.log(plusOne([9, 8])); // [9, 9]
// console.log(plusOne([9, 9])); // [1,0,0]

// function sortArray(array) {
//   if (!array.length) return array;

//   const sortedOdds = array.filter((n) => n % 2 !== 0).sort((a, b) => a - b);
//   return array.map((n) => {
//     if (n % 2) {
//       return sortedOdds.shift();
//     }
//     return n;
//   });
// }

// console.log(sortArray([1, 11, 2, 8, 3, 4, 5, -10, -11])); // [ 1, 3, 2, 8, 5, 4, 11 ]

// function reverse(s) {
//   return [...s].reverse().join('');
// }
// function towerBuilder(nFloors) {
//   return Array.from({ length: nFloors }, (e, index) => {
//     const spaces = nFloors - index - 1;
//     const side = `${' '.repeat(spaces)}${'*'.repeat(index)}`;
//     return `${side}*${reverse(side)}`;
//   });
// }

// console.log(towerBuilder(3)); // ["  *  "," *** ","*****"])

// a = 1
// const getCharValue = (_sum, char) => _sum + char.codePointAt() - 'a'.codePointAt() + 1;

// function high(string) {
//   const words = string.split(' ');
//   const wordValues = words.map((word) => word.split('').reduce(getCharValue, 0));
//   const maxValue = Math.max(...wordValues);
//   return words[wordValues.indexOf(maxValue)];
// }

// function alphabetPosition(text) {
//   return text
//     .split('')
//     .reduce((values, char) => {
//       const value = char.toLowerCase().codePointAt();
//       if (value >= 'a'.codePointAt() && value <= 'z'.codePointAt()) {
//         values.push(value - 96);
//       }
//       return values;
//     }, [])
//     .join(' ');
// }

// console.log(alphabetPosition(`The narwhal bacons at midnight.`));

// given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// function solution(A) {
//   const lookup = {};
//   A.forEach((n) => n > 0 && (lookup[n] = n));

//   for (let i = 1; i <= A.length; i++) {
//     if (lookup[i] !== i) return i;
//   }

//   return A.length + 1;
// }

// console.log(solution([1, 3, 6, 4, 1, 2])); // 5
// console.log(solution([2])); // 1
// console.log(solution([1, 2, 3])); // 4
// console.log(solution([-1, 3])); // 1

// function solution(X, Y, D) {
//   return Math.ceil((Y - X) / D);
// }

// console.log(solution(5, 105, 3)); //

// function solution(A) {
//   if (!A.length) {
//     return 1;
//   }
//   const leaves = {};
//   A.forEach((n) => {
//     leaves[n] = n;
//   });

//   for (let i = 1; i <= A.length; i++) {
//     if (!leaves[i]) return i;
//   }

//   return A.length + 1;
// }

// console.log(solution([1])); // 2

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// -1 if never
// Find index which completes the series
// Find time 1 to X are covered by leaves
// A[K] = position
// K = time in secs

// For example, for the input (5, [3]) the solution exceeded the time limit.
// function solution(X, array) {
//   const remaining = {};
//   let counter = 0;
//   array.forEach((pos) => {
//     if (pos <= X) {
//       remaining[pos] = pos;
//     }
//   });

//   for (let sec = 0; sec <= array.length; sec++) {
//     const val = array[sec];
//     console.log({ counter, val, sec, remaining });
//     if (remaining[val]) {
//       delete remaining[val];
//       counter++;
//     }
//     if (counter === X) {
//       return sec;
//     }
//   }

//   return -1;
// }

// function solution(X, A) {
//   const positions = new Set();
//   for (let i = 0; i < A.length; i++) {
//     positions.add(A[i]);
//     if (positions.size == X) return i;
//   }

//   return -1;
// }

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// A permutation is a sequence containing each element from 1 to N once,
// return 1 || 0
// function solution(A) {
//   const byValue = {};
//   for (let i = 0; i < A.length; i++) {
//     const n = A[i];
//     // Dupe found
//     if (byValue[n]) {
//       return 0;
//     }
//     byValue[n] = n;
//   }

//   for (let i = 1; i <= A.length; i++) {
//     if (!byValue[i]) {
//       return 0;
//     }
//   }

//   return 1;
// }

// console.log(solution([1, 2, 3, 4])); // 1
// console.log(solution([1, 2, 3, 4, 1])); // 0
// console.log(solution([4, 1, 3])); // 0

// function solution(A) {
//   const byValue = {};
//   A.forEach((n) => {
//     if (n > 0) {
//       byValue[n] = n;
//     }
//   });

//   for (let i = 1; i <= A.length + 1; i++) {
//     if (!byValue[i]) return i;
//   }

//   return 1;
// }

// console.log(solution([1, 3, 6, 4, 1, 2])); // 5
// console.log(solution([1, 2, 3])); // 4

// function solution(A, K) {
//   K = K % A.length; // skip mutiple rotations
//   if (!K) return A;
//   const index = A.length - K;
//   return [...A.slice(index), ...A.slice(0, index)];
// }

// console.log(solution([3, 8, 9, 7, 6], 3)); // [9, 7, 6, 3, 8]
// [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
// [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
// [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]

// const brackets = {
//   '{': '}',
//   '[': ']',
//   '(': ')',
// };

// let prevValue = []
// function solution(S) {
//   if(prevValue === )
//   // if odd it is missing one
//   if (S.length % 2 !== 0) return 0;
//   let letters = S.split('');

//   const firstChar = letters[0];
//   if (firstChar === '}' || firstChar === ')' || firstChar === ']') {
//     return 0;
//   }

//   const lastChar = letters[letters.length - 1];
//   if (lastChar === '{' || lastChar === '(' || lastChar === '[') {
//     return 0;
//   }

//   letters = letters.replaceAll('()')
//   letters = letters.replaceAll('[]')
//   letters = letters.replaceAll('{}')
//   prevValue = letters
//   if(!letters.length) return 1;
//   solution(letters.join(''))

// }

// // console.log(solution('(()[]{})')); // 1
// console.log(solution('([)()]')); // 0

// Use functional or class component based on your preference.
// Make it a default export.

// username, password update value on input change
// Submit button onSubmit(username, password)
//

// const Input = ({ id, type, value }) => <input id={id} type={type} value={value}/>;

// export default function LoginForm({ onSubmit }) {
//   const [username, setUsername] = React.useState('');
//   const [password, setPassword] = React.useState('');

//   const handleUser = React.useCallback((event) => {
//     setUsername(event.target.value);
//   }, []);

//   const handlePassword = React.useCallback((event) => {
//     setPassword(event.target.value);
//   }, []);

//   const handleSubmit = React.useCallback(() => {
//     onSubmit(username, password);
//     setUsername('');
//     setPassword('');
//   }, [onSubmit, password, username]);

//   return (
//     <div>
//       <div>Username</div>
//       <input id="username-input" onChange={handleUser} type="text" value={username} />
//       <div>Password</div>
//       <input id="password-input" onChange={handlePassword} type="password" value={password} />
//       <div>
//         <button id="login-button" onClick={handleSubmit} type="button">
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// }

// View this image of a Word Clock
// https://i.imgur.com/LlSe4hs.png

const hours_lookup = {
  1: 'ONE',
  2: 'TWO',
  3: 'THREE',
  4: 'FOUR',
  5: 'FIVE',
  6: 'SIX',
  7: 'SEVEN',
  8: 'EIGHT',
  9: 'NINE',
  10: 'TEN',
  11: 'ELEVEN',
  12: 'TWELVE',
};

const mins_lookup = {
  5: 'FIVE MINUTES',
  10: 'TEN MINUTES',
  15: 'QUARTER',
  20: 'TWENTY MINUTES',
  25: 'TWENTY FIVE MINUTES',
  30: 'HALF',
};

// round min to nearest 5 minutes
function roundMinutes(minutes) {
  return Math.round(minutes / 5) * 5;
}

function timeToWords(hours, minutes) {
  minutes = roundMinutes(minutes);
  if (minutes === 0) {
    return `IT IS ${hours_lookup[hours]} O'CLOCK`;
  }

  let _hours = hours_lookup[hours + 1];
  if (hours === 12) {
    _hours = hours_lookup[1];
  }

  if (minutes === 60) {
    return `IT IS ${_hours} O'CLOCK`;
  }

  if (minutes <= 30) {
    const min = mins_lookup[minutes];
    return `IT IS ${min} PAST ${hours_lookup[hours]}`;
  }

  if (minutes > 30) {
    const min = mins_lookup[60 - minutes];
    return `IT IS ${min} TO ${_hours}`;
  }
}

Array(60)
  .fill()
  .forEach((_, index) => {
    console.log(index, timeToWords(12, index));
  });
//   0 IT IS TWELVE O'CLOCK
//   1 IT IS TWELVE O'CLOCK
//   2 IT IS TWELVE O'CLOCK
//   3 IT IS FIVE MINUTES PAST TWELVE
//   4 IT IS FIVE MINUTES PAST TWELVE
//   5 IT IS FIVE MINUTES PAST TWELVE
//   6 IT IS FIVE MINUTES PAST TWELVE
//   7 IT IS FIVE MINUTES PAST TWELVE
//   8 IT IS TEN MINUTES PAST TWELVE
//   9 IT IS TEN MINUTES PAST TWELVE
//   10 IT IS TEN MINUTES PAST TWELVE
//   11 IT IS TEN MINUTES PAST TWELVE
//   12 IT IS TEN MINUTES PAST TWELVE
//   13 IT IS QUARTER PAST TWELVE
//   14 IT IS QUARTER PAST TWELVE
//   15 IT IS QUARTER PAST TWELVE
//   16 IT IS QUARTER PAST TWELVE
//   17 IT IS QUARTER PAST TWELVE
//   18 IT IS TWENTY MINUTES PAST TWELVE
//   19 IT IS TWENTY MINUTES PAST TWELVE
//   20 IT IS TWENTY MINUTES PAST TWELVE
//   21 IT IS TWENTY MINUTES PAST TWELVE
//   22 IT IS TWENTY MINUTES PAST TWELVE
//   23 IT IS TWENTY FIVE MINUTES PAST TWELVE
//   24 IT IS TWENTY FIVE MINUTES PAST TWELVE
//   25 IT IS TWENTY FIVE MINUTES PAST TWELVE
//   26 IT IS TWENTY FIVE MINUTES PAST TWELVE
//   27 IT IS TWENTY FIVE MINUTES PAST TWELVE
//   28 IT IS HALF PAST TWELVE
//   29 IT IS HALF PAST TWELVE
//   30 IT IS HALF PAST TWELVE
//   31 IT IS HALF PAST TWELVE
//   32 IT IS HALF PAST TWELVE
//   33 IT IS TWENTY FIVE MINUTES TO ONE
//   34 IT IS TWENTY FIVE MINUTES TO ONE
//   35 IT IS TWENTY FIVE MINUTES TO ONE
//   36 IT IS TWENTY FIVE MINUTES TO ONE
//   37 IT IS TWENTY FIVE MINUTES TO ONE
//   38 IT IS TWENTY MINUTES TO ONE
//   39 IT IS TWENTY MINUTES TO ONE
//   40 IT IS TWENTY MINUTES TO ONE
//   41 IT IS TWENTY MINUTES TO ONE
//   42 IT IS TWENTY MINUTES TO ONE
//   43 IT IS QUARTER TO ONE
//   44 IT IS QUARTER TO ONE
//   45 IT IS QUARTER TO ONE
//   46 IT IS QUARTER TO ONE
//   47 IT IS QUARTER TO ONE
//   48 IT IS TEN MINUTES TO ONE
//   49 IT IS TEN MINUTES TO ONE
//   50 IT IS TEN MINUTES TO ONE
//   51 IT IS TEN MINUTES TO ONE
//   52 IT IS TEN MINUTES TO ONE
//   53 IT IS FIVE MINUTES TO ONE
//   54 IT IS FIVE MINUTES TO ONE
//   55 IT IS FIVE MINUTES TO ONE
//   56 IT IS FIVE MINUTES TO ONE
//   57 IT IS FIVE MINUTES TO ONE
//   58 IT IS ONE O'CLOCK
//   59 IT IS ONE O'CLOCK

// Find the sqrt of a number using the basic operators
// (+, -, *, /) and without using the Math.sqrt() function.

// Construct a function, "intersection" that takes one argument, an array of arrays.
// When invoked, "intersection" compares each array within the array of arrays,
// and returns a new array with elements found in all of the arrays.

const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];

const input = [arr1, arr2, arr3];

// console.log(intersection(input)); // should log [5, 15];

// create map key/pair int
// forEach array add counter int
// convert object to array if count 3, then its all 3, return array

function intersection(inputs) {
  const values = {
    // [5]: 2 (Count)
  };

  inputs.forEach((array) => {
    array.forEach((num) => {
      if (values[num]) {
        values[num]++;
      } else {
        values[num] = 1;
      }
    });
  });

  const result = [];

  Object.entries(values).forEach(([n, count]) => {
    if (inputs.length === count) {
      result.push(n);
    }
  });

  return result;
}
console.log(intersection(input));
