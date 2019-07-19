/*
  /////////////////////
  FUNCTION MEDIAN GENAP
  /////////////////////
  Fungsi Median Genap adalah mencari nilai median yang berupa genap di array.
  [PROCESS]
  INPUT:
  [1, 3, 4, 5, 6, 7]
  PROCESS:
  genap = [4, 6]
  median = 5
  OUTPUT:
  5
  [RULES]
  - Dilarang menggunakan built in function selain .push()
*/

function medianGenap (arr) {
  let evenIndex = []
  let newArr = []
  // Find the index of even numbers
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenIndex.push(i)
    }
  }
  // Push the numbers from first even number until last even number in the array to new array
  for (let i = 0; i < arr.length; i++) {
    if (i >= evenIndex[0] && i <= evenIndex[evenIndex.length - 1]) {
      newArr.push(arr[i])
    }
  }
  // Find the median
  let median = Math.floor(newArr.length / 2)
  // Return the median number. If undefined --> return 'Tidak ada median'
  return (newArr[median] === undefined) ? 'Tidak ada median' : newArr[median]
};

// TEST CASES
console.log(medianGenap([1, 2, 3, 4, 5])) // 3
console.log(medianGenap([1, 3, 4, 10, 12, 13])) // 10
console.log(medianGenap([3, 4, 7, 6, 10])) // 6
console.log(medianGenap([1, 3, 3])) // Tidak ada median
console.log(medianGenap([7, 7, 8, 8])) // 8
