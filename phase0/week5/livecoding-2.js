// Live Coding Week 5 - Question 2
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
  /////////////////
  americanGotTalent
  /////////////////
  Function americanGotTalent akan menentukan juara serta jumlah votingnya dari suatu array.
  Function akan menerima 1 parameter yaitu:
    - votes adalah kumpulan string nama, tipe datanya array.
  Function ini akan mengembalikkan nilai string dalam format:
    - Apabila terdapat juara: "Selamat juaranya adalah [nama], dengan total votes yang diterima [totalVotes]".
    - Apabila tidak terdapat juara: "Mohon maaf juara tidak bisa ditentukkan dalam minggu ini".

  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var votes = ['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho'];
  [PROCESS]
    terdapat 2 voting Lee Min Ho yang paling banyak.
  [OUTPUT]
    Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2.
  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var votes = ['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho'];
  [PROCESS]
    tidak terdapat yang terbanyak.
  [OUTPUT]
    Mohon maaf juara tidak bisa ditentukkan dalam minggu ini

  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .pop(), .shift() dan .unshift()
*/

/*
========
warOfFun
========
[INSTRUCTIONS]
warOfFun adalah sebuat fungsi yang menerima parameter berupa string dan
akan mengembalikkan nilai string yang merupakan pemenang perlombaan.
[EXAMPLE]
INPUT: [
  ['andre', 'toni', 'toti'],
  ['risk', 'fun', 'go'],
  ['humble', 'psyhco', 'strong']
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
  // code here
  var result = {}
  if (informations.length === 0) return 'Maaf tidak ada pemenangnya'
  for (let i = 0; i < informations[0].length; i++) {
    for (let j = 1; j < informations.length; j++) {
      if (informations[j][i] === 'fun') {
        if (!result[informations[0][i]]) {
          result[informations[0][i]] = 1
        } else {
          result[informations[0][i]]++
        }
      }
    }
  }
  if (Object.keys(result).length === 0) return 'Maaf tidak ada pemenangnya'
  else {
    var maxName = ''
    for (var name in result) {
      if (maxName === '') {
        maxName = name
      } else if (result[name] > result[maxName])maxName = name
    }
    return maxName
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
