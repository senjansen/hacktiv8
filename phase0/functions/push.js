// Manual push() => The push() method adds one or more elements to the end of an array and returns the new length of the array.

function push (arr, ...rest) {
  let indexOfArr = arr.length - 1

  // Do loop, to add rest value to array
  for (let i = 0; i < rest.length; i++) {
    indexOfArr++
    arr[indexOfArr] = rest[i]
  }

  return arr
}

let array = [0, 1, 2, 3, 4, 5]
console.log(push(array, 'tambah1', 'tambah2')) // [0, 1, 2, 3, 4, 5, 'tambah1', 'tambah2']
