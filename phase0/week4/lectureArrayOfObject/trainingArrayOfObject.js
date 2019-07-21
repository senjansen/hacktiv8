// 1. Memfilter nilai object berdasarkan kondisi tertentu

var exercise1 = [
  { name: 'ginta', position: 'BF', ability: 'fat', score: 20 },
  { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100 },
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
]

// Release 1 => coba ambil nama-nama yang nilainya diatas 30
/*
  [
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
  ]
*/

// function sortName (arr) {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].score !== undefined) {
//       if (arr[i].score > 30) {
//         result.push(arr[i])
//       }
//     }
//   }
//   return result
// }

// console.log(sortName(exercise1))

// Release 2 => coba ambil nama-nama yang nilainya diantara 70 dan 90
/*
  [
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
  ]
*/

// function sortName2 (arr) {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].score) {
//       if (arr[i].score >= 70 && arr[i].score <= 90) {
//         result.push(arr[i])
//       }
//     }
//   }
//   return result
// }

// console.log(sortName2(exercise1))

// 2. Mensorting array of object berdasarkan value dari objectnya

// Release 1 => sorting isi ascending
/*
  [
    { name: 'ginta', position: 'BF', ability: 'fat', score: 20 },
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 },
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100}
  ]
*/

// function sortAscending (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j].score !== undefined) {
//         if (arr[j].score > arr[j + 1].score) {
//           let temp = arr[j]
//           arr[j] = arr[j + 1]
//           arr[j + 1] = temp
//         }
//       }
//       // console.log(`i: ${i} j: ${j} -> arr[j].score : ${arr[j].score}`)
//     }
//     // console.log(`i: ${i} -> arr[j].score : ${arr[i].score}`)
//   }
//   return arr
// }

// console.log(sortAscending(exercise1))

// Release 2 => sorting isi descending
/*
  [
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 },
    { name: 'ginta', position: 'BF', ability: 'fat', score: 20 }
  ]
*/

function sortDescending (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].score !== undefined) {
        if (arr[j].score < arr[j + 1].score) {
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
      // console.log(`i: ${i} j: ${j} -> arr[j].score : ${arr[j].score}`)
    }
    // console.log(`i: ${i} -> arr[j].score : ${arr[i].score}`)
  }
  return arr
}

console.log(sortDescending(exercise1))
