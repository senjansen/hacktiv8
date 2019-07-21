/*
  CHANGE WORDS
  Change words adalah sebuah fungsi yang menerima input
  berupa multi dimensional array yang berisi kata dan
  akan mengembalikan nilai baru berupa array multidimensional yang sudah diubah kata-katanya.

  RULES:
  1. Asumsi index row dan col selalu dimulai dari 0
  2. Pertambahan index row dan col akan menentukan bagaimana kata tersebut akan diolah:
    a. Apabila hasil pertambahan adalah bilangan prima maka hilangkan semua huruf vokal (a, e, i, u, o)
    b. Apabila hasil pertambahan adalah angka genap maka balik atau reversed kata tersebut
    c. Apabila hasil pertambahan adalah angka ganil maka ubah semua menjadi huruf besar

  EXAMPLE:
  INPUT: [
    ["cat", "fish"],
    ["dog", "cow"]
  ]
  OUTPUT: [
      ["tac", "FISH"],
      ["DOG", "wc"]
    ]

  EXPLANATION
    1. pertambahan index pada kata "cat" 0 berarti dia hanya bilangan genap sehingga kata "cat" dibalik menjadi "tac"
    2. pertambahan index pada kata "fish" dan "dog" adalah bilangan ganjila sehingga kedua kata tersebut diubah ke huruf besar
    3. Pertambahan pada kata "cow" adalah bilangan genap dan prima sehingga kata tersebut dibalik dan dihilangkan huruf vokalnya

  RULES:
    1. dilarang menggunakan built in function .split, .reversed, .join, .filter, .map dan sejenisnya
*/

function changeWords (words) {
  // Do looping as much array words in the first dimension
  for (let i = 0; i < words.length; i++) {
    // Do looping as much array elements in the second dimension
    for (let j = 0; j < words[i].length; j++) {
      // Sum index i and index j
      let sumIandJ = i + j
      // If sum result is prime number, remove the vowel alphabet in the string
      if (primeNumber(sumIandJ)) {
        words[i][j] = removeVocals(words[i][j])
      }
      // If sum result is even number, reverse the string
      if (sumIandJ % 2 === 0) {
        // Reverse the string in the array
        words[i][j] = reverseString(words[i][j])
      } else {
        // If the sum result is odd number, change the string to upper case
        words[i][j] = makeBigLetter(words[i][j])
      }
    }
  }
  return words
}

// Create function to check if the number is prime number or not
function primeNumber (num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return num > 1
}

// Create function to remove vocals from a string input
function removeVocals (str) {
  let removeWord = 'aiueo'
  let result = ''
  for (let i = 0; i < str.length; i++) {
    let isVocal = false
    // Check the alphabet with the removeWord string elements
    for (let j = 0; j < removeWord.length; j++) {
      if (str[i] === removeWord[j]) {
        isVocal = true
      }
    }
    if (isVocal === false) {
      result += str[i]
    }
  }
  return result
}

// Create function to reverse string
function reverseString (str) {
  var newString = ''
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i]
  }
  return newString
}

// Create function to make string becoming upper case
function makeBigLetter (str) {
  return str.toUpperCase()
}

// function upperCase (string) {
//   var lower = 'abcdefghijklmnopqrstuvwxyz'
//   var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   var newString = ''
//   for (var i = 0; i < string.length; i++) {
//     for (var j = 0; j < lower.length; j++) {
//       if (string[i] === lower[j]) {
//         newString = newString + upper[j]
//       }
//     }
//   }
//   return newString
// }

var words = [
  ['cat', 'dog', 'fish'],
  ['cat', 'dog', 'fish'],
  ['cat', 'dog', 'fish']
]
console.log(changeWords(words))
/*
[
  [ 'tac', 'DOG', 'hsf' ],
  [ 'CAT', 'gd', 'FSH' ],
  [ 'tc', 'DG', 'hsif' ]
]
*/
