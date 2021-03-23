/**
 *
 * @param {array<number>} arr
 * @return {number}
 * sum([1, 2, 4]) => 7
 */

const sum = (arr) => {
  if (arr.length <= 1) {
    return arr[0];
  }

  return arr.shift() + sum(arr);
}

const arr = [1, 2, 3, 4, 32, 0, -33, 4, 5, 14, 22, 33]

console.log(sum(arr))
