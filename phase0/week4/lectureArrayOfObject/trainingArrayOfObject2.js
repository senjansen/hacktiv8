// 1. memfilter nilai object berdasarkan kondisi tertentu

var exercise1 = [
  { name: 'ginta', position: 'BF', ability: 'fat', score: 20 },
  { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
]

// Release 1 => coba ambil nama-nama yang nilainya diatas 30
/* 
  [ 
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
  ]
*/
// Release 2 => coba ambil nama-nama yang nilainya diantara 70 dan 90
/* 
  [ 
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
  ]
*/  

// 2. mensorting array of object berdasarkan value dari objectnya

// Release 1 => sorting isi ascending
/* 
  [ 
    { name: 'ginta', position: 'BF', ability: 'fat', score: 20 },
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 },
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100}
  ]
*/
// Release 2 => sorting isi descending
/* 
  [ 
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 },
    { name: 'ginta', position: 'BF', ability: 'fat', score: 20 }
  ]
*/