// Exercise 5 - Palindrome
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to return true or false based on palindrom
function palindrome (kata) {
  // reverse the input using several array built-in functions
  let reverseString = kata.split('').reverse().join('')
  console.log(kata)
  console.log(reverseString)
  return reverseString === kata
}

// TEST CASES
console.log(palindrome('katak')) // true
console.log(palindrome('blanket')) // false
console.log(palindrome('civic')) // true
console.log(palindrome('kasur rusak')) // true
console.log(palindrome('mister')) // false
