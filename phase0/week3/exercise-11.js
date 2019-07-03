// Exercise 11 - Arithmetic Progression
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to check the arithmetic series of an array number
function tentukanDeretAritmatika (arr) {
  let series = 0
  let checker = false

  series = arr[1] - arr[0]

  for (let counter = 1; counter < arr.length - 1; counter++) {
    if (arr[counter + 1] - arr[counter] === series) {
      checker = true
    } else {
      checker = false
    }
    // console.log('array [counter+1] : ' + arr[counter + 1])
    // console.log('array [counter] : ' + (arr[counter]))
    // console.log('Counter ' + counter + ': = ' + checker)
  }

  return checker
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])) // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])) // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])) // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])) // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])) // false
