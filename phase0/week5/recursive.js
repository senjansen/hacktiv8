// Lecture on Monday, 22 July 2019
// By Armedi
// Modular Function & Recursive

function sumNumbers (numbers) {
  // var result = 0
  // for (var i = 0; i < numbers.length; i++) {
  //   result += numbers[i]
  // }

  // BASE CASE
  if (numbers.length === 0) {
    return 0
  } else {
    return numbers[0] + sumNumbers(numbers.slice(1))
  }
}

// console.log(sumNumbers([1, 2, 3, 4, 5]))

function balikKata (word) {
  if (word.length === 0) {
    return ''
  } else {
    var sisa = word.slice(0, word.length - 1)
    return word[word.length - 1] + balikKata(sisa)
  }
}

// console.log(balikKata('humble fox'))

function cekPalindrome (word) {
  console.log(word)
  if (word.length === 0 || word.length === 1) {
    return true
  }
  if (word[0] !== word[word.length - 1]) {
    return false
  }
  var sisa = word.slice(1, word.length - 1)
  return cekPalindrome(sisa)
}

// console.log(cekPalindrome('katak'))
// console.log(cekPalindrome('kotak'))
// console.log(cekPalindrome('noon'))
