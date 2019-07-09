// Exercise 14 - Using Bus
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to calculate the fare of a bus from one point to another point
function naikAngkot (arrPenumpang) {
  const rute = ['A', 'B', 'C', 'D', 'E', 'F']
  let fare = []

  for (let i = 0; i < arrPenumpang.length; i++) {
    // Create object for each passenger
    let temp = {}
    temp.penumpang = arrPenumpang[i][0]
    temp.naikDari = arrPenumpang[i][1]
    temp.tujuan = arrPenumpang[i][2]
    // Calculate the fare from starting and end point
    if (rute.includes(arrPenumpang[i][1]) && rute.includes(arrPenumpang[i][2])) {
      temp.bayar = Math.abs((arrPenumpang[i][1].charCodeAt(0) - arrPenumpang[i][2].charCodeAt(0)) * 2000)
    } else {
      temp.bayar = 'Salah input rute!'
    }
    fare.push(temp)
  }
  return fare
}

// TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]))
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
console.log(naikAngkot([])) // []
