// 1. Buat object seperti ini
/*
  {
    name: YOUR_NAME,
    batch: YOUR_BATCH,
    hobbies: [YOUR_HOBBIES]
  }
*/

function createObject (person) {
  return {
    name: person[0],
    batch: person[1],
    hobbies: person[2]
  }
}

// console.log(createObject(['Andreas', 'Batch 34 - Humble Fox', ['Reading', 'Cycling']]))

// 2. Memasukkan array ke dalam object
// Urutannya [NAME, CLUB, AGE]
let insertToObjects = [
  ['Kapten Tsubasa', 'Nankatsu', 19],
  ['Wakabayashi', 'Nankatsu', 20],
  ['Saitama', 'Hero Associate', 18]
]

function arrayToObject (array) {
  let obj = {}
  for (let i = 0; i < array.length; i++) {
    obj['PLAYER' + (i + 1)] = {
      NAME: array[i][0],
      CLUB: array[i][1],
      AGE: array[i][2]
    }
  }
  return obj
}

console.log(arrayToObject(insertToObjects))

// 3. Membuat array menjadi unik

function makeUnique (arrayOfNames) {
  let result = []
  result.push(arrayOfNames[0])
  for (let i = 1; i < arrayOfNames.length; i++) {
    let isUnique = true
    for (let j = 0; j < result.length; j++) {
      if (arrayOfNames[i] === result[j]) {
        isUnique = false
      }
    }
    if (isUnique) {
      result.push(arrayOfNames[i])
    }
  }
  return result
}

console.log(makeUnique(['Lee Min Ho', 'Lee Kwang Ho', 'Lee Min Ho', 'Lindan']))
// ['Lee Min Ho', 'Lee Kwang Ho', 'Lindan']
