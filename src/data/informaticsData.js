// Data Khusus Guru Informatika SMP (Kurikulum Merdeka - Fase D)

export const informaticsTeacherProfile = {
  namaGuru: "Achmad Fadillah, S.Kom., Gr.",
  nip: "19900812 201801 1 004",
  mapelUtama: "Informatika",
  sekolah: "SMP Negeri 1 Merdeka Belajar",
  kepalaSekolah: "Dra. Hj. Nurul Hidayati, M.Pd.",
  nipKepalaSekolah: "19720810 199703 2 004",
  kota: "Jakarta",
  tahunAjaran: "2024/2025",
  semesterAktif: "Ganjil"
};

export const informaticsElements = [
  { id: "all", name: "Semua Elemen" },
  { id: "BK", name: "Berpikir Komputasional (BK)", desc: "Dekomposisi, Pola, Abstraksi, Algoritma, Bebras" },
  { id: "TIK", name: "Teknologi Informasi & Komunikasi (TIK)", desc: "Aplikasi perkantoran, surel, penyimpanan cloud" },
  { id: "SK", name: "Sistem Komputer (SK)", desc: "Hardware, software, OS, interaksi komponen, biner" },
  { id: "JKI", name: "Jaringan Komputer & Internet (JKI)", desc: "Topologi jaringan, internet, keamanan data, cyber safety" },
  { id: "AD", name: "Analisis Data (AD)", desc: "Pengolahan spreadsheet, visualisasi data, filtering data" },
  { id: "AP", name: "Algoritma & Pemrograman (AP)", desc: "Scratch visual coding, logika percabangan/looping, Python dasar" },
  { id: "DSI", name: "Dampak Sosial Informatika (DSI)", desc: "Etika digital, UU ITE, jejak digital, cyberbullying" },
  { id: "PLB", name: "Praktik Lintas Bidang (PLB)", desc: "Proyek komputasi terintegrasi untuk solusi masalah sekolah" }
];

export const initialClasses = ["7A", "7B", "8A", "8B", "9A"];

export const initialStudents = [
  // Kelas 7A - Informatika
  {
    id: "SIS-7A-01",
    nama: "Aditya Pratama Putra",
    nisn: "0091283401",
    kelas: "7A",
    poinKeaktifan: 14,
    presensi: { "2024-11-08": "H", "2024-11-01": "H", "2024-10-25": "H" },
    riwayatPoin: [
      { tanggal: "2024-11-08", poin: 2, alasan: "Menyelesaikan tantangan logika Bebras maze" },
      { tanggal: "2024-11-01", poin: 2, alasan: "Aktif presentasi flowchart antrean kantin" }
    ]
  },
  {
    id: "SIS-7A-02",
    nama: "Anindya Putri Kirana",
    nisn: "0091283402",
    kelas: "7A",
    poinKeaktifan: 18,
    presensi: { "2024-11-08": "H", "2024-11-01": "H", "2024-10-25": "H" },
    riwayatPoin: [
      { tanggal: "2024-11-08", poin: 3, alasan: "Menemukan pola tercepat sorting data angka" },
      { tanggal: "2024-11-01", poin: 2, alasan: "Membantu rekan satu kelompok memahami dekomposisi" }
    ]
  },
  {
    id: "SIS-7A-03",
    nama: "Bagas Surya Ramadhan",
    nisn: "0091283403",
    kelas: "7A",
    poinKeaktifan: 9,
    presensi: { "2024-11-08": "H", "2024-11-01": "S", "2024-10-25": "H" },
    riwayatPoin: [
      { tanggal: "2024-11-08", poin: 1, alasan: "Menjawab pertanyaan fungsi komponen CPU" }
    ]
  },
  {
    id: "SIS-7A-04",
    nama: "Chelsea Olivia Zahra",
    nisn: "0091283404",
    kelas: "7A",
    poinKeaktifan: 12,
    presensi: { "2024-11-08": "H", "2024-11-01": "H", "2024-10-25": "H" },
    riwayatPoin: [
      { tanggal: "2024-11-08", poin: 2, alasan: "Membuat dokumen rangkuman TIK dengan format rapi" }
    ]
  },
  {
    id: "SIS-7A-05",
    nama: "Daffa Alvaro Rizky",
    nisn: "0091283405",
    kelas: "7A",
    poinKeaktifan: 7,
    presensi: { "2024-11-08": "I", "2024-11-01": "H", "2024-10-25": "H" },
    riwayatPoin: [
      { tanggal: "2024-11-01", poin: 2, alasan: "Aktif bertanya perbedaan RAM dan ROM" }
    ]
  },
  {
    id: "SIS-7A-06",
    nama: "Farhan Maulana Akbar",
    nisn: "0091283406",
    kelas: "7A",
    poinKeaktifan: 11,
    presensi: { "2024-11-08": "H", "2024-11-01": "H", "2024-10-25": "H" },
    riwayatPoin: [
      { tanggal: "2024-11-08", poin: 1, alasan: "Menjelaskan konsep abstraksi dengan contoh peta halte bus" }
    ]
  },
  {
    id: "SIS-7A-07",
    nama: "Kaila Amanda Zahwa",
    nisn: "0091283407",
    kelas: "7A",
    poinKeaktifan: 15,
    presensi: { "2024-11-08": "H", "2024-11-01": "H", "2024-10-25": "H" },
    riwayatPoin: [
      { tanggal: "2024-11-08", poin: 2, alasan: "Demonstrasi koding Scratch animasi huruf berjalan" }
    ]
  },
  {
    id: "SIS-7A-08",
    nama: "Muhammad Rehan Saputra",
    nisn: "0091283408",
    kelas: "7A",
    poinKeaktifan: 6,
    presensi: { "2024-11-08": "H", "2024-11-01": "H", "2024-10-25": "A" },
    riwayatPoin: [
      { tanggal: "2024-11-08", poin: 1, alasan: "Berhasil login akun portal belajar mandiri" }
    ]
  },

  // Kelas 8B - Informatika
  {
    id: "SIS-8B-01",
    nama: "Bima Arya Wijaya",
    nisn: "0082918201",
    kelas: "8B",
    poinKeaktifan: 16,
    presensi: { "2024-11-08": "H", "2024-11-01": "H" },
    riwayatPoin: [
      { tanggal: "2024-11-08", poin: 3, alasan: "Praktikum simulasi topologi jaringan star di Cisco Packet Tracer" }
    ]
  },
  {
    id: "SIS-8B-02",
    nama: "Cantika Dewi Maharani",
    nisn: "0082918202",
    kelas: "8B",
    poinKeaktifan: 20,
    presensi: { "2024-11-08": "H", "2024-11-01": "H" },
    riwayatPoin: [
      { tanggal: "2024-11-08", poin: 4, alasan: "Selesai paling awal pengolahan rumus VLOOKUP Excel" }
    ]
  },
  {
    id: "SIS-8B-03",
    nama: "Dimas Anggara Pangestu",
    nisn: "0082918203",
    kelas: "8B",
    poinKeaktifan: 10,
    presensi: { "2024-11-08": "H", "2024-11-01": "S" },
    riwayatPoin: [
      { tanggal: "2024-11-08", poin: 2, alasan: "Menjelaskan bahaya link phishing di WhatsApp" }
    ]
  },
  {
    id: "SIS-8B-04",
    nama: "Fiona Azzahra",
    nisn: "0082918204",
    kelas: "8B",
    poinKeaktifan: 13,
    presensi: { "2024-11-08": "H", "2024-11-01": "H" },
    riwayatPoin: [
      { tanggal: "2024-11-08", poin: 2, alasan: "Membuat bagan infografis keamanan data pribadi" }
    ]
  },

  // Kelas 9A - Informatika
  {
    id: "SIS-9A-01",
    nama: "Arkananta Daniswara",
    nisn: "0073918001",
    kelas: "9A",
    poinKeaktifan: 22,
    presensi: { "2024-11-08": "H" },
    riwayatPoin: [
      { tanggal: "2024-11-08", poin: 4, alasan: "Memprogram game maze sederhana dengan variabel skor di Scratch" }
    ]
  },
  {
    id: "SIS-9A-02",
    nama: "Nabila Syakira",
    nisn: "0073918002",
    kelas: "9A",
    poinKeaktifan: 19,
    presensi: { "2024-11-08": "H" },
    riwayatPoin: [
      { tanggal: "2024-11-08", poin: 3, alasan: "Menganalisis data survei kantin dengan pivot table" }
    ]
  }
];

export const initialInformaticsMaterials = [
  {
    id: "INF-701",
    judul: "Berpikir Komputasional: 4 Pilar Pemecahan Masalah Komputasi",
    kelas: "7",
    elemen: "BK",
    elemenNama: "Berpikir Komputasional (BK)",
    alokasiWaktu: "4 JP (2 Pertemuan)",
    tujuan: "Peserta didik mampu mendekomposisi persoalan sehari-hari, menemukan pola, membuat abstraksi, dan menyusun algoritma terstruktur.",
    ringkasan: `### 4 PILAR COMPUTATIONAL THINKING (CT):
1. Dekomposisi: Memecah masalah kompleks menjadi sub-masalah kecil.
2. Pengenalan Pola: Mengamati kesamaan karakteristik atau keteraturan.
3. Abstraksi: Fokus pada informasi penting, mengabaikan detail tak relevan.
4. Algoritma: Menulis instruksi terurut yang presisi untuk menyelesaikan masalah.`,
    tugasPraktik: `TUGAS LAB KOMPUTER:
1. Buka situs Tantangan Bebras Indonesia (bebras.or.id) atau lembar kerja.
2. Selesaikan 3 teka-teki logika komputasi: 'Berang-berang Membuat Jalur', 'Pemberian Kode Rahasia', dan 'Menyusun Antrean Bendera'.
3. Dokumentasikan strategi abstraksi kelompokmu di dokumen pengolah kata.`
  },
  {
    id: "INF-702",
    judul: "Sistem Komputer: Interaksi Hardware, Software, & Brainware",
    kelas: "7",
    elemen: "SK",
    elemenNama: "Sistem Komputer (SK)",
    alokasiWaktu: "4 JP (2 Pertemuan)",
    tujuan: "Peserta didik memahami fungsi komponen masukan (input), pemrosesan (CPU/RAM), penyimpanan (Storage), dan keluaran (output).",
    ringkasan: `### KOMPONEN DASAR KOMPUTER:
- Input Device: Keyboard, Mouse, Scanner, Mikrofon.
- Processing Unit: CPU (Otak pemroses data), RAM (Memori kerja sementara), Motherboard.
- Storage Device: SSD/HDD, Flashdisk (Penyimpanan permanen non-volatile).
- Output Device: Monitor, Printer, Speaker, Proyektor.
- Software: Sistem Operasi (Windows, Linux, Android) dan Perangkat Lunak Aplikasi.`,
    tugasPraktik: `AKTIVITAS LAB:
1. Identifikasi spesifikasi PC lab: Processor, Kapasitas RAM, dan Jenis Storage melalui Settings > System > About.
2. Buat tabel perbandingan kecepatan akses antara RAM vs SSD.`
  },
  {
    id: "INF-801",
    judul: "Jaringan Komputer & Internet: Topologi & Keamanan Berinternet",
    kelas: "8",
    elemen: "JKI",
    elemenNama: "Jaringan Komputer & Internet (JKI)",
    alokasiWaktu: "6 JP (3 Pertemuan)",
    tujuan: "Peserta didik mampu mengidentifikasi topologi jaringan lokal (LAN), cara kerja router/switch, dan etika keamanan data pribadi online.",
    ringkasan: `### KONSEP JARINGAN & CYBER SECURITY:
1. Jaringan Lokal (LAN) vs Jaringan Luas (WAN/Internet).
2. Topologi Jaringan: Star, Bus, Ring, Mesh (kelebihan dan kekurangan).
3. Ancaman Cyber: Malware, Phishing, Social Engineering.
4. Tips Aman: Password kuat (kombinasi simbol & angka), Two-Factor Authentication (2FA), waspada link mencurigakan.`,
    tugasPraktik: `PRAKTIK LAB KOMPUTER:
1. Jalankan perintah 'ipconfig' dan 'ping google.com' di Command Prompt (Terminal).
2. Amati nilai latency (ms) dan status reply jaringan.
3. Rancang poster digital Canva: '5 Kebiasaan Aman Berinternet untuk Remaja'.`
  },
  {
    id: "INF-802",
    judul: "Analisis Data: Pengolahan Lembar Kerja Spreadsheet Lanjutan",
    kelas: "8",
    elemen: "AD",
    elemenNama: "Analisis Data (AD)",
    alokasiWaktu: "6 JP (3 Pertemuan)",
    tujuan: "Peserta didik terampil menggunakan rumus logika (IF), pencarian (VLOOKUP), dan grafik visualisasi data pada spreadsheet.",
    ringkasan: `### FUNGSI FORMULA SPREADSHEET ESENSIAL:
- Matematika/Statistik: SUM, AVERAGE, MIN, MAX, COUNT, COUNTA.
- Logika: IF(kondisi, nilai_benar, nilai_salah), COUNTIF, SUMIF.
- Lookup: VLOOKUP(nilai_kunci, tabel_referensi, no_kolom, FALSE).
- Visualisasi: Diagram Batang (Bar), Diagram Lingkaran (Pie Chart), Diagram Garis (Line).`,
    tugasPraktik: `STUDI KASUS PRAKTIK EXCEL:
1. Unduh dataset: 'Daftar Nilai & Presensi Ekstrakurikuler Siswa'.
2. Gunakan rumus IF untuk menentukan predikat Lulus/Belum Lulus (KKTP = 75).
3. Buat diagram pie chart untuk melihat persentase kelulusan kelas.`
  },
  {
    id: "INF-901",
    judul: "Algoritma & Pemrograman: Coding Interaktif Scratch & Python Dasar",
    kelas: "9",
    elemen: "AP",
    elemenNama: "Algoritma & Pemrograman (AP)",
    alokasiWaktu: "8 JP (4 Pertemuan)",
    tujuan: "Peserta didik mampu merancang program visual dengan blok percabangan (if-else), perulangan (repeat/forever), dan variabel skor.",
    ringkasan: `### LOGIKA PEMROGRAMAN:
1. Variabel: Tempat menyimpan nilai data (skor, nyawa, nama pemain).
2. Percabangan (Branching): Menjalankan kode tertentu hanya jika kondisi terpenuhi.
3. Perulangan (Looping): Mengulang blok kode tanpa harus menulis ulang berkali-kali.
4. Event & Sensor: 'When flag clicked', 'touching color', 'key pressed'.`,
    tugasPraktik: `PROYEK GAME LAB:
Buat Game 'Tangkap Apel Jatuh' di Scratch:
- Sprite Keranjang digerakkan panah kiri/kanan.
- Sprite Apel jatuh berulang dari atas ke bawah secara acak.
- Jika Apel menyentuh Keranjang: Skor +1, bunyikan pop.
- Jika Apel menyentuh dasar layar: Nyawa -1.`
  }
];

export const initialInformaticsJournal = [
  {
    id: "JRN-01",
    tanggal: "2024-11-08",
    kelas: "7A",
    jam: "Ke 1 - 3 (07.15 - 09.30)",
    materi: "Berpikir Komputasional - Tantangan Bebras Algoritma",
    hadir: "7 / 8 Siswa (1 Izin: Daffa)",
    catatan: "Siswa sangat antusias dengan tantangan Bebras. Anindya dan Aditya menjadi tutor sebaya bagi kelompoknya."
  },
  {
    id: "JRN-02",
    tanggal: "2024-11-07",
    kelas: "8B",
    jam: "Ke 4 - 6 (09.45 - 12.00)",
    materi: "Analisis Data - Formula IF dan COUNTIF Excel",
    hadir: "4 / 4 Siswa (Lengkap)",
    catatan: "Semua siswa berhasil menyelesaikan modul latihan sebelum waktu praktik berakhir."
  }
];
