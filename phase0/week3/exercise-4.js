// Exercise 4 - Use Built-in Function in Array
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to display data of multidimensional array
function dataHandling2 (input) {
  let tanggal
  let tanggalSort
  let tanggalJoin
  // Using splice() method
  input.splice(1, 1, 'Roman Alamsyah Elsharawy')
  input.splice(2, 1, 'Provinsi Bandar Lampung')
  input.splice(4, 1, 'Pria', 'SMA Internasional Metro')
  console.log(input)

  // Using split() method
  tanggal = input[3].split('/')

  // switch-case
  switch (tanggal[1]) {
    case '01':
      console.log('Januari')
      break

    case '02':
      console.log('Februari')
      break

    case '03':
      console.log('Maret')
      break

    case '04':
      console.log('April')
      break

    case '05':
      console.log('Mei')
      break

    case '06':
      console.log('Juni')
      break

    case '07':
      console.log('Juli')
      break

    case '08':
      console.log('Agustus')
      break

    case '09':
      console.log('September')
      break

    case '10':
      console.log('Oktober')
      break

    case '11':
      console.log('November')
      break

    case '12':
      console.log('Desember')
      break

    default:
      console.log('Salah bulan!')
      break
  }

  // Using sort() method --> sorting tanggal
  tanggalJoin = tanggal.join('-')
  tanggalSort = tanggal.sort(function (value1, value2) { return value2 - value1 })
  console.log(tanggalSort)

  // Using join() method
  console.log(tanggalJoin)

  // Using slice() method
  console.log(input[1].slice(0, 15))
}

var input = ['0001', 'Roman Alamsyah ', 'Bandar Lampung', '21/05/1989', 'Membaca']
dataHandling2(input)

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
