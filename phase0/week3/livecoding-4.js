// Live Coding Week 3 - Question 4
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
  //////////////////////
  pyramidNumberExtension
  //////////////////////

  Function pyramidNumberExtension adalah suatu fungsi kelanjutan dari pyramidNumber yang sudah dibuat.
  Function ini akan menerima parameter max yang bertipe data number, serta hanya berfungsi untuk menampilkan
  saja.

  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var max = 5

  [OUTPUT]
    55555
    4444
    333
    22
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
    3. Nilai rocket hanya ada 0 atau 100, jadi diutamakan mengerjakkan soal yang lain terlebih dahulu.
*/

function pyramidNumberExtension (max) {
  let value = ''
  // Descending down to 1
  for (let counterRow = max; counterRow > 0; counterRow--) {
    for (let counterColumn = 0; counterColumn < counterRow; counterColumn++) {
      value += counterRow
    }
    console.log(value)
    value = ''
  }
  // Ascending to max
  for (let counterRow = 2; counterRow <= max; counterRow++) {
    for (let counterColumn = 0; counterColumn < counterRow; counterColumn++) {
      value += counterRow
    }
    console.log(value)
    value = ''
  }
}

// TEST CASES
pyramidNumberExtension(5)
/*
    55555
    4444
    333
    22
    1
    22
    333
    4444
    55555
  */
pyramidNumberExtension(1)
/*
    1
  */
