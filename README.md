# Laporan Praktikum 5: JavaScript Dasar dan Manipulasi HTML

**Mata Kuliah:** Pemrograman Web  
**Pertemuan:** 6  
**Topik:** JavaScript Dasar & Manipulasi Elemen HTML  

---

## 1. Deskripsi Program
Repository **Lab5Web** ini berisi implementasi materi dasar JavaScript, manipulasi Document Object Model (DOM), penanganan *event*, validasi form input, serta pembuatan aplikasi sederhana berupa *Kalkulator Nilai Mahasiswa*.

---

## 2. Struktur Folder & File
```text
lab5_javascript/
├── index.html
├── script.js
└── README.md
```

---

## 3. Cara Menjalankan
1. *Clone* atau unduh seluruh file dalam repository ini.
2. Buka file `index.html` menggunakan browser modern (Google Chrome, Mozilla Firefox, Microsoft Edge, dll).
3. Untuk melihat output perintah `console.log()`, buka konsol browser dengan menekan `F12` atau klik kanan halaman $\rightarrow$ **Inspect / Periksa** $\rightarrow$ pilih tab **Console**.

---

## 4. Jawaban Pertanyaan dan Tugas (Bagian H)

### 1. Jelaskan perbedaan `console.log()`, `alert()`, `prompt()`, dan `textContent`/`innerHTML`.
* **`console.log()`**: Menampilkan pesan atau data ke konsol *developer tools* browser. Digunakan untuk proses *debugging* tanpa mengganggu antarmuka pengguna.
* **`alert()`**: Menampilkan kotak dialog modal (*pop-up*) berisi pesan peringatan yang memerlukan tindakan penutupan (klik OK) oleh pengguna.
* **`prompt()`**: Menampilkan kotak dialog *pop-up* yang meminta masukan/input berupa teks dari pengguna.
* **`textContent` & `innerHTML`**: Digunakan untuk mengubah isi dari elemen HTML melalui DOM. `textContent` hanya menyisipkan atau membaca teks murni, sedangkan `innerHTML` dapat memproses dan merender tag-tag HTML di dalam string.

---

### 2. Apa perbedaan `let` dan `const`? Berikan contoh.
* **`let`**: Digunakan untuk mengandeklarasikan variabel yang nilainya dapat diubah atau diisi ulang (*mutable*).
  ```javascript
  let skor = 10;
  skor = 20; // Diumpankan nilai baru (Valid)
  ```
* **`const`**: Digunakan untuk mengandeklarasikan variabel bernilai tetap (*immutable*). Variabel `const` tidak dapat diisi ulang nilainya setelah diinisialisasi.
  ```javascript
  const pi = 3.14;
  // pi = 3.14159; // Akan menghasilkan TypeError
  ```

---

### 3. Apa perbedaan operator `==` dan `===`?
* **`==` (Abstract / Loose Equality)**: Membandingkan nilai dua operan dengan melakukan konversi tipe data otomatis (*type coercion*) jika tipenya berbeda.
  * Contoh: `'5' == 5` bernilai `true`.
* **`===` (Strict Equality)**: Membandingkan nilai sekaligus tipe data secara ketat tanpa konversi tipe data otomatis.
  * Contoh: `'5' === 5` bernilai `false` (karena tipe String $\neq$ Number).

---

### 4. Jelaskan fungsi `if-else` dan `switch`. Kapan masing-masing dapat digunakan?
* **`if-else`**: Digunakan untuk percabangan logis berbasis evaluasi kondisi boolean (`true` / `false`), perbandingan ekspresi kompleks, atau rentang nilai (misal: `nilai >= 80`).
* **`switch`**: Digunakan untuk mengevaluasi satu ekspresi terhadap berbagai kemungkinan nilai pasti (*case*) yang terdiskrit. Memudahkan keterbacaan kode ketika memilih satu opsi dari banyak pilihan yang eksplisit.

---

### 5. Apa fungsi parameter dan `return` dalam `function`?
* **Parameter**: Variabel penampung pada deklarasi fungsi yang menerima nilai masukan (*argument*) dari luar saat fungsi dipanggil.
* **`return`**: Perintah untuk menghentikan eksekusi fungsi dan mengembalikan suatu nilai hasil pemrosesan ke pemanggil fungsi tersebut.

---

### 6. Bagaimana JavaScript memilih elemen HTML menggunakan `document.getElementById()`?
JavaScript memanfaatkan struktur DOM (*Document Object Model*) untuk mencari elemen dalam dokumen HTML yang memiliki nilai atribut `id` persis sama dengan parameter string yang dioperkan. Jika ditemukan, metode ini mengembalikan objek referensi dari elemen HTML tersebut.

---

### 7. Buat script untuk memvalidasi form agar nama tidak kosong dan nilai berada pada rentang 0-100.
Berikut adalah implementasi fungsi validasinya:

```javascript
function validasiForm(nama, nilai) {
    // Memeriksa apakah nama kosong
    if (!nama || nama.trim() === "") {
        return { valid: false, pesan: "Nama tidak boleh kosong!" };
    }
    
    const angka = Number(nilai);
    // Memeriksa apakah nilai merupakan angka dan berada dalam rentang 0 - 100
    if (nilai === "" || Number.isNaN(angka) || angka < 0 || angka > 100) {
        return { valid: false, pesan: "Nilai harus berupa angka antara 0 hingga 100!" };
    }

    return { valid: true, pesan: "Validasi berhasil." };
}
```

---

## 5. Ringkasan Fitur & Eksperimen Mandiri
1. **Latihan Output & Dialog**: Implementasi `console.log`, `alert`, dan `prompt`.
2. **Kalkulasi & Logika**: Operasi aritmetika, pengecekan genap/ganjil, dan penggunaan `switch-case`.
3. **Manipulasi DOM & Event**: Mengubah warna background halaman dan menghitung total harga menu makanan via `checkbox`.
4. **Mini Project**: Aplikasi *Kalkulator Nilai Mahasiswa* yang menghitung nilai akhir ($30\%$ Tugas $+ 30\%$ UTS $+ 40\%$ UAS), menentukan predikat huruf, serta status kelulusan secara dinamis.