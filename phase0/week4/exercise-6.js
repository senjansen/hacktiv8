// Exercise 6 - Minimum Digit of Multiplication
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to return the minimum digit of multiplication from a number
function digitPerkalianMinimum (angka) {
  let resultArr = []
  let result = ''

  for (let num1 = 1; num1 <= angka; num1++) {
    let combine = ''
    if (angka % num1 === 0) {
      let num2 = angka / num1
      combine = combine + num1 + num2
      console.log('Combine:' + combine)
      resultArr.push(combine)
    }
  }

  for (let counter = 0; counter < resultArr.length; counter++) {
    if (result === '') {
      result = resultArr[counter].length
    }
    if (result > resultArr[counter].length) {
      result = resultArr[counter].length
    }
    console.log('Result:' + result)
  }
  return result
}

// TEST CASES
console.log(digitPerkalianMinimum(24)) // 2
console.log(digitPerkalianMinimum(90)) // 3
console.log(digitPerkalianMinimum(20)) // 2
console.log(digitPerkalianMinimum(179)) // 4
console.log(digitPerkalianMinimum(1)) // 2
