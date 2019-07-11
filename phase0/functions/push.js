// Manual push() => The push() method adds one or more elements to the end of an array and returns the new length of the array.

function push (arr, ...rest) {
  var indexOfArr = arr.length - 1

  // do loop, to add rest value to array
  for (var i = 0; i < rest.length; i++) {
    indexOfArr++
    arr[indexOfArr] = rest[i]
  }

  return arr
}

var array = [0, 1, 2, 3, 4, 5]

console.log(push(array, 'tambah1', 'tambah2'))
