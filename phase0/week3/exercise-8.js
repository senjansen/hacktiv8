// Exercise 8 - The Biggest Number Combination
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to choose two digit biggest number combination
function pasanganTerbesar (num) {
  // Change num from number to string data type
  num = num.toString()
  let numLength = num.length
  let currentNumber = 0
  let biggestValue = 0

  // Compare the current two digit number with the biggest value
  for (let i = 0; i < numLength - 1; i++) {
    currentNumber = Number(num[i] + num[i + 1])
    if (currentNumber > biggestValue) {
      biggestValue = currentNumber
    }
  }
  return biggestValue
}

// TEST CASES
console.log(pasanganTerbesar(641573)) // 73
console.log(pasanganTerbesar(12783456)) // 83
console.log(pasanganTerbesar(910233)) // 91
console.log(pasanganTerbesar(71856421)) // 85
console.log(pasanganTerbesar(79918293)) // 99
console.log(4134)
