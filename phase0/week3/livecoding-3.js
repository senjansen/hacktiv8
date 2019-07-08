// Live Coding Week 3 - Question 3
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
  /////////////
  pyramidNumber
  /////////////

  pyramidNumber adalah suatu program untuk menampilkan piramida.

  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var max = 5

  [OUTPUT]
    1
    22
    333
    4444
    55555

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var max = 1
  [OUTPUT]
    1

  [RULES]
    1. Dilarang menggunakan built in function apapun.
    2. Asumsi nilai minimum max adalah 1.
*/

let max = 5 // silahkan beri nilai bebas
let value = ''

for (let counterRow = 1; counterRow <= max; counterRow++) {
  for (let counterColumn = 0; counterColumn < counterRow; counterColumn++) {
    value += counterRow
  }
  console.log(value)
  value = ''
}
