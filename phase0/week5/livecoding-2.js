// Live Coding Week 5 - Question 2
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
========
warOfFun
========
[INSTRUCTIONS]
warOfFun adalah sebuat fungsi yang menerima parameter berupa string dan
akan mengembalikan nilai string yang merupakan pemenang perlombaan.
[EXAMPLE]
INPUT: [
  ['andre', 'toni', 'toti'],
  ['risk', 'fun', 'go'],
  ['humble', 'psycho', 'strong']
]
PROCESS:
1. array[0] akan berisi nama-nama pemain
2. array-aray pada indeks berikutnya akan berisi attribut-attribut yang dimiliki oleh setiap pemain sesuai dengan indeksnya
3. pada array[1] andre tidak memiliki fun, toni memiliki 1 fun, dan toti tidak memiliki fun
4. pada array[2] andre tidak memiliki fun, toni tidak memiliki fun, dan toti tidak memiliki fun.
5. total andre tidak memiliki fun, toni memiliki 1 fun, dan toti tidak memiliki fun, sehingga pemenangnya adalah toni.
OUTPUT: pemenangnya adalah toni
[NOTES]
  1. Apabila tidak ada pemenang tampilkan "mohon maaf tidak ada pemenangnya"
  2. Asumsi tidak akan ada yang seri tapi tidak selalu ada pemenangnya
[RULES]
  1. Dilarang menggunakan built in function .sort()
*/

function warOfFun (informations) {
  // Create object result to accomodate the winner
  let result = {}
  // Return message if there is no input data
  if (informations.length === 0) {
    return 'Maaf tidak ada pemenangnya'
  }
  // Do looping to check the player data
  for (let i = 0; i < informations[0].length; i++) {
    // Do the second looping to check the attributes of 'fun' in the rows for each person
    for (let j = 1; j < informations.length; j++) {
      if (informations[j][i] === 'fun') {
        // If there is no key in the object, create new key and assign 1 for the value
        if (!result[informations[0][i]]) {
          result[informations[0][i]] = 1
        } else { // If there is already the same key in the object, increment the value by 1
          result[informations[0][i]]++
        }
      }
    }
  }
  // Check the winner -> if the length of the array keys in the object is 0 -> no winner
  if (Object.keys(result).length === 0) {
    return 'Maaf tidak ada pemenangnya'
  } else {
    let winner = ''
    // Using for-in loop to check the value in each keys in the object -> find the winner
    for (let name in result) {
      if (winner === '') {
        winner = name
      } else if (result[name] > result[winner]) {
        winner = name
      }
    }
    return `pemenangnya adalah ${winner}`
  }
}

console.log(warOfFun([
  ['andre', 'toni', 'toti'],
  ['risk', 'fun', 'go'],
  ['humble', 'psyhco', 'strong']
]))
// pemenangnya adalah toni

console.log(warOfFun([
  ['andre', 'toni', 'toti', 'tito'],
  ['fun', 'fun', 'fun'],
  ['fun', 'fun'],
  ['nonfun', 'fun', 'fun', 'fun']
]))
// pemenangnya adalah toni

console.log(warOfFun([
  ['andre', 'toni'],
  ['risk', 'go'],
  ['humble', 'strong']
]))
// mohon maaf tidak ada pemenangnya

console.log(warOfFun([]))
// mohon maaf tidak ada pemenangnya
