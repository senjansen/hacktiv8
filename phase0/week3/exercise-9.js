// Exercise 9 - Looking for Mean
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to calculate mean of an array number
function cariMean (arr) {
  let sum = 0
  let mean = 0
  let arrayLength = arr.length

  for (let i = 0; i < arrayLength; i++) {
    sum += arr[i]
  }

  mean = Math.round(sum / arrayLength)
  return mean
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])) // 3
console.log(cariMean([3, 5, 7, 5, 3])) // 5
console.log(cariMean([6, 5, 4, 7, 3])) // 5
console.log(cariMean([1, 3, 3])) // 2
console.log(cariMean([7, 7, 7, 7, 7])) // 7
