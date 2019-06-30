// Exercise 3 - If-Else
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Declare variables
let nama = "Andreas";
let peran = "Penyihir";

// if-else conditional
if (nama === "" && peran === "") {
    console.log("Nama harus diisi!");
}
else if (typeof nama === "string" && peran === "") {
    console.log("Halo " + nama + ". Pilih peranmu untuk memulai game!");
}
else if (typeof nama === "string" && peran === "Ksatria") {
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log("Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
}
else if (typeof nama === "string" && peran === "Tabib") {
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.");
}
else if (typeof nama === "string" && peran === "Penyihir") {
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
}
else {
    console.log("Salah input!");
}