// ============================================================
// LATIHAN 1: Menampilkan Output
// ============================================================
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

// ============================================================
// LATIHAN 2: Alert dan Prompt
// Un-comment bagian bawah ini jika ingin menguji alert & prompt saat halaman dimuat
/*
const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
    alert("Nama belum diisi.");
}
*/

// ============================================================
// LATIHAN 3 & EKSPERIMEN MANDIRI 1: Function & Aritmetika dari Prompt
// ============================================================
function operasiDasar(a, b) {
    console.log("--- Latihan 3: Operasi Dasar ---");
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}
// Eksekusi default Latihan 3
operasiDasar(9, 4);

// Eksperimen Mandiri 1 (Dapat dipanggil via console atau otomatis):
function operasiDariPrompt() {
    const input1 = prompt("Eksperimen 1 - Masukkan Angka Pertama:");
    const input2 = prompt("Eksperimen 1 - Masukkan Angka Kedua:");
    const num1 = Number(input1);
    const num2 = Number(input2);

    if (!isNaN(num1) && !isNaN(num2)) {
        operasiDasar(num1, num2);
    } else {
        console.log("Input eksperimen 1 tidak valid.");
    }
}

// ============================================================
// LATIHAN 4: Seleksi Kondisi If-Else
// ============================================================
function tesIfElsePrompt() {
    const inputNilai = prompt("Masukkan nilai (0-100):");
    const nilaiMahasiswa = Number(inputNilai);

    if (inputNilai === null || inputNilai.trim() === "" || Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
        alert("Input nilai tidak valid.");
    } else if (nilaiMahasiswa >= 60) {
        alert("Lulus");
    } else {
        alert("Belum lulus");
    }
}

// ============================================================
// LATIHAN 5: Seleksi Kondisi Switch
// ============================================================
function tesSwitchPrompt() {
    const inputPilihan = prompt("Masukkan angka 1-5:");
    switch (inputPilihan) {
        case "1": alert("Bilangan satu"); break;
        case "2": alert("Bilangan dua"); break;
        case "3": alert("Bilangan tiga"); break;
        case "4": alert("Bilangan empat"); break;
        case "5": alert("Bilangan lima"); break;
        default: alert("Pilihan tidak tersedia");
    }
}

// ============================================================
// LATIHAN 6 & PERTANYAAN H.7 & EKSPERIMEN 8, 9: Cek Bilangan & Validasi Form
// ============================================================
// Eksperimen 8: Function cekGenap
function cekGenap(angka) {
    return angka % 2 === 0;
}

function cekValidasiDanBilangan() {
    const namaInput = document.getElementById("nama").value;
    const bilanganInput = document.getElementById("bilangan").value;
    const angka = Number(bilanganInput);
    const hasil = document.getElementById("hasilBilangan");

    // Pertanyaan H.7 & Eksperimen 9: Validasi nama tidak kosong & nilai rentang 0-100
    if (namaInput.trim() === "") {
        hasil.innerHTML = "<span class='error'>Nama tidak boleh kosong!</span>";
        return;
    }

    if (bilanganInput.trim() === "" || !Number.isInteger(angka) || angka < 0 || angka > 100) {
        hasil.innerHTML = "<span class='error'>Masukkan bilangan bulat yang valid dalam rentang 0 - 100.</span>";
        return;
    }

    // Menggunakan helper function cekGenap (Eksperimen 8)
    if (cekGenap(angka)) {
        hasil.innerHTML = `<span class='sukses'>Halo ${namaInput}, angka ${angka} adalah <strong>Bilangan Genap</strong>.</span>`;
    } else {
        hasil.innerHTML = `<span class='sukses'>Halo ${namaInput}, angka ${angka} adalah <strong>Bilangan Ganjil</strong>.</span>`;
    }
}

// ============================================================
// LATIHAN 7: Mengubah Warna Latar Halaman
// ============================================================
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

// ============================================================
// LATIHAN 8 & EKSPERIMEN MANDIRI 10: DOM & Checkbox Menu Makanan
// ============================================================
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;
    daftarMenu.forEach((item) => {
        if (item.checked) total += Number(item.value);
    });
    document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// ============================================================
// MINI PROJECT: Kalkulator Nilai Mahasiswa
// ============================================================
function hitungNilaiAkhir(tugas, uts, uas) {
    return (tugas * 0.30) + (uts * 0.30) + (uas * 0.40);
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function prosesHitungNilai() {
    const vTugas = document.getElementById("nilaiTugas").value;
    const vUTS = document.getElementById("nilaiUTS").value;
    const vUAS = document.getElementById("nilaiUAS").value;
    const containerHasil = document.getElementById("hasilKalkulator");

    // Validasi input rentang 0-100
    if (vTugas === "" || vUTS === "" || vUAS === "") {
        containerHasil.innerHTML = "<p class='error'>Semua kolom nilai harus diisi!</p>";
        return;
    }

    const nTugas = Number(vTugas);
    const nUTS = Number(vUTS);
    const nUAS = Number(vUAS);

    if (nTugas < 0 || nTugas > 100 || nUTS < 0 || nUTS > 100 || nUAS < 0 || nUAS > 100) {
        containerHasil.innerHTML = "<p class='error'>Nilai harus berada pada rentang 0 - 100!</p>";
        return;
    }

    const nilaiAkhir = hitungNilaiAkhir(nTugas, nUTS, nUAS);
    const predikat = tentukanPredikat(nilaiAkhir);
    const status = nilaiAkhir >= 60 ? "Lulus" : "Belum Lulus";

    containerHasil.innerHTML = `
        <p><strong>Nilai Akhir:</strong> ${nilaiAkhir.toFixed(2)}</p>
        <p><strong>Predikat:</strong> ${predikat}</p>
        <p><strong>Status:</strong> <span class="${nilaiAkhir >= 60 ? 'sukses' : 'error'}">${status}</span></p>
    `;
}

// ============================================================
// EKSPERIMEN MANDIRI 7: Tabel Perkalian Angka 7 (1 sampai 10)
// ============================================================
console.log("--- Eksperimen Mandiri 7: Tabel Perkalian 7 ---");
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// ============================================================
// EKSPERIMEN MANDIRI 11: Toggle Sembunyi/Tampil Elemen
// ============================================================
function toggleElemen() {
    const elem = document.getElementById("teksSembunyi");
    if (elem.style.display === "none") {
        elem.style.display = "block";
    } else {
        elem.style.display = "none";
    }
}