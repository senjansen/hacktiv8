// Manual pop() => The pop() method removes the last element from an array and returns that element.

function pop (arr) {
  let indexOfTempArr = 0
  let tempArr = []

  // do loop. to create new array without last data of array
  for (let i = 0; i < array.length - 1; i++) {
    tempArr[indexOfTempArr] = arr[i]
    indexOfTempArr++
  }

  return tempArr
}

let array = [0, 1, 2, 3, 4]

console.log(pop(array))
