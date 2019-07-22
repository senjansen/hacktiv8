/*
    ============
    PAIR PROJECT
    ============

    [INSTRUCTION]
    saat nya phase 0 mengerjakan project secara pair ( berpasangan / berdua ).
    dalam pembagian kelompok student, ada kriteria yang harus dipenuhi yaitu
    setiap kelompok yang dipasangkan harus memiliki huruf depan ( inisial ) yang
    BERBEDA.

    pada kelas ini , jumlahnya selalu genap dan murid yang memiliki inisial yang sama
    tidak lebih dari 2 orang

    ketentuan :
    - jika murid berjumlah ganjil output : "Jumlah murid harus genap"
    - tambahkan test case lain bila diperlukan

    [Example]
    input : ["asep","baqi","jajang","junaedi","iqbal","toni"]
    output : ["asep and baqi","jajang and iqbal","junaedi and toni"]

    [RULE]
    - dilarang menggunakan build in function array apapun kecuali push()
    - Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
    - Dilarang menggunakan regex .match dan lainnya!
    - Dilarang menggunakan built in function .indexOf() dan .include()

*/

function pairProject (students) {
  // Pertama-tama buat variabel result untuk menampung hasil student yang telah dipasangkan
  var result = []
  // Cari panjang array jika genap maka lanjutkan proses
  var length = students.length
  if (length % 2 === 0) {
    // Lakukan perulangan sebanyak student
    for (var i = 0; i < length - 1; i++) {
      // Jika ketemu initial yang sama maka tukar nama dengan nama selanjutnya dan push setelah ditukar dan pindah ke 2 index berikutnya
      if (students[i][0] === students[i + 1][0]) {
        // Lakukan swap nama jika indeks saat ini bukan dua index terakhir
        if (i !== length - 2) {
          var temp = students[i + 1]
          students[i + 1] = students[i + 2]
          students[i + 2] = temp
          result.push(students[i] + ' and ' + students[i + 1])
          i++
        } else { // Apabila ketemu initial yang sama pada saat akhir array maka cek array result untuk swap dengan hasil sebelumnya
          // Cari pasangan nama sebelumnya di array result
          for (var j = (result.length - 1); j >= 0; j--) {
            // Split array agar mendapat nama pasangan murid sebelumnya
            var prevStudent = result[j].split(' and ')
            // Cek apakah pasangan nama tersebut memiliki initial yang sama atau tidak
            // Jika sama cari pasangan nama sebelumnya lagi, jika tidak maka lakukan proses swap dengan array result sebelumnya
            if (students[i][0] !== prevStudent[0][0] && students[i][0] !== prevStudent[1][0]) {
              // Buat pasangan baru dengan menukar pasangan nama sebelumnya
              var firstString = prevStudent[0] + ' and ' + students[i]
              var secondString = prevStudent[1] + ' and ' + students[i + 1]
              // Ganti nilai result array saat ini dengan yang baru
              result[j] = firstString
              // Push pasangan nama yang baru
              result.push(secondString)
              // Hentikan proses swap
              break
            }
          }
        }
      } else { // Jika tidak sama maka langsung push ke array result dan pindah ke 2 index berikutnya
        result.push(students[i] + ' and ' + students[i + 1])
        i++
      }
    }
    return result
  } else { // Jika ganjil maka munculkan pesan error
    return 'Jumlah murid harus genap'
  }
}

console.log(pairProject(['Aries', 'Awtian', 'Momotaro', 'Yoki', 'Icha', 'Wika', 'Wawan', 'Mimin', 'Ryan', 'Yogi']))
/*
[ 'Aries and Momotaro',
  'Awtian and Yoki',
  'Icha and Wika',
  'Wawan and Mimin',
  'Ryan and Yogi' ]
*/

console.log(pairProject(['asep', 'baqi', 'jajang', 'junaedi', 'iqbal', 'toni']))
/*
    ["asep and baqi","jajang and iqbal","junaedi and toni"]
*/
