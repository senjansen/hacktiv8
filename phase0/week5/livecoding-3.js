// Live Coding Week 5 - Question 3
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
  ////////////
  richestGroup
  ////////////
  Function richestGroup akan menentukkan siapa yang paling kaya dalam suatu grup.
  Function akan menerima 1 parameter yaitu:
    - groups adalah array yang berisi kumpulan data vote, tipe datanya array.
    - kelompok yang ada HANYA terdiri dari A dan B. tapi tidak harus selalu ada.
  Function ini akan mengembalikkan nilai string.

  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var groups = [
      ['A', 'B'],
      ['A', 'A']
    ]
  [PROCESS]
  Pada array ['A', 'B'] tidak ada yang unggul.
  Pada array ['A', 'A'] A unggul, maka nilai group A ditambah 1
  [OUTPUT]
    Group A win...
  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var groups = [
      ['A', 'A'],
      ['B']
    ]
  [PROCESS]
  Pada array ['A', 'A'] A unggul, maka nilai group A ditambah 1.
  Pada array ['B'] B unggul, maka nilai group B ditambah 1.

  [NOTES]
  Apabila ada yang seri atau tidak ada yang unggul maka tampilkan Tidak ada pemenangnya...
  [OUTPUT]
    Tidak ada pemenangnya...
  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift().
*/

function richestGroup (groups) {
  let counterA = 0
  let counterB = 0
  // Check each array in multidimensional array
  for (let i = 0; i < groups.length; i++) {
    let countA = 0
    let countB = 0
    // Check the total of A or B in the array
    for (let j = 0; j < groups[i].length; j++) {
      if (groups[i][j] === 'A') {
        countA++
      } else if (groups[i][j] === 'B') {
        countB++
      }
    }
    // Check if A's or B's counter is bigger in the array
    if (countA > countB) {
      counterA++
    } else if (countB > countA) {
      counterB++
    }
  }
  // Return message according to the counter A & B value in the multidimensional array
  if (counterA > counterB) {
    return `Group A win...`
  } else if (counterB > counterA) {
    return `Group B win...`
  } else {
    return `Tidak ada pemenangnya...`
  }
}

console.log(richestGroup([
  ['A', 'B'],
  ['A', 'A']
]))
// Group A win...

console.log(richestGroup([
  ['A', 'A'],
  ['B']
]))
// Tidak ada pemenangnya...

console.log(richestGroup([
  ['B']
]))
// Group B win...

console.log(richestGroup([]))
// Tidak ada pemenangnya...
