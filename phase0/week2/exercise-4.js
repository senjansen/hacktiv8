// Exercise 4 - Switch-Case
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Declare variables
let hari = 14; // between (1-31)
let bulan = 5; // between (1-12)
let tahun = 2012; // between (1900-2200)

// switch-case conditional
switch (bulan) {
    case 1:
        console.log(hari + " Januari " + tahun);
        break;

    case 2:
        console.log(hari + " Februari " + tahun);
        break;
            
    case 3:
        console.log(hari + " Maret " + tahun);
        break;

    case 4:
        console.log(hari + " April " + tahun);
        break;

    case 5:
        console.log(hari + " Mei " + tahun);
        break;

    case 6:
        console.log(hari + " Juni " + tahun);
        break;

    case 7:
        console.log(hari + " Juli " + tahun);
        break;

    case 8:
        console.log(hari + " Agustus " + tahun);
        break;

    case 9:
        console.log(hari + " September " + tahun);
        break;

    case 10:
        console.log(hari + " Oktober " + tahun);
        break;

    case 11:
        console.log(hari + " November " + tahun);
        break;

    case 12:
        console.log(hari + " Desember " + tahun);
        break;

    default:
        console.log("Bulan yang dimasukkan salah!");
}