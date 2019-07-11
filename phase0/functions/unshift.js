// Manual unshift() => The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

function unshift (arr, ...rest) {
  let indexOfNewArr = 0
  let newArr = []

  // Do loop, to create new array with rest value
  for (let i = 0; i < rest.length; i++) {
    newArr[indexOfNewArr] = rest[i]
    indexOfNewArr++
  }

  // Do another loop, to add arr value to the new array
  for (let j = 0; j < arr.length; j++) {
    newArr[indexOfNewArr] = arr[j]
    indexOfNewArr++
  }

  return newArr
}

let array = [0, 1, 2, 3, 4, 5]
console.log(unshift(array, 'tambah1', 'tambah2')) // ['tambah1', 'tambah2', 0, 1, 2, 3, 4, 5]
