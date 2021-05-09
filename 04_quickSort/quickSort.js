
const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr
  }


  const pivotPosition = Math.floor(Math.random() * arr.length)
  const pivot = arr[pivotPosition]
  const less = arr.filter(val => val < pivot)
  const greater = arr.filter(val => val > pivot)
  const equal = arr.filter(val => val === pivot)

  return [...quickSort(less), ...equal, ...quickSort(greater)]
}

const arr = [2, -33, 32, -223, 122, 1, 2, 4, -22, 334, 211, -4]

console.log(quickSort(arr))
