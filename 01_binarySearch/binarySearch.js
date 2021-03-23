const binarySearch = (list, searchItem) => {
  let low = 0
  let high = list.length - 1
  let mid
  let guess

  while (low < high) {
    mid = Math.ceil((high + low) / 2)
    guess = list[mid]

    if (guess === searchItem) {
      return mid
    }

    if (guess > searchItem) {
      high = mid - 1
    }

    if (guess < searchItem) {
      low = mid + 1
    }
  }

  return -1
}

const arr = [-112, -22, -5, -3, 0, 3, 4, 5, 66, 299, 333]

console.log(binarySearch(arr, -22)) // 1
console.log(binarySearch(arr, 333)) // 10
console.log(binarySearch(arr, 229)) // -1
