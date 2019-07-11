// Exercise 14 - Password Generator
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to change vocals to the next alphabet (a->b, I->J)
function changeVocals (str) {
  // code di sini
}

// Create function to reverse the string
function reverseWord (str) {
  // code di sini
}

// Create function to change the lower to upper case and upper to lower case
function setLowerUpperCase (str) {
  // code di sini
}

// Create function to remove spaces in the string
function removeSpaces (str) {
  // code di sini
}

function passwordGenerator (name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  } else {
    changeVocals(name)
    reverseWord(name)
    setLowerUpperCase(name)
    removeSpaces(name)
    return name
  }
}

console.log(passwordGenerator('Sergei Dragunov')) // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')) // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')) // 'JFXFLb'
console.log(passwordGenerator('Alex')) // 'Minimal karakter yang diinputkan adalah 5 karakter'
