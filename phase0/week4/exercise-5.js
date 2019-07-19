// Exercise 5 - Change Alphabet
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to change alphabet with the next aplhabet
function ubahHuruf (kata) {
  let newKata = ''
  // Change each character to ASCII number and add 1, after that change back to character
  for (let counter = 0; counter < kata.length; counter++) {
    let asciiValue = Number(kata.charCodeAt(counter))
    asciiValue++
    // Add the new character to the new string
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
