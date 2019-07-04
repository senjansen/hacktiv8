// Exercise 1 - Prime Numbers
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to check prime number or not
function angkaPrima (angka) {
  if (angka === 1) {
    return false
  } else if (angka === 2) {
    return true
  } else {
    for (let divider = 2; divider < angka; divider++) {
      if (angka % divider === 0) {
        return false
      }
    }
    return true
  }
}

// TEST CASES
console.log(angkaPrima(3)) // true
console.log(angkaPrima(7)) // true
console.log(angkaPrima(6)) // false
console.log(angkaPrima(23)) // true
console.log(angkaPrima(33)) // false
