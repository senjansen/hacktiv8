/*
  //////////////////////
  FUNCTION MULTIPLE BY 3
  //////////////////////
  Fungsi Multiple By 3 akan mengalikan angka-angka dengan angka di 3 setelahnya,
  kemudian akan menjumlahkan angka tersebut ketika ganjil
  [PROCESS]
  INPUT:
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
  PROCESS:
  1 * 5 = 5 (ganjil)
  2 * 6 = 12 (genap)
  3 * 7 = 21 (ganjil)
  4 * 8 = 32 (genap)
  5 * 9 = 45 (ganjil)
  5 + 21 + 45 = 71
  OUTPUT:
  71
  [RULES]
  - Dilarang menggunakan built in function apapun
*/

function multipleBy3 (array) {
  // Create newArray to accomodate multiplication result current index with 3 index after that
  let newArray = []
  // Create variable total to accomodate sum of the odd's multiplication result
  let total = 0
  // Do looping with max array.lenth-4 because we want to do multiplication with 3 index after the current index
  for (let i = 0; i < array.length - 4; i++) {
    // Multiplication between current index and index+4 -> push the result to the newArray
    let multiply = array[i] * array[i + 4]
    newArray.push(multiply)
  }
  // Summation of the odd's multiplication result
  for (let j = 0; j < newArray.length; j++) {
    // If multiplication result in newArray is odd, then add to the total
    if (newArray[j] % 2 !== 0) {
      total = total + newArray[j]
    }
  }
  return total
}

console.log(multipleBy3([1, 2, 3, 4, 5, 6, 7, 8, 9])) // 71
