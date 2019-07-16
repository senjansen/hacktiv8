/*
================
Poin Calculator
================

[INSTRUCTIONS]
Kamu diminta menghitung poin dari sebuah medali yang didapat dalam sebuah pertandingan.
poinCalculator adalah sebuah function yang menerima satu parameter berupa string.
function tersebut akan menghitung jumlah Gold aka emas (G), Silver aka perak (S) dan Bronze aka perunggu (B) dan function akan mereturn jumlah masing2 mendali dan menghitung total poin secara keseluruhan.
Adapun ketentuannya:
Gold (G) = 2
Silver (S) = 1
Bronze (B) = 0.5

[RULE]
- WAJIB MENYERTAKAN PSEUDOCODE untuk kasus ini
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string untuk pemecahan masalah.
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()

[EXAMPLE]
poinCalculator("GSB")
output: jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
*/

/*
================================================================

PSEUDOCODE:
-----------
FUNCTION 'pointCalculator' with parameter 'array'
  SET 'medalPoint' to empty array
  SET 'goldMedal' to zero
  SET 'silverMedal' to zero
  SET 'bronzeMedal' to zero
  SET 'totalPoint' to zero
  Change 'array' from string to array data type
  FOR each index of 'array' DO
    IF current index 'i' character IS EQUAL to 'G' THEN
      INCREMENT 'goldMedal' by 1 THEN
      ADD two to 'totalPoint'
    ELSE IF current index 'i' character IS EQUAL to 'S' THEN
      INCREMENT 'silverMedal' by 1 THEN
      ADD one to 'totalPoint'
    ELSE IF current index 'i' character IS EQUAL to 'B' THEN
      INCREMENT 'bronzeMedal' by 1 THEN
      ADD half to 'totalPoint'
    ENDIF
  ENDFOR
  DISPLAY `jumlah Gold: 'goldMedal', jumlah Silver: 'silverMedal', jumlah Bronze: 'bronzeMedal'. Dan totalnya adalah: 'totalPoint'`
ENDFUNCTION
================================================================
*/

function poinCalculator (array) {
  let goldMedal = 0
  let silverMedal = 0
  let bronzeMedal = 0
  let totalPoint = 0
  // Count gold medal, silver medal, bronze medal and total point
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'G') {
      goldMedal++
      totalPoint += 2
    } else if (array[i] === 'S') {
      silverMedal++
      totalPoint += 1
    } else if (array[i] === 'B') {
      bronzeMedal++
      totalPoint += 0.5
    }
  }
  // Return message
  return `jumlah Gold: ${goldMedal}, jumlah Silver: ${silverMedal}, jumlah Bronze: ${bronzeMedal}. Dan totalnya adalah: ${totalPoint}`
}

console.log(poinCalculator('GSB'))
// jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
console.log(poinCalculator('GGG'))
// jumlah Gold: 3, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 6
console.log(poinCalculator('SSB'))
// jumlah Gold: 0, jumlah Silver: 2, jumlah Bronze: 1. Dan totalnya adalah: 2.5
console.log(poinCalculator('BBGSSGB'))
// jumlah Gold: 2, jumlah Silver: 2, jumlah Bronze: 3. Dan totalnya adalah: 7.5
console.log(poinCalculator(''))
// jumlah Gold: 0, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 0
