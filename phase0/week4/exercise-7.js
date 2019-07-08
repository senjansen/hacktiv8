// Exercise 7 - Sorting Alphabet
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to sort alphabet in a string
function urutkanAbjad (str) {
  let sortedString = str.split('')
  return sortedString.sort().join('')
}

// TEST CASES
console.log(urutkanAbjad('hello')) // 'ehllo'
console.log(urutkanAbjad('truncate')) // 'acenrttu'
console.log(urutkanAbjad('developer')) // 'deeeloprv'
console.log(urutkanAbjad('software')) // 'aeforstw'
console.log(urutkanAbjad('aegis')) // 'aegis'
