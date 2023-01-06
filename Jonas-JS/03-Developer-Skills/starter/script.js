// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

function problem1(array) {
  let maxValue = array[0];
  let minValue = array[0];
  for (let i of array) {
    if (typeof i !== 'number') {
      continue;
    }
    if (array[0] < i && i > maxValue) {
      maxValue = i;
    }
    if (array[0] > i && minValue > i) {
      minValue = i;
    }
  }
  const amplitude = maxValue - minValue;
  return `Ampltitude: ${amplitude}`;
}
console.log(problem1(temperatures));

// PROBLEM 2:
// Function should now receive 2 arrays of temps

function problem2(array1, array2) {
  const mergeArray = array1.concat(array2);
  console.log(mergeArray);
  let maxValue = mergeArray[0];
  let minValue = mergeArray[0];
  for (let i of mergeArray) {
    if (typeof i !== 'number') continue;
    if (maxValue < i) {
      maxValue = i;
    }
    if (minValue > i) {
      minValue = i;
    }
  }
  console.log(maxValue);
  console.log(minValue);
  const amplitude = maxValue - minValue;
  return `Amplitude: ${amplitude}`;
}
const problem2Amplitude = problem2([3, 5, 1], [9, 0, 5]);
console.log(problem2Amplitude);
console.log(problem2([3, 5, 1], [9, 0, 5]));
