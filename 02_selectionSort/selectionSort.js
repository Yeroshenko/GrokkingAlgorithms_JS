/**
 * Finds smallest number in array
 * @param {array<number>} arr
 * @return {number} smallestIndex
 */

const findSmallest = (arr) => {
  let smallest = arr[0]
  let smallestIndex = 0

  arr.forEach((item, index) => {
    if (item < smallest) {
      smallest = item
      smallestIndex = index
    }
  })

  return smallestIndex
}

/**
 * Sorts numbers in array using selectionSort
 * @param {array<number>} arr
 * @return {array<number>}
 */

const selectionSort = (arr) => {
  const newArr = []

  for (let i = 0; 0 < arr.length; i++) {
    newArr.push(arr[findSmallest(arr)])
    arr.splice(findSmallest(arr), 1)
  }

  return newArr
}

const arr = [2, -33, 32, -223, 122, 1, 4, -22, 334, 211, -4]

console.log(selectionSort(arr)) // [-223, -33, -22, -4, 1, 2, 4, 32, 122, 211, 334]

