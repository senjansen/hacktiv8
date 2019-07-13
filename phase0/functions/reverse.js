// Manual reverse() => The reverse() method reverses an array in place.
// The first array element becomes the last, and the last array element becomes the first.

function manualReverse (arr) {
  let newArray = []
  let indexOfNewArray = 0

  // looping, masukkan data ke array baru, mulai dari index terakhir s.d. index pertama
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray[indexOfNewArray] = arr[i]
    indexOfNewArray++
  }
  return newArray
}

console.log(manualReverse([1, 3, 2, 6, 4, 5]))
// [ 5, 4, 6, 2, 3, 1 ]
