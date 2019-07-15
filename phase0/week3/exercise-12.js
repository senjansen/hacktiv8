// Exercise 12 - Geometry Progression
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to check the geometry series of an array number
function tentukanDeretGeometri (arr) {
  let multiplier = arr[1] / arr[0]
  let checker = false

  for (let counter = 1; counter < arr.length - 1; counter++) {
    if (arr[counter + 1] / arr[counter] === multiplier) {
      checker = true
    } else {
      checker = false
      break
    }
    // console.log('Counter: ' + counter + ' = ' + checker);
  }
  return checker
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])) // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])) // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])) // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])) // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])) // false
