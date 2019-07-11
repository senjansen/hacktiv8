// Manual shift() => The shift() method removes the first element from an array and returns that removed element.

function shift (arr) {
  let indexOfTempArr = 0
  let tempArr = []

  // Do loop, to create new array without first data of array
  for (let i = 1; i < arr.length; i++) {
    tempArr[indexOfTempArr] = arr[i]
    indexOfTempArr++
  }
  arr = tempArr
  return arr
}

let array = [0, 1, 2, 3, 4]
console.log(shift(array)) // [1, 2, 3, 4]
