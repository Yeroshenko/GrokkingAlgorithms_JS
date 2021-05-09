/**
 *
 * @param {array<number>} arr
 * @returns {array<number>}
 */

const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr
}

const arr = [2, -33, 32, -223, 122, 1, 2, 4]

console.log(bubbleSort(arr)) // [ -223, -33, 1, 2, 2, 4, 32, 122 ]
