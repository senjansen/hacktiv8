// Exercise 4 - Looking for Modus
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to return the modus from an array number
function cariModus (arr) {
  let arrLength = arr.length
  let obj = {}
  let highestFreq = 0
  let highest = ''

  for (let counter = 0; counter < arrLength; counter++) {
    if (obj[arr[counter]] === undefined) {
      obj[arr[counter]] = 1
    } else {
      obj[arr[counter]] += 1
    }
  }

  for (let key in obj) {
    if (obj[key] > highestFreq) {
      highestFreq = obj[key]
      highest = key
    }
  }

  if (highestFreq === arrLength || Object.keys(obj).length === arrLength) {
    return -1
  } else {
    return Number(highest)
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])) // 4
console.log(cariModus([5, 10, 10, 6, 5])) // 5
console.log(cariModus([10, 3, 1, 2, 5])) // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])) // 3
console.log(cariModus([7, 7, 7, 7, 7])) // -1
