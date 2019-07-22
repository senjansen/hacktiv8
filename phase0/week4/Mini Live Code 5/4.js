/*
  //////////////////////
  FUNCTION COUNT PROFIT
  //////////////////////
  Fungsi Count Profit akan mencari keuntungan
  [PROCESS]
  Sama seperti tugas tetapi nama shoppersnya wajib dibuat dinamis dan diubah menjadi string.
  [RULES]
  - Stock tidak boleh negatif
  - Dilarang menggunakan built in function apapun
*/

function countProfit (shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ]
  // Create variable profit to accomodate the end result of profit
  var profit = []
  // If array shopper length is not 0, then do the process
  if (shoppers.length !== 0) {
    // Lakukan perulangan sebanyak listBarang karena hasil test case menampilkan object listBarang
    for (var i = 0; i < listBarang.length; i++) {
      // Buat variabel object baru
      var objBarang = {}
      // Tambahkan property key product dan isi dengan nama produk listBarang sekarang
      objBarang['product'] = listBarang[i][0]
      // Buar variabel arrayShoppers untuk menampung nama shoppers sementara dalam bentuk array
      var arrShoppers = []
      // Buat variabel leftOver dengan nilai stock produk
      var leftOver = listBarang[i][2]
      // Buat variabel totalProfit untuk menampung total penjualan barang
      var totalProfit = 0
      // Lakukan perulangan sebanyak shoppers
      for (var j = 0; j < shoppers.length; j++) {
        // Jika nama produk ditemukan
        if (shoppers[j]['product'] === listBarang[i][0]) {
          // Cek apakah stock mencukupi untuk dijual
          if (shoppers[j]['amount'] <= leftOver) {
            // Jika stock mencukupi maka masukkan nama shopper ke arrayShoppers, kurangi stock saat ini dan hitung total profit
            arrShoppers.push(shoppers[j]['name'])
            leftOver -= shoppers[j]['amount']
            totalProfit += (shoppers[j]['amount'] * listBarang[i][1])
          }
        }
      }
      // Setelah semua informasi sudah ada maka buat property key untuk object
      objBarang['shoppers'] = joinNames(arrShoppers)
      objBarang['leftOver'] = leftOver
      objBarang['totalProfit'] = totalProfit
      // Setelah semua informasi object lengkap, push ke array profit
      profit.push(objBarang)
    }
  }
  return profit
}

// Buat function untuk menggabungkan array menjadi string
function joinNames (array) {
  var string = ''
  for (var i = 0; i < array.length; i++) {
    // Jika string belum ada isi maka langsung tambahkan array pertama
    if (string.length === 0) {
      string = string + array[i]
    } else if (i === array.length - 1 && array.length === 2) { // Jika array saat ini adalah yang terakhir dan panjang array adalah 2 maka tambahkan " dan " sebelum array
      string = string + ' dan ' + array[i]
    } else if (i === array.length - 1 && array.length > 2) { // Jika array saat ini adalah yang terakhir dan panjang array lebih dari dua maka tambahkan ", dan " sebelum array
      string = string + ', dan ' + array[i]
    } else { // Jika array saat ini adalah array tengah maka tambahkan " , " sebelum array
      string = string + ', ' + array[i]
    }
  }
  return string
}

// TEST CASES
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]))
// [ { product: 'Sepatu Stacattu',
//   shoppers: 'Windi dan Vanessa',
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: '',
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: '',
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 }, { name: 'Devi', product: 'Baju Zoro', amount: 1 }, { name: 'Lisa', product: 'Baju Zoro', amount: 1 }]))
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: 'Windi',
// //     leftOver: 2,
// //     totalProfit: 12000000 },
// //   { product: 'Baju Zoro',
// //     shoppers: 'Devi dan Lisa',
// //     leftOver: 0,
// //     totalProfit: 1000000 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: 'Rani',
// //     leftOver: 0,
// //     totalProfit: 175000 } ]
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 1 }, { name: 'Devi', product: 'Sepatu Stacattu', amount: 1 }, { name: 'Dini', product: 'Sepatu Stacattu', amount: 1 }]))
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: 'Windi, Devi, dan Dini',
// //     leftOver: 7,
// //     totalProfit: 4500000 },
// //   { product: 'Baju Zoro',
// //     shoppers: '',
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: '',
// //     leftOver: 1,
// //     totalProfit: 0 } ]
console.log(countProfit([])) // []
