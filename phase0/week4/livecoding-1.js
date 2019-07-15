// Live Coding Week 4 - Question 1
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
1. SET 'sum' to zero.
2. FOR 'i' to length of 'stringNumber'.
3. Set value of 'VVIP' seat class as 1000000, 'VIP' seat class as 700000 and 'Reguler' seat class as 300000.
4. Check if 'cash' is equal or more than 'VVIP'. If true, buy 'VVIP' seat class.
5. If not, check again if 'cash' is equal or more than 'VIP' value. If true, buy 'VIP' seat class.
6. If not, check again if 'cash' is equal or more than 'Reguler' value. If true, buy 'Reguler' seat class.
7. If user do not have enough 'cash' to buy ticket, display 'user will go home'.
8. If user buy a ticket, subtract the cash with the ticket price.
9. Store the subtraction value to 'moneyChange'
10. Display the bought 'ticket' in this format [name]-[seatClass]-[moneyChange].

================================================================
*/

function sumTheNumber (stringNumber) {
  let sum = 0

  for (let i = 0; i < stringNumber.length; i++) {
    let value = parseInt(stringNumber[i])
    if (i % 2 !== 0) {
      sum += value * 2
    } else {
      sum += value
    }
  }
  return sum
}

console.log(sumTheNumber('123456')) // 33
console.log(sumTheNumber('341231')) // 21
console.log(sumTheNumber('1')) // 1
console.log(sumTheNumber('01')) // 2
