// Exercise 6 - Looping
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// No.1 : Looping Using While
let counter = 0;

console.log('LOOPING PERTAMA');
while (counter < 20) {
    counter += 2;
    console.log(counter + ' - I love coding');
}

console.log('LOOPING KEDUA');
while (counter > 0) {
    console.log(counter + ' - I will become fullstack developer');
    counter -= 2;
}

// No.2 : Looping Using For
console.log('LOOPING PERTAMA');
for (let count = 0; count <= 20; count++) {
    console.log(count + ' - I love coding');
}

console.log('LOOPING KEDUA');
for (let count = 20; count > 0; count--) {
    console.log(count + ' - I will become fullstack developer');
}

// No.3 : Odd & Even Number
console.log('\nOdd & Even Number \n-----------------');
for (let count = 1; count <= 100; count++) {
    //console.log(count + ' ');
    if (count%2 == 0) {
        console.log('GENAP');
    }
    else {
        console.log('GANJIL');
    }
}

for (let count = 1; count <= 100; count += 2) {
    //console.log(count + ' ');
    if (count%3 == 0) {
        console.log(count + ' KELIPATAN 3');
    }
}

for (let count = 1; count <= 100; count += 5) {
    //console.log(count + ' ');
    if (count%6 == 0) {
        console.log(count + ' KELIPATAN 6');
    }
}

for (let count = 1; count <= 100; count += 9) {
    //console.log(count + ' ');
    if (count%10 == 0) {
        console.log(count + ' KELIPATAN 10');
    }
}