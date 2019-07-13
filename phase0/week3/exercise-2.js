// Exercise 2 - Accessing Value in Array
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to reverse value in array
function balikString (arrayInput) {
  let arrayLength = arrayInput.length
  let reverseWord = ''

  for (let counter = 1; counter <= arrayLength; counter++) {
    reverseWord += arrayInput[arrayLength - counter]
  }
  return reverseWord
}

// Declare variable
let arrayInput = 'hello world!'

// Print reverse string
console.log(balikString(arrayInput))

// input "hello world!"
// output "!dlrow olleh"
