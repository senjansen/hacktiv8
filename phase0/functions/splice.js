
function splice (arr, start, remove, ...rest) {
  let newArr = []
  let indexOfNewArr = 0

  for (let i = 0; i < arr.length; i++) {
    // Jumping the data that want to be removed
    if (i >= start && i < start + remove) {
      continue
    }

    // Insert to the array
    newArr[indexOfNewArr] = arr[i]
    indexOfNewArr++

    // If there are any new data that want to be added, insert from index start
    if (indexOfNewArr === start) {
      for (let j = 0; j < rest.length; j++) {
        newArr[indexOfNewArr] = rest[j]
        indexOfNewArr++
      }
    }
  }

  return newArr
}

let array = [0, 8, 2, 3, 4]

console.log(splice(array, 1, 1, 'tambah1', 'tambah2'))
