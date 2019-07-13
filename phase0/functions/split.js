// Manual split() => The split() method splits a String object into an array of strings
// by separating the string into substrings, using a specified separator string to determine
// where to make each split

function manualSplit (string, separator) {
  let result = []
  let indexOfResult = 0
  let tempData = ''

  for (let i = 0; i < string.length; i++) {
    // Check separator pattern
    let separatorPattern = true
    let indexOfSeparatorPattern = 0

    // Check if in input there is separator or not
    for (let j = i; indexOfSeparatorPattern < separator.length; j++) {
      if (string[j] !== separator[indexOfSeparatorPattern]) {
        separatorPattern = false
        break
      }
      indexOfSeparatorPattern++
    }
    // Save string's character that isn't separator into tempData
    if (separatorPattern === false) {
      tempData += string[i]
    } else { // Do push data into array if it meets with separator
      result[indexOfResult] = tempData
      indexOfResult++
      tempData = ''
      // Jump the loop according to the separator's character length
      i = i + separator.length - 1
    }
    // Adding data after the last separator into the array
    if (i === string.length - 1) {
      result[indexOfResult] = tempData
    }
  }
  return result
}

let answer1 = manualSplit('aku,kamu,dia', ',')
let answer2 = manualSplit('aku dan kamu', ' dan ')
console.log(answer1) // [ 'aku', 'kamu', 'dia' ]
console.log(answer2) // [ 'aku', 'kamu' ]
