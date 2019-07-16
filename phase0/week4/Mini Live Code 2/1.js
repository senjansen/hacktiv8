/*
  ================
  Format Uang (KBBI)
  ================

  [INSTRUCTIONS]

  formatUang adalah sebuah function yang menerima satu parameter berupa number.
  function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
  Rp1.500,00

  [RULE]
  - Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
  - Dilarang menggunakan regex .match dan lainnya!
*/

function formatUang (number) {
  let money = 'Rp'
  // Change number to string
  number = number.toString()
  let numLength = number.length
  for (let i = 0; i < numLength; i++) {
    if ((numLength - i) % 3 === 0 && i !== 0) {
      money = money + '.' + number[i]
    } else {
      money += number[i]
    }
  }
  money += ',00'
  return money
}

console.log(formatUang(7500)) // Rp7.500,00
console.log(formatUang(250)) // Rp250,00
console.log(formatUang(100000)) // Rp100.000,00
console.log(formatUang(1000000)) // Rp1.000.000,00
console.log(formatUang(4999999)) // Rp4.999.999,00
