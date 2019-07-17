/*
  Opening
  Array dan Object adalah tipe data structured
  jadi array bisa menampung object, begitupun sebaliknya
*/

// bentuk normal
var example1 = ['a', 'b'];
var example2 = { name: 'a' };
// tapi kita bisa juga memasukkan object ke dalam array
var example3 = { name: example1 };
var example4 = [{ name: 'c' }, { name: 'a' }];
example4.push(example2);
// silahkan console.log untuk melihat nilai example 3 dan 4

// kenapa dibutuhkan pelajaran array of object. gunanya untuk bisa menggunakan
// kegiatan yang bisa array lakukan seperti sort dan filter. sementara data
// umumnya lebih baik dibentuk dalam bentuk object untuk kondisi tertentu
// seperti nama orang { name: 'adi', age: 10, height: 150 }

/*
  Poin penting yang perlu dipahami:
  1. mengakses nilai di dalam array of object
  2. melooping dan kondisional array dari array of object
  3. melooping dan kodisional object dari array of object
  Latihan:
  1. memfilter nilai object berdasarkan kondisi tertentu
  2. mensorting array of object berdasarkan value dari objectnya
*/

// ------------------
// 1. mengakses nilai
// ------------------
// 1.1 easy
var exercise1 = [
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed' },
  { name: 'ginta', position: 'BF', ability: 'fat' }
]

// release 1 => coba akses object yang berisi ginta 
// { name: 'ginta', position: 'BF', ability: 'fat' }
// release 2 => coba dapatkan string ginta
// 'ginta'
// release 3 => dapatkan key dari isi object
// ['name', 'position', 'ability']
// release 4 => dapatkan value dari isi object eyeshield
// ['eyeshield', 'RB', 'topSpeed']
// release 5 => coba ambil variable eyeshield apabila name sudah diambil dalam bentuk variable
// akses data apa menggunakan . atau [] ?
var propertyName = 'name';

// 1.2 medium
var exercise2 = [
  { 
    name: 'eyeshield',
    position: 'RB',
    ability: [
      { weakness: [ 'shy' ] , power: [ 'speed', 'nice' ] } ] 
  },
  { name: 'ginta' }
]

// release 1 => coba akses ability eyeshield
// { weakness: [ 'shy' ] , power: [ 'speed', 'nice' ] }
// release 2 => coba akses power eyeshield speed
// 'speed'

// ----------------------------------
// 2. melooping array dan kondisional
// ----------------------------------
var exercise1 = [
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed' },
  { name: 'ginta', position: 'BF', ability: 'fat' }
]

// release 1 => coba tampilkan
/*
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed' }
  { name: 'ginta', position: 'BF', ability: 'fat' }
*/

// release 2 => coba tampilkan yang ganjil atau genap saja
/*
  **GENAP**
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed' }
  **GANJIL**
  { name: 'ginta', position: 'BF', ability: 'fat' }
*/



// -------------------------------------------------------
// 3. melooping dan kodisional object dari array of object
// -------------------------------------------------------
// release 1 => coba tampilkan nama
/*
  **OUTPUT**
  eyeshield
  ginta
*/

// release 2 => coba tampilkan bentukan string seperti ini
/*
  nama eyeshield dia adalah seorang RB dengan kelebihan topSpeed
  nama ginta dia adalah seorang BF dengan kelebihan fat
*/

// release 3 => dapatkan array dari name saja
// ['eyeshield', 'ginta']

// release 4 => coba dapatkan semua pemain dengan posisi RB
// [{ name: 'eyeshield', position: 'RB', ability: 'topSpeed' }]