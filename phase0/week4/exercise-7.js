// Exercise 7 - Sorting Alphabet
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to sort alphabet in a string
function urutkanAbjad (str) {
  // Split the string to array
  let sortStr = str.split('')
  // Compare the first item with the second. If the first item is bigger than the
  // second item. you swap them so that the bigger one stays in the second position.
  for (let i = sortStr.length; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (sortStr[j - 1] > sortStr[j]) {
        let temp = sortStr[j - 1]
        sortStr[j - 1] = sortStr[j]
        sortStr[j] = temp
      }
    }
  }
  // Join the array into a string
  return sortStr.join('')
}

// TEST CASES
console.log(urutkanAbjad('hello')) // 'ehllo'
console.log(urutkanAbjad('truncate')) // 'acenrttu'
console.log(urutkanAbjad('developer')) // 'deeeloprv'
console.log(urutkanAbjad('software')) // 'aeforstw'
console.log(urutkanAbjad('aegis')) // 'aegis'

// With refactoring the code
/* function urutkanAbjad (str) {
  let sortedString = str.split('')
  return sortedString.sort().join('')
} */
