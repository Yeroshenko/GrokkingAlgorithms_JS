/**
 *
 * @param {number} x
 * @return {number}
 * factorial(4) => 24
 */

const factorial = (x) => {
  if (x === 1) {
    return x
  }
  return x * factorial(x - 1)
}

console.log(factorial(3))
