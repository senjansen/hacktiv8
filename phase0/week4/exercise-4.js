// Exercise 4 - Looking for Modus
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to return the modus from an array number
function cariModus (arr) {
  let modus = 0 // For modus value
  let mostFrequent = 1 // To save the most frequent char
  let counter = 0 // To count character appearance frequency
  let totalCount = 0 // To calculate total counter that was found
  let length = arr.length

  for (let i = 0; i < length; i++) {
    counter = 0
    for (let j = 0; j < length; j++) {
      if (arr[i] === arr[j]) {
        counter++
      }
    }
    // If counter value is bigger than mostFrequent, change mostFrequent and modus value
    if (counter > mostFrequent) {
      mostFrequent = counter
      modus = arr[i]
    }
    // Add counter that is found into total
    totalCount += counter
  }
  // If counter average is equal to most frequent counter it isn't a modus
  if ((totalCount / length) === mostFrequent) {
    modus = -1
  }
  return modus
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])) // 4
console.log(cariModus([5, 10, 10, 6, 5])) // 5
console.log(cariModus([10, 3, 1, 2, 5])) // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])) // 3
console.log(cariModus([7, 7, 7, 7, 7])) // -1
