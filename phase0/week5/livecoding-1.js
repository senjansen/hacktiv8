// Live Coding Week 5 - Question 1
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
===========
eMoneySplit
===========
[INSTRUCTIONS]
eMoneySplit adalah sebuah fungsi yang menerima parameter berupa string
dan akan mengembalikan nilai string yang merupakan jumlah terbanyak dan terdikit.
[EXAMPLE]
INPUT: "bagus:200000,ali:20000,bagas:300000,andre:50000"
OUTPUT: terbanyak adalah bagas dan terdikit adalah ali
[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan eMoney"
[RULES]
1. WAJIB menggunakan algoritma/pseudocode atau -50 poin
*/

/*
================================================================
PSEUDOCODE:
-----------
FUNCTION 'eMoneySplit' with parameter 'stringData'
  IF 'stringData' is empty THEN
    DISPLAY 'tidak ada catatan eMoney'
  ENDIF
  SET 'person' array with splitted string from input 'stringData' based on ',' string
  SET 'name' array to empty
  SET 'money' array to empty
  FOR each index of 'person' DO
    Split array 'person' using ':' character
    SET 'name' to the first index of the splitted array 'person'
    SET 'money' to the second index of the splitted array 'person'
  ENDFOR
  SET temporary variable 'highest' to accomodate the highest money index
  SET temporary variable 'lowest' to accomodate the lowest money index
  FOR each index of 'money' DO
    Check every index of 'money' to find the highest amount of money
    IF current index 'i' from 'money' array is BIGGER than 'highest' THEN
      SET 'highest' with value of current index 'i' from 'money' array
    ELSEIF current index 'i' from 'money' array is LESS than 'lowest' THEN
       SET 'lowest' with value of current index 'i' from 'money' array
    ENDIF
  ENDFOR
  DISPLAY `terbanyak adalah 'name[highest]' dan terdikit adalah 'name[lowest]'`
ENDFUNCTION
================================================================
*/

function eMoneySplit (stringData) {
  // If no input in the string, return message
  if (stringData === '') return 'tidak ada catatan eMoney'
  // Create new array contains each person string
  let person = stringData.split(',')
  let name = []
  let money = []
  // Get the name and money from the splitted array
  for (let i = 0; i < person.length; i++) {
    name.push(person[i].split(':')[0])
    money.push(person[i].split(':')[1])
  }
  let highest = 0
  let lowest = 0
  // Get the highest and lowest money index
  for (let i = 0; i < money.length; i++) {
    if (parseInt(money[i]) > parseInt(money[highest])) {
      highest = i
    } else if (parseInt(money[i]) < parseInt(money[lowest])) {
      lowest = i
    }
  }
  return `terbanyak adalah ${name[highest]} dan terdikit adalah ${name[lowest]}`
}

console.log(eMoneySplit('bagus:200000,ali:20000,bagas:300000,andre:50000'))
// terbanyak adalah bagas dan terdikit adalah ali
console.log(eMoneySplit('andre:50000'))
// terbanyak adalah andre dan terdikit adalah andre
console.log(eMoneySplit(''))
// tidak ada catatan eMoney
