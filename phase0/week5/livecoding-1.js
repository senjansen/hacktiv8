// Live Coding Week 5 - Question 1
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
  ////////////
  sumTheNumber
  ////////////
  Function sumTheNumber akan menentukan jumlah dari angka-angka dalam suatu string.
  Function akan menerima 1 parameter yaitu:
    - stringAngka adalah string yang berisi kumpulan data, tipe datanya string.
    - apabila stringAngka tersebut pada index yang ganjil maka akan ditambahkan
      jumlah kelipatan 2, selain itu cukup jumlahkan langsung.
  Function ini akan mengembalikkan nilai number.

  --------
  EXAMPLE:
  --------
  [INPUT]
    var stringNumber = '123456'
  [PROCESS]
  string  : 1   2   3   4   5   6
  index   : 0   1   2   3   4   5
  result  : 1 (2*2) 3 (2*4) 5 (2*6) => 1 + 4 + 3 + 8 + 5 + 12
  [OUTPUT]
    33
  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift(), dan di RULES lain.
    2. Diperbolehkan untuk menggunakan built in untuk mengubah tipe data String ke Number, ataupun sebaliknya.
    2. Diasumsikan string selalu ada nilainya dan nilainya positif.
    3. WAJIB menggunakan PSEUDOCODE atau nilai 0.
*/

/*
================================================================

PSEUDOCODE:
-----------
FUNCTION 'sumTheNumber' with parameter 'stringNumber'
  SET 'sum' to zero.
  FOR each index of 'stringNumber' DO
    Change type data string to number in current index of 'stringNumber'
    IF current index 'i' modulus with 2 IS NOT EQUAL to 0 THEN
      MULTIPLY the 'value' by 2 THEN
      ADD the 'value' to 'sum'
    ELSE
      ADD the 'value' to 'sum'
    ENDIF
  ENDFOR
  DISPLAY 'sum'
ENDFUNCTION
================================================================
*/

/*
===========
eMoneySplit
===========
[INSTRUCTIONS]
eMoneySplit adalah sebuah fungsi yang menerima parameter berupa string
dan akan mengembalikkan nilai string yang merupakan jumlah terbanyak dan terdikit.
[EXAMPLE]
INPUT: "bagus:200000,ali:20000,bagas:300000,andre:50000"
OUTPUT: terbanyak adalah bagas dan terdikit adalah andre
[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan eMoney"
[RULES]
1. WAJIB menggunakan algoritma/pseudocode atau -50 poin
*/

// MAAF YA PSEUDOCODE BELUM NGERJAIN GAK ADA WAKTU!!!
function eMoneySplit (stringData) {
  // code below here
  if (stringData === '') return 'tidak ada catatan EMoney'
  var splittedComa = stringData.split(',')
  var name = []
  var price = []
  // console.log(splittedComa);
  for (let i = 0; i < splittedComa.length; i++) {
    name.push(splittedComa[i].split(':')[0])
    price.push(splittedComa[i].split(':')[1])
  }
  // console.log(name);
  // console.log(price);
  var maxIndex = 0
  var minIndex = 0
  for (let i = 0; i < price.length; i++) {
    if (parseInt(price[i]) > parseInt(price[maxIndex]))maxIndex = i
    if (parseInt(price[i]) < parseInt(price[minIndex]))minIndex = i
  }
  return 'terbanyak adalah ' + name[maxIndex] + ' dan terdikit adalah ' + name[minIndex]
}

console.log(eMoneySplit('bagus:200000,ali:20000,bagas:300000,andre:50000'))
// terbanyak adalah bagas dan terdikit adalah andre
console.log(eMoneySplit('andre:50000'))
// terbanyak adalah andre dan terdikit adalah andre
console.log(eMoneySplit(''))
// tidak ada catatan eMoney
