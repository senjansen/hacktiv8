// Live Coding Week 5 - Question 4
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
==========
rememberMe
==========
[INSTRUCTIONS]
rememberMe adalah sebuah fungsi yang akan menerima parameter dengan tipe data array
kemudian mengembalikan nilai string.

[EXAMPLE]
INPUT: ['re', 'em', 'b', 'erm', 'em']
PROCESS:
  're' diambil untuk melengkapi rememberme => memberme -> 're'
  'em' diambil untuk melengkapi memberme => mberme -> 'me'
  'b' diambil untuk melengkapi mberme => merme -> 'mber'
  'erm' diambil untuk melengkapi merme => me -> 'mer'
  'em' diambil untuk melengkapi me => true -> 'me'
OUTPUT: completed

INPUT: ['rembrm']
PROCESS:
  'rembr' diambil untuk melengkapi rememberme => ememe
OUTPUT: ememe

[RULES]
  1. hanya boleh menggunakan built in function .push(), .unshift()
  2. kata yang dicari adalah rememberme
*/

function rememberMe (lyrics) {
  // Create new array for rememberme
  let word = ['r', 'e', 'm', 'e', 'm', 'b', 'e', 'r', 'm', 'e']

  // First loop to check each element in lyrics array
  for (let i = 0; i < lyrics.length; i++) {
    // Second loop to remove the alphabet in the word array using lyrics element
    for (let j = 0; j < lyrics[i].length; j++) {
      // Third loop to check the remaining element in word array
      for (let k = 0; k < word.length; k++) {
        if (lyrics[i][j] === word[k]) {
          word = splice(word, k, 1)
          break
        }
      }
    }
  }
  // If all the alphabet is already empty, return 'completed'
  if (word.length === 0) {
    return `completed`
  } else { // If not, return the remaining word in a string
    return join(word)
  }
}

function splice (arr, start, remove, ...rest) {
  let newArr = []
  let indexOfNewArr = 0
  for (let i = 0; i < arr.length; i++) {
    // Jumping the data that want to be removed
    if (i >= start && i < start + remove) {
      continue
    }
    // Insert to the array
    newArr[indexOfNewArr] = arr[i]
    indexOfNewArr++
    // If there are any new data that want to be added, insert from index start
    if (indexOfNewArr === start) {
      for (let j = 0; j < rest.length; j++) {
        newArr[indexOfNewArr] = rest[j]
        indexOfNewArr++
      }
    }
  }
  return newArr
}

function join (arr) {
  let string = ''
  for (let i = 0; i < arr.length; i++) {
    string += arr[i]
    console.log('string : ' + string)
  }
  return string
}

console.log(rememberMe(['re', 'em', 'b', 'erm', 'em'])) // completed
console.log(rememberMe(['rembr'])) // ememe
console.log(rememberMe(['zoqoqo', 'zeieie', 'azzreqwm', 'fdasb', 'ravae', 'rera', 'mmmmm'])) // completed
