/*
  Poin-poin yang wajib dikuasai adalah:
  1. Cara mendeklarasikan object, cara membuat properties serta valuenya
  2. Cara mengakses data di object
  3. Cara melooping object
  4. Mengubah dari array ke object
  5. Object.keys dan Object.values

  Latihan:
  1. Cara membuat object literal
  2. Cara memasukkan kumpulan array menjadi object
  3. Cara membuat array menjadi unik
*/

// 1. Membuat object literal (3 times)

function createObjectLiteral (name, batch, hobbies) {
  let studentObj = {
    name,
    batch,
    hobbies
  }
  return studentObj
}

// console.log(createObjectLiteral('Andreas', 34, ['Reading', 'Table Tennis']))

/*
  {
    name: '....',
    batch: '.....',
    hobbies: []
  }
*/

// 2. Mengakses object literal (3 times)

let objectLiteral = {
  name: 'Andreas',
  batch: 34,
  hobbies: ['Reading', 'Table Tennis']
}

function printObjectValue (person) {
  return `Nama saya adalah ${person.name} \nSaya berada di batch ${person.batch} \nHobby saya adalah ${person.hobbies}`
}

// console.log(printObjectValue(objectLiteral))

/*
  // Nama saya adalah .....
  // Saya berada di batch ....
  // Hobby saya adalah ....
*/

// 3. Melooping object (7 times)
// object berbeda dengan array, karena object tidak punya index
// jadi urutan di object harusnya ngga dipermasalahkan, sehingga
// apabila ingin melakukan operasi yang harus berurutan lebih baik
// menggunakan array.

// notes: apabila properties dari object merupakan number, dia akan secara
// otomatis akan berurutan. sehingga bisa dimanfaatkan untuk kebutuhan tertentu

let hogwarts = {
  gryffindor: 30,
  hufflepuff: 29,
  ravenclaw: 29,
  slytherin: 28
}

function printKeyValue (hogwarts) {
  let string = ''
  let key = Object.keys(hogwarts)
  for (let i = 0; i < key.length; i++) {
    string = string + key[i] + ': ' + hogwarts[key[i]] + '\n'
  }
  return string
}

// console.log(printKeyValue(hogwarts))

// 4. Mengubah dari array ke object (5 times)

function changeArrayToObject (array) {
  let resultObj = {}
  for (let i = 0; i < array.length; i++) {
    if (!resultObj[array[i][0]] || array[i][1] > resultObj[array[i][0]]) {
      resultObj[array[i][0]] = array[i][1]
    }
  }
  return resultObj
}

// 4.1 ini satu semua
// console.log(changeArrayToObject([
//   ['gryffindor', 30],
//   ['hufflepuff', 29],
//   ['ravenclaw', 29],
//   ['slytherin', 28]
// ]))

// notes: di object keynya pasti unik, jadi ngga ada yang bisa double.

// 4.2 bagaimana kalau ada beberapa, dan hanya diambil yang paling besar
// console.log(changeArrayToObject([
//   ['gryffindor', 30],
//   ['gryffindor', 32],
//   ['gryffindor', 29],
//   ['slytherin', 28]
// ]))

// 5. bonus Object.keys dan Object.values
// ubah hogwarts ke dalam bentuk array properties/keysnya dan array bentuk valuesnya

function objectToArray (obj) {
  let array = []
  let keys = Object.keys(obj)
  let values = Object.values(obj)
  for (let i = 0; i < keys.length; i++) {
    let arrayTemp = []
    arrayTemp.push(keys[i])
    arrayTemp.push(values[i])
    array.push(arrayTemp.slice())
  }
  return array
}

console.log(objectToArray(hogwarts))
