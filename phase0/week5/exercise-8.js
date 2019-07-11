// Exercise 8 - Delete Symbol (Regex)
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to remove any characters other than a-z and 0-9 using Regex
function hapusSimbol (str) {
  return str.replace(/[^a-z0-9]/g, '')
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')) // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')) // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')) // makan
console.log(hapusSimbol('coding')) // coding
console.log(hapusSimbol('1+3-5*2=100')) // 1352100
