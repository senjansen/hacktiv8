// Exercise 10 - Unique Multiplication
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to calculate multiplication of an array number
function perkalianUnik (arr) {
  let arrayLength = arr.length
  let multiplicationResult = []
  let sum = 1

  for (let i = 0; i < arrayLength; i++) {
    for (let j = 0; j < arrayLength; j++) {
      if (j !== i) {
        sum *= arr[j]
      }
    }
    multiplicationResult.push(sum)
    sum = 1
  }
  return multiplicationResult
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])) // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])) // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])) // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])) // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])) // [160, 320, 40, 32, 160]
