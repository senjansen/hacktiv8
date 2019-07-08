// Exercise 9 - Check AB
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to check the distance from a to b with minimum 3 characters distance
function checkAB (num) {
  num = num.split('')

  // console.log(num)
  for (let counter = 0; counter < num.length; counter++) {
    if (num[counter] === 'a' && (num[counter - 4] === 'b' || num[counter + 4] === 'b')) {
      return true
    }
  }
  return false
}

// TEST CASES
console.log(checkAB('lane borrowed')) // true
console.log(checkAB('i am sick')) // false
console.log(checkAB('you are boring')) // true
console.log(checkAB('barbarian')) // true
console.log(checkAB('bacon and meat')) // false
