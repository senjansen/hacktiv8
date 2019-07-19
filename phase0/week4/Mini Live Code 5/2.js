/*
  /////////////////////
  FUNCTION TUKAR GANJIL
  /////////////////////
  Fungsi Tukar Ganjil akan mengubah besar dan kecil huruf apabila berada di index yang ganjil.
  [PROCESS]
  INPUT:
  'Dana K'
  PROCESS:
  1 => d (karena 1 ganjil)
  2 => a
  3 => N (karena 3 ganjil)
  4 => a
  5 => ' ' (diabaikan)
  6 => K
  OUTPUT:
  daNa K
  [RULES]
  - Dilarang menggunakan built in function apapun
*/

function tukarGanjil (str) {
  let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let newString = ''
  // Check the input string for each characters
  for (let i = 0; i < str.length; i++) {
    // If index is even, put directly the char into the newString
    if ((i + 1) % 2 === 0) {
      newString += str[i]
    } else {
      let isSymbol = true
      // If index is odd, check if it's alphabet and change the upper/lower case
      for (let j = 0; j < lowerCase.length; j++) {
        if (str[i] === lowerCase[j]) {
          newString += upperCase[j]
          isSymbol = false
          break
        }
        if (str[i] === upperCase[j]) {
          newString += lowerCase[j]
          isSymbol = false
          break
        }
      }
      // If it isn't an alphabet, it should be a symbol
      if (isSymbol) {
        newString += str[i]
      }
    }
  }
  return newString
}

// TEST CASES
console.log(tukarGanjil('Hello World')) // "heLlO woRlD"
console.log(tukarGanjil('I aM aLAY')) // "i AM alAy"
console.log(tukarGanjil('My Name is Bond!!')) // "my NAmE Is BOnD!!"
console.log(tukarGanjil('IT sHOULD bE me')) // "iT shOuLd BE mE"
console.log(tukarGanjil('001-A-3-5TrdYW')) // "001-a-3-5TRdyW"
