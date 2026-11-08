# SIPENA Informatika SMP — Minimalist Dual Tone
### Aplikasi Presensi, Poin Keaktifan, dan Arsip Modul Guru Informatika SMP (Kurikulum Merdeka Fase D)

Aplikasi web yang disederhanakan khusus untuk **Guru Informatika jenjang SMP** (Kelas 7, 8, dan 9), berfokus pada manajemen kelas praktikum komputer, absensi cepat, pencatatan poin keaktifan siswa, dan arsip modul praktikum.

---

## 🌟 4 Fitur Utama (Sederhana & Praktis)

### 1. 👥 Presensi & Poin Keaktifan Kelas (Tab Utama)
- **Pilih Kelas Cepat**: Beralih antar-kelas (7A, 7B, 8A, 8B, 9A, atau tambah kelas baru).
- **Input Data Siswa Mudah**:
  - Tambah manual satu per satu.
  - **Tempel Daftar Nama (Bulk)**: Salin seluruh kolom nama siswa dari Microsoft Excel atau Google Sheets, lalu tempel (*paste*) sekaligus.
- **Presensi Harian Sekali Klik**:
  - Pilihan status: **H** (Hadir), **S** (Sakit), **I** (Izin), **A** (Alpa).
  - Tombol **"✓ Semua Hadir"** untuk menandai absensi kelas dalam 1 detik.
- **Poin Keaktifan di Lab/Kelas**:
  - Tombol cepat: `+1` (Pertanyaan/Tanggapan), `+2` (Selesai Praktik Koding Lab), `+3` (Maju Presentasi), `-1` (Kurang Tertib).
  - Riwayat catatan poin per siswa (tanggal dan alasan).
  - Peringkat/Leaderboard siswa teraktif di kelas.
- **Cetak Rekap Presensi & Nilai**: Siap cetak langsung dengan kop surat sekolah.

### 2. 💻 Materi & Modul Lab Informatika
- Terstruktur berdasarkan **7 Elemen Kurikulum Merdeka Informatika SMP**:
  1. **BK**: Berpikir Komputasional (Dekomposisi, Pola, Abstraksi, Algoritma, Tantangan Bebras).
  2. **SK**: Sistem Komputer (Hardware, RAM, CPU, Storage, OS).
  3. **JKI**: Jaringan Komputer & Internet (LAN, Topologi, Keamanan Cyber, Phishing).
  4. **AD**: Analisis Data (Rumus IF, VLOOKUP, Chart di Spreadsheet).
  5. **AP**: Algoritma & Pemrograman (Scratch visual coding, logika percabangan/looping, Python dasar).
  6. **TIK**: Teknologi Informasi & Komunikasi (Perkantoran, Cloud Storage).
  7. **DSI & PLB**: Dampak Sosial Informatika & Praktik Lintas Bidang.
- Formulir tambah modul **1 halaman simpel** (tidak menggunakan wizard yang membingungkan).
- Dilengkapi lembar tugas praktikum lab komputer siap cetak.

### 3. 📝 Jurnal Mengajar Harian
- Catat tanggal, kelas, materi yang diajarkan, status kehadiran, dan catatan kendala lab komputer.
- Rekap pertemuan yang dapat langsung dicetak untuk bukti administrasi/supervisi Kepala Sekolah.

### 4. ⚙️ Profil Guru & Cadangan
- Kustomisasi identitas guru, NIP, dan nama sekolah.
- Ekspor seluruh data (siswa, presensi, poin, modul) ke file JSON untuk dicadangkan offline.

---

## 🎨 Tampilan Minimalist Dual Tone (Claude UI)
- Warna monokrom murni (Hitam & Putih): tidak ada warna-warni yang mengalihkan fokus saat mengajar di lab.
- Tipografi editorial serif (*Newsreader*) untuk judul dan font *Plus Jakarta Sans* untuk keterbacaan data murid.
- Sepenuhnya responsif terhadap ukuran jendela peramban (*fluid browser window sizing*).

---

## 🚀 Cara Menjalankan
Aplikasi aktif berjalan di:  
👉 **http://localhost:5173**

Untuk menjalankan kembali di lain waktu:
```bash
cd /home/achmad/guru-smp-arsip
./jalankan.sh
```
