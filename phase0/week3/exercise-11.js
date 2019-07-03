// Exercise 11 - Arithmetic Progression
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to check the arithmetic series of an array number
function tentukanDeretAritmatika (arr) {
  let arrLength = arr.length
  let difference = 0
  let newDifference = 0

  for (let i = 0; i < arrLength - 1; i++) {
    if (i === 0) {
      difference = arr[i + 1] - arr[i]
    } else {
      newDifference = arr[i + 1] - arr[i]
      if (newDifference === difference) {
        return true
      } else {
        return false
      }
    }
  }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])) // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])) // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])) // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])) // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])) // false
