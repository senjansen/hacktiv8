// Exercise 4 - Total Digit (Recursion)
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to add total digit in a number using recursion
function totalDigitRekursif (angka) {
  let number = angka.toString()

  if (number.length > 1) {
    let firstNumber = parseInt(number[0])
    let temp = ''
    for (let i = 1; i < number.length; i++) {
      temp += number[i]
    }
    let restNumber = parseInt(temp)
    return firstNumber + totalDigitRekursif(restNumber)
  } else {
    return angka
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)) // 8
console.log(totalDigitRekursif(1542)) // 12
console.log(totalDigitRekursif(5)) // 5
console.log(totalDigitRekursif(21)) // 3
console.log(totalDigitRekursif(11111)) // 5
