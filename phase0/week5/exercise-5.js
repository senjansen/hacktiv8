// Exercise 5 - Multiplication (Recursion)
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to multiply all digits in a number using recursion until one digit left
function kaliTerusRekursif (angka) {
  let number = angka.toString()

  if (number.length > 1) {
    let result = 1
    for (let i = 0; i < number.length; i++) {
      result *= parseInt(number[i])
    }
    return kaliTerusRekursif(result)
  } else {
    return angka
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)) // 8
console.log(kaliTerusRekursif(3)) // 3
console.log(kaliTerusRekursif(24)) // 8
console.log(kaliTerusRekursif(654)) // 0
console.log(kaliTerusRekursif(1231)) // 6
