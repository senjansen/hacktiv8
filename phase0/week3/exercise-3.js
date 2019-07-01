// Exercise 3 - Looping Data Array
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to reverse value in array
function dataHandling(input) {
    for (let counterRow = 0; counterRow < input.length; counterRow++) {
        console.log(`Nomor ID: ${input[counterRow][0]}`);
        console.log(`Nama Lengkap: ${input[counterRow][1]}`);
        console.log(`TTL: ${input[counterRow][2]} ${input[counterRow][3]}`);
        console.log(`Hobi: ${input[counterRow][4]}\n`);
    }
}

//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

dataHandling(input);