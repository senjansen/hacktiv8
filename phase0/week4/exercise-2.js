// Exercise 2 - Greatest Common Divisor
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to check the greatest common divisor among 2 numbers
function fpb (angka1, angka2) {
  let greatestCommonDivisor = 0
  let divisorAngka1 = []
  let divisorAngka2 = []

  for (let divider = 1; divider <= angka1; divider++) {
    if (angka1 % divider === 0) {
      divisorAngka1.push(divider)
    }
  }

  for (let divider = 1; divider <= angka2; divider++) {
    if (angka2 % divider === 0) {
      divisorAngka2.push(divider)
    }
  }

  divisorAngka1.sort(function (a, b) { return a - b })
  divisorAngka2.sort(function (a, b) { return a - b })
  // console.log(divisorAngka1)
  // console.log(divisorAngka2)

  for (let counter = 0; counter < divisorAngka1.length; counter++) {
    for (let counter2 = 0; counter2 < divisorAngka2.length; counter2++) {
      if (divisorAngka1[counter] === divisorAngka2[counter2]) {
        greatestCommonDivisor = divisorAngka1[counter]
      }
    }
  }

  return greatestCommonDivisor
}

// TEST CASES
console.log(fpb(12, 16)) // 4
console.log(fpb(50, 40)) // 10
console.log(fpb(22, 99)) // 11
console.log(fpb(24, 36)) // 12
console.log(fpb(17, 23)) // 1
