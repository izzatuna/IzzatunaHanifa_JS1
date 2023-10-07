// Nested if
let nilaiAbsen = 75;
let nilaiTugas = 90;

if (nilaiAbsen >= 80) {
  if (nilaiTugas >= 80) {
    console.log("Anda aktif dan mendapatkan nilai tinggi.");
  } else {
    console.log("Anda aktif tetapi nilai tugas rendah.");
  }
} else {
  console.log("Anda tidak aktif.");
}