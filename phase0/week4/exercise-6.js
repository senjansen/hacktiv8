// Exercise 6 - Minimum Digit of Multiplication
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to return the minimum digit of multiplication from a number
function digitPerkalianMinimum (angka) {
  let resultArr = []
  let result = ''
  // Check only until square root of the number
  for (let num1 = 1; num1 <= Math.sqrt(angka); num1++) {
    let combine = ''
    // Find all of the factor from the number and push to the array
    if (angka % num1 === 0) {
      let num2 = angka / num1
      combine = combine + num1 + num2
      // console.log('Combine:' + combine)
      resultArr.push(combine)
    }
  }

  for (let counter = 0; counter < resultArr.length; counter++) {
    if (!result || result > resultArr[counter].length) {
      result = resultArr[counter].length
    }
    // console.log('Result:' + result)
  }
  return result
}

// TEST CASES
console.log(digitPerkalianMinimum(24)) // 2
console.log(digitPerkalianMinimum(90)) // 3
console.log(digitPerkalianMinimum(20)) // 2
console.log(digitPerkalianMinimum(179)) // 4
console.log(digitPerkalianMinimum(1)) // 2
