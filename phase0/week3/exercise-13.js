// Exercise 13 - Nearest Target
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to check the nearest distance between 'x' & 'o' in an array
function targetTerdekat (arr) {
  // Declare variables
  let arrLength = arr.length
  let xFlag = false
  let oFlag = false
  let counterDistance = 0
  let lowestCounterDistance = 0

  // Check the first component of the array
  if (arr[0] === 'x') {
    xFlag = true
    oFlag = false
    counterDistance = 0
  } else if (arr[0] === 'o') {
    oFlag = true
    xFlag = false
    counterDistance = 0
  } else if (arr[0] === ' ') {
    xFlag = false
    oFlag = false
    counterDistance = 0
  }

  // Check the next components of the array
  for (let counter = 1; counter < arrLength; counter++) {
    // console.log('Array value: ' + arr[counter])
    if (arr[counter] === 'x' && xFlag === true) { // if previous component is x and current component is x
      xFlag = true
      oFlag = false
      counterDistance = 0
      // console.log('Counter distance:' + counterDistance + ' at ' + counter)
    } else if (arr[counter] === 'x' && oFlag === true) { // if previous component is o and current component is x
      xFlag = true
      oFlag = false
      counterDistance++
      // console.log('Counter distance:' + counterDistance + ' at ' + counter)
      if (lowestCounterDistance === 0) {
        lowestCounterDistance = counterDistance
      } else {
        if (counterDistance < lowestCounterDistance) {
          lowestCounterDistance = counterDistance
        }
      }
      lowestCounterDistance = counterDistance
      counterDistance = 0
    } else if (arr[counter] === 'x' && xFlag === false && oFlag === false) { // if the first component is ' ' and current component is x
      xFlag = true
      oFlag = false
      counterDistance = 0
      // console.log('Counter distance:' + counterDistance + ' at ' + counter)
    } else if (arr[counter] === 'o' && xFlag === true) { // if previous component is x and current component is o
      oFlag = true
      xFlag = false
      counterDistance++
      // console.log('Counter distance:' + counterDistance + ' at ' + counter)
      if (lowestCounterDistance === 0) {
        lowestCounterDistance = counterDistance
      } else {
        if (counterDistance < lowestCounterDistance) {
          lowestCounterDistance = counterDistance
        }
      }
      lowestCounterDistance = counterDistance
      counterDistance = 0
    } else if (arr[counter] === 'o' && oFlag === true) { // if previous component is o and current component is o
      oFlag = true
      xFlag = false
      counterDistance = 0
      // console.log('Counter distance:' + counterDistance + ' at ' + counter)
    } else if (arr[counter] === 'o' && xFlag === false && oFlag === false) { // if the first component is ' ' and current component is o
      oFlag = true
      xFlag = false
      counterDistance = 0
      // console.log('Counter distance:' + counterDistance + ' at ' + counter)
    } else if (arr[counter] === ' ' && xFlag === true) { // if the previous component is x and the current component is ' '
      xFlag = true
      oFlag = false
      counterDistance++
      // console.log('Counter distance:' + counterDistance + ' at ' + counter)
    } else if (arr[counter] === ' ' && oFlag === true) { // if the previous component is o and the current component is ' '
      oFlag = true
      xFlag = false
      counterDistance++
      // console.log('Counter distance:' + counterDistance + ' at ' + counter)
    } else if (arr[counter] === ' ' && xFlag === false && oFlag === false) { // if the first component is ' ' and current component is ' '
      oFlag = false
      xFlag = false
      counterDistance = 0
      // console.log('Counter distance:' + counterDistance + ' at ' + counter)
    }
    // console.log('Lowest Counter distance:' + lowestCounterDistance + ' at ' + counter)
  }
  return lowestCounterDistance
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])) // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])) // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])) // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])) // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])) // 2
