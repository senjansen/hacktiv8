// Live Coding Week 4 - Question 2
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
  /////////////////
  americanGotTalent
  /////////////////
  Function americanGotTalent akan menentukan juara serta jumlah votingnya dari suatu array.
  Function akan menerima 1 parameter yaitu:
    - votes adalah kumpulan string nama, tipe datanya array.
  Function ini akan mengembalikkan nilai string dalam format:
    - Apabila terdapat juara: "Selamat juaranya adalah [nama], dengan total votes yang diterima [totalVotes]".
    - Apabila tidak terdapat juara: "Mohon maaf juara tidak bisa ditentukkan dalam minggu ini".

  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var votes = ['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho'];
  [PROCESS]
    terdapat 2 voting Lee Min Ho yang paling banyak.
  [OUTPUT]
    Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2.
  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var votes = ['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho'];
  [PROCESS]
    tidak terdapat yang terbanyak.
  [OUTPUT]
    Mohon maaf juara tidak bisa ditentukkan dalam minggu ini

  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .pop(), .shift() dan .unshift()
*/

function americanGotTalent (votes) {
  let totalVotes = []
  let participants = []
  let counter = 0
  let mostName = ''
  let mostVotes = 0
  let status = false

  // Sort input
  votes = sorting(votes)
  // Define the first participant
  participants.push(votes[0])
  participants.push(1)
  totalVotes.push(participants)
  // Check the next participants
  for (let i = 1; i < votes.length; i++) {
    if (votes[i] === votes[i - 1]) {
      totalVotes[counter][1] += 1
    } else {
      participants = []
      participants.push(votes[i])
      participants.push(1)
      totalVotes.push(participants)
      counter++
    }
    // console.log(`i: ${i} and totalVotes: ${totalVotes}`)
  }
  // Check the winner's name & votes
  for (let i = 0; i < totalVotes.length; i++) {
    if (totalVotes[i][1] > mostVotes) {
      mostVotes = totalVotes[i][1]
      mostName = totalVotes[i][0]
      status = true
    } else if (totalVotes[i][1] === mostVotes) {
      status = false
    }
  }
  // Return message
  if (status) {
    return `Selamat juaranya ${mostName}, dengan total votes yang diterima ${mostVotes}`
  } else {
    return 'Mohon maaf juara tidak bisa ditentukan dalam minggu ini'
  }
}
// Create function to sort an array input
function sorting (arr) {
  let arrLength = arr.length

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho']))
// Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2
console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho']))
// Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby']))
// Selamat juaranya adalah Arby, dengan total votes yang diterima 2
