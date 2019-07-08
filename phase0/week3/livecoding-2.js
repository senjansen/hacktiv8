// Live Coding Week 3 - Question 2
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
  ///////
  setrika
  ///////

  Kalian akan membuat aplikasi setrika yang mana akan memilah pakaian yang bisa di setrika
  ataupun tidak, kemudian apabila pakaian memiliki panjang 20 cm lebih maka pakaian
  akan dilipat.

  [INSTRUCTIONS]
    1. Jika tidak ada jenisPakaian, maka tampilkan "Tentukkan pakaian yang ingin Anda setrika".
       Jika ada jenisPakaian lanjut ke step 2.
    2. Jika pakaianPerluDisetrika bernilai salah, maka tampilkan
       "Silahkan pilih pakaian yang ingin disetrika". Jika pakaianPerluDisetrika bernilai benar,
       maka lanjut ke step 3.
    3. Jika jenisPakaian bernilai "baju" atau "celana" dan panjang lebih dari 20, maka tampilkan
       "Pakaian sudah disetrika dan dilipat, Terima Kasih". Jika tidak tampilkan "Pakaian sudah
       disetrika, Terima Kasih".

  [RULES]
    1. Dilarang menggunakan built in function apapun.
*/

var jenisPakaian = 'baju' // silahkan beri nilai bebas
var pakaianPerluDisetrika = true // silahkan beri nilai bebas
var panjangPakaian = 21 // silahkan beri nilai bebas

if (typeof jenisPakaian === 'string' && jenisPakaian === '') {
  console.log('Tentukan pakaian yang ingin Anda setrika')
} else if (typeof jenisPakaian === 'string' && jenisPakaian !== '') {
  if (pakaianPerluDisetrika === true) {
    if ((jenisPakaian === 'baju' || jenisPakaian === 'celana') && panjangPakaian > 20) {
      console.log('Pakaian sudah disetrika dan dilipat, Terima Kasih')
    } else {
      console.log('Pakaian sudah disetrika, Terima Kasih')
    }
  } else {
    console.log('Silahkan pilih pakaian yang ingin disetrika')
  }
}
