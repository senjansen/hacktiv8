// Exercise 7 - Looping
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// No.1 : Menyusun Barisan Bintang
let rows1 = 5; // input the number or rows

for (let counter = 0; counter < rows1; counter++) {
    console.log('*');
}

// No.2 : Menyusun Barisan Bintang Dengan Nested Looping
let rows2 = 5; // input the number or rows
let asterisk = '';

console.log('');
for (let counterRow = 0; counterRow < rows2; counterRow++) {
    for (let counterColumn = 0; counterColumn < rows2; counterColumn++) {
        asterisk += '*';
    }
    console.log(asterisk);
    asterisk = '';
}

// No.3 : Menyusun Barisan Tangga Bintang Dengan Nested Looping
let rows3 = 5; // input the number or rows
let asterisk2 = '';

console.log('');
for (let counterRow = 0; counterRow < rows3; counterRow++) {
    for (let counterColumn = 0; counterColumn <= counterRow; counterColumn++) {
        asterisk2 += '*';
    }
    console.log(asterisk2);
    asterisk2 = '';
}