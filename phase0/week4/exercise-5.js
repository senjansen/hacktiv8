// Exercise 5 - Change Alphabet
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to change alphabet with the next aplhabet
function ubahHuruf (kata) {
  let kataLength = kata.length
  let asciiValue = 0
  let newKata = ''

  for (let counter = 0; counter < kataLength; counter++) {
    asciiValue = Number(kata.charCodeAt(counter))
    asciiValue++
    newKata += String.fromCharCode(asciiValue)
  }
  return newKata
}

// TEST CASES
console.log(ubahHuruf('wow')) // xpx
console.log(ubahHuruf('developer')) // efwfmpqfs
console.log(ubahHuruf('javascript')) // kbwbtdsjqu
console.log(ubahHuruf('keren')) // lfsfo
console.log(ubahHuruf('semangat')) // tfnbohbu
