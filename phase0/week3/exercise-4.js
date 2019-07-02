// Exercise 4 - Use Built-in Function in Array
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to display data of multidimensional array
function dataHandling2(input) {
    for (let counterRow = 0; counterRow < input.length; counterRow++) {
        console.log(`Nomor ID: ${input[counterRow][0]}`);
        console.log(`Nama Lengkap: ${input[counterRow][1]}`);
        console.log(`TTL: ${input[counterRow][2]} ${input[counterRow][3]}`);
        console.log(`Hobi: ${input[counterRow][4]}\n`);
    }
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */