// Exercise 13 - Nearest Target
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to check the geometry series of an array number
function targetTerdekat (arr) {
  // Declare variables
  let arrLength = arr.length;
  let xFlag = 0;
  let oFlag = 0;
  let counterDistance = 0;
  let highestCounterDistance = 0;

  for (let counter = 0; counter < arrLength; counter++) {
    if (arr[counter] === 'x') {
      xFlag = 1;
      oFlag = 0;
      counterDistance = 0;
    } else if (arr[counter] === 'o') {
      oFlag = 1;
      xFlag = 0;
      counterDistance = 0;
    } else if (arr[counter] === ' ') {
      counterDistance++
    }
  }
  if (x === 1) {

  }
  return counterDistance;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])) // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])) // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])) // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])) // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])) // 2
