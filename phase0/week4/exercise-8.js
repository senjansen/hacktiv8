// Exercise 8 - Change Upper Lower Case in String
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to change the upper and lower case from a string
function tukarBesarKecil (kalimat) {
  let swap = kalimat.split('')
  // Check ASCII for each character
  for (let counter = 0; counter < kalimat.length; counter++) {
    if (swap[counter].charCodeAt() >= 65 && swap[counter].charCodeAt() <= 90) {
      swap[counter] = swap[counter].toLowerCase()
    } else if (swap[counter].charCodeAt() >= 97 && swap[counter].charCodeAt() <= 122) {
      swap[counter] = swap[counter].toUpperCase()
    }
  }
  return swap.join('')

  // Or you can use RegEx using built-in functions replace() and match()
  // let swap = kalimat.replace(/([a-z]+)|([A-Z]+)/g, function (match, char) { return char ? match.toUpperCase() : match.toLowerCase() })
  // return swap
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')) // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')) // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')) // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')) // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')) // "001-a-3-5tRDyw"
