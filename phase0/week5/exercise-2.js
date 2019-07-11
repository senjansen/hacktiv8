// Exercise 2 - Password Generator
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to change vocals to the next alphabet (a->b, I->J)
function changeVocals (str) {
  // First, split the string
  str = str.split('')
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'a': case 'e': case 'i': case 'o': case 'u':
      case 'A': case 'E': case 'I': case 'O': case 'U':
        str[i] = String.fromCharCode((str[i].charCodeAt(0) + 1))
        break
      default:
        break
    }
  }
  return str.join('')
}

// Create function to reverse the string
function reverseWord (str) {
  let newWord = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newWord += str[i]
  }
  return newWord
}

// Create function to change the lower to upper case and upper to lower case
function setLowerUpperCase (str) {
  let newWord = ''
  for (let i = 0; i < str.length; i++) {
    let temp = str[i]
    if (temp === temp.toUpperCase()) {
      newWord += temp.toLowerCase()
    } else if (temp === temp.toLowerCase()) {
      newWord += temp.toUpperCase()
    } else {
      newWord += temp
    }
  }
  return newWord
}

// Create function to remove spaces in the string
function removeSpaces (str) {
  let newWord = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      newWord += str[i]
    }
  }
  return newWord
}

function passwordGenerator (name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  } else {
    return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
  }
}

console.log(passwordGenerator('Sergei Dragunov')) // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')) // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')) // 'JFXFLb'
console.log(passwordGenerator('Alex')) // 'Minimal karakter yang diinputkan adalah 5 karakter'
