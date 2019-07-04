// Exercise 14 - Grouping Numbers
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to group numbers in a multidimensional array
function mengelompokkanAngka (arr) {
  let arrLength = arr.length
  let groupingArray = [[], [], []]

  for (let counter = 0; counter < arrLength; counter++) {
    if (arr[counter] % 3 === 0) {
      groupingArray[2].push(arr[counter])
    } else if (arr[counter] % 2 === 0) {
      groupingArray[0].push(arr[counter])
    } else {
      groupingArray[1].push(arr[counter])
    }
  }
  return groupingArray
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])) // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])) // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])) // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])) // [ [], [], [] ]
