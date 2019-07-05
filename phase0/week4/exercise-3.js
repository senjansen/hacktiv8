// Exercise 3 - Looking for Median
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to check the median from an array
function cariMedian (arr) {
  // Declare variable for scope function
  let arrLength = arr.length
  let median = 0
  let value1 = 0
  let value2 = 0

  // console.log('Array length: ' + arrLength)
  if (arrLength % 2 === 0) { // if array length is even, find the average of two mid values
    value1 = (arrLength / 2)
    value2 = value1 - 1
    // console.log('Value 1: ' + value1)
    // console.log('Value 2: ' + value2)
    median = (arr[value1] + arr[value2]) / 2
  } else if (arrLength % 2 !== 0) { // if array length is odd, find the mid value directly
    median = arr[Math.ceil((arrLength / 2) - 1)]
  }
  // console.log('Median: ' + median)
  return median
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])) // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])) // 7
console.log(cariMedian([3, 4, 7, 6, 10])) // 7
console.log(cariMedian([1, 3, 3])) // 3
console.log(cariMedian([7, 7, 8, 8])) // 7.5
