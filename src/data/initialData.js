export const initialTeacherProfile = {
  namaGuru: "Achmad Fadillah, S.Pd., Gr.",
  nip: "19880415 201402 1 003",
  sekolah: "SMP Negeri 1 Merdeka Belajar",
  kepalaSekolah: "Dra. Hj. Nurul Hidayati, M.Pd.",
  nipKepalaSekolah: "19720810 199703 2 004",
  kota: "Jakarta",
  tahunAjaran: "2024/2025",
  semesterAktif: "Ganjil"
};

export const subjectList = [
  { id: "ipa", name: "Ilmu Pengetahuan Alam (IPA)", icon: "Atom", color: "neutral", badge: "bg-neutral-100 text-neutral-900 border-neutral-300" },
  { id: "matematika", name: "Matematika", icon: "Calculator", color: "neutral", badge: "bg-neutral-100 text-neutral-900 border-neutral-300" },
  { id: "bindo", name: "Bahasa Indonesia", icon: "BookOpen", color: "neutral", badge: "bg-neutral-100 text-neutral-900 border-neutral-300" },
  { id: "bing", name: "Bahasa Inggris", icon: "Globe", color: "neutral", badge: "bg-neutral-100 text-neutral-900 border-neutral-300" },
  { id: "informatika", name: "Informatika", icon: "Cpu", color: "neutral", badge: "bg-neutral-100 text-neutral-900 border-neutral-300" },
  { id: "ips", name: "Ilmu Pengetahuan Sosial (IPS)", icon: "Compass", color: "neutral", badge: "bg-neutral-100 text-neutral-900 border-neutral-300" },
  { id: "ppkn", name: "Pendidikan Pancasila", icon: "Shield", color: "neutral", badge: "bg-neutral-100 text-neutral-900 border-neutral-300" },
  { id: "pai", name: "Pendidikan Agama & Budi Pekerti", icon: "HeartHandshake", color: "neutral", badge: "bg-neutral-100 text-neutral-900 border-neutral-300" },
  { id: "pjok", name: "PJOK", icon: "Activity", color: "neutral", badge: "bg-neutral-100 text-neutral-900 border-neutral-300" },
  { id: "seni", name: "Seni & Prakarya", icon: "Palette", color: "neutral", badge: "bg-neutral-100 text-neutral-900 border-neutral-300" },
];

export const categoryList = [
  { id: "all", name: "Semua Kategori" },
  { id: "modul_ajar", name: "Modul Ajar (RPP Plus)", icon: "FileText", desc: "Panduan lengkap pembelajaran sesuai BSKAP" },
  { id: "bahan_ajar", name: "Bahan Ajar & Slide", icon: "Presentation", desc: "Ringkasan materi, infografis & rangkuman siswa" },
  { id: "lkpd", name: "LKPD / Lembar Kerja", icon: "CheckSquare", desc: "Aktivitas terbimbing & penugasan mandiri/kelompok" },
  { id: "asesmen", name: "Asesmen & Bank Soal", icon: "HelpCircle", desc: "Diagnostik, Formatif, dan Sumatif" },
  { id: "p5", name: "Modul Proyek P5", icon: "Award", desc: "Proyek Penguatan Profil Pelajar Pancasila SMP" },
  { id: "atp_cp", name: "CP & ATP", icon: "GitCommit", desc: "Capaian & Alur Tujuan Pembelajaran Fase D" },
];

export const profilPelajarPancasilaList = [
  { id: "beriman", label: "Beriman, Bertakwa kepada Tuhan YME, & Berakhlak Mulia", color: "neutral" },
  { id: "berkebinekaan", label: "Berkebinekaan Global", color: "neutral" },
  { id: "gotong_royong", label: "Bergotong Royong", color: "neutral" },
  { id: "mandiri", label: "Mandiri", color: "neutral" },
  { id: "bernalar_kritis", label: "Bernalar Kritis", color: "neutral" },
  { id: "kreatif", label: "Kreatif", color: "neutral" },
];

export const temaP5List = [
  "Gaya Hidup Berkelanjutan",
  "Kearifan Lokal",
  "Bhinneka Tunggal Ika",
  "Bangunlah Jiwa dan Raganya",
  "Suara Demokrasi",
  "Rekayasa dan Teknologi",
  "Kewirausahaan",
  "Kebinekaan Global"
];

export const initialMaterials = [
  {
    id: "MAT-001",
    judul: "Modul Ajar IPA: Hakikat Sains dan Metode Ilmiah Laboratorium",
    mapel: "ipa",
    mapelNama: "Ilmu Pengetahuan Alam (IPA)",
    kelas: "7",
    fase: "Fase D (Kelas VII)",
    semester: "Ganjil",
    kategori: "modul_ajar",
    alokasiWaktu: "6 JP (2 Pertemuan x 3 JP)",
    dimensiP5: ["bernalar_kritis", "gotong_royong", "mandiri"],
    capaianPembelajaran: "Peserta didik mampu mengidentifikasi karakteristik sains, merancang pengamatan laboratorium secara aman, dan menerapkan tahapan metode ilmiah dalam memecahkan masalah lingkungan sekitar.",
    tujuanPembelajaran: [
      "Mengidentifikasi 6 cabang ilmu sains dan ilmuwan yang berperan di dalamnya.",
      "Mengenal alat-alat laboratorium IPA, simbol bahaya bahan kimia, dan tata tertib keselamatan kerja.",
      "Merancang percobaan sederhana dengan menerapkan tahapan metode ilmiah (merumuskan masalah, hipotesis, variabel, prosedur, analisis data)."
    ],
    pemahamanBermakna: "Sains bukan sekadar kumpulan rumus dan hafalan fakta, melainkan cara berpikir sistematis dan investigatif untuk mengungkap fenomena alam semesta secara bertanggung jawab.",
    pertanyaanPemantik: [
      "Mengapa kita perlu membedakan variabel bebas, terikat, dan kontrol dalam suatu percobaan?",
      "Apa bahaya yang mungkin terjadi jika kita salah memperlakukan zat kimia berlambang korosif di laboratorium sekolah?"
    ],
    modelPembelajaran: "Problem-Based Learning (PBL) & Eksperimen Kolaboratif",
    saranaPrasarana: "Gelas ukur, tabung reaksi, pipet tetes, termometer, stopwatch, LKPD 1, Video panduan safety lab",
    kegiatanPembelajaran: {
      pendahuluan: "Guru membuka kelas dengan salam, memeriksa kesiapan siswa, dan menampilkan video cuplikan insiden tumpahan asam di lab. Guru mengajukan pertanyaan pemantik mengenai pentingnya protokol keamanan.",
      inti: "Diferensiasi Proses: Siswa dibagi menjadi kelompok heterogen (4-5 anak). Kelompok 1 meneliti alat ukur massa dan volume; Kelompok 2 menginvestigasi simbol hazard bahan kimia; Kelompok 3 menyusun alur metode ilmiah terhadap fenomena air sungai keruh. Guru berkeliling memberikan scaffolding bagi kelompok yang membutuhkan bimbingan teknis.",
      penutup: "Siswa bersama guru menyimpulkan simpulan investigasi, mengisi lembar refleksi 3-2-1 (3 hal dipahami, 2 hal menarik, 1 pertanyaan tersisa), doa penutup."
    },
    asesmen: {
      diagnostik: "Kuis awal 5 soal via tes lisan untuk mengukur pemahaman prasyarat tentang besaran fisika.",
      formatif: "Lembar observasi keterampilan proses saat mengukur volume cairan dan rubrik kerja sama kelompok.",
      sumatif: "Laporan tertulis mini riset metode ilmiah dan kuis pilihan ganda 15 butir soal AKM."
    },
    isiMateriRingkas: `### RINGKASAN MATERI: HAKIKAT SAINS & METODE ILMIAH

1. Cabang-Cabang Utama Sains:
- Fisika: Studi tentang materi, energi, gaya, dan gerak.
- Biologi: Studi tentang kehidupan makhluk hidup dan lingkungannya.
- Kimia: Studi tentang struktur, sifat zat, dan perubahan reaksi kimia.
- Geologi & Astronomi: Studi tentang bumi dan benda-benda antariksa.

2. Tahapan Metode Ilmiah:
1. Merumuskan Masalah (pertanyaan spesifik dan dapat diuji).
2. Kajian Pustaka & Observasi Awal.
3. Merumuskan Hipotesis (dugaan sementara yang logis).
4. Merancang & Melaksanakan Eksperimen (kontrol variabel: bebas, terikat, kontrol).
5. Mengumpulkan & Menganalisis Data.
6. Menarik Kesimpulan & Melaporkan Hasil.

3. Keselamatan Kerja di Laboratorium:
- Selalu gunakan jas lab, kacamata pengaman, dan sepatu tertutup.
- Jangan pernah mencium zat kimia langsung; gunakan teknik kibasan tangan.
- Pahami letak alat pemadam api ringan (APAR) dan kotak P3K.`,
    lampiranLKPD: `LEMBAR KERJA PESERTA DIDIK (LKPD) - IDENTIFIKASI VARIABEL
Judul Praktikum: "Pengaruh Suhu Air terhadap Kecepatan Kelarutan Gula Pasir"
Instruksi:
1. Siapkan 3 gelas berisi air: air dingin (10°C), air normal (28°C), dan air panas (75°C) masing-masing 150 mL.
2. Masukkan 1 sendok teh gula ke dalam setiap gelas secara serentak.
3. Aduk dengan kecepatan yang sama menggunakan sendok pengaduk.
4. Catat waktu hingga seluruh gula larut sempurna menggunakan stopwatch.
5. Tentukan mana yang menjadi:
   - Variabel Bebas (yang diubah): ....................
   - Variabel Terikat (yang diukur): ...................
   - Variabel Kontrol (yang dibuat sama): ..............`,
    tags: ["IPA", "Kelas 7", "Metode Ilmiah", "Fase D", "Laboratorium"],
    tanggalDibuat: "2024-08-12",
    fileLampiran: "Modul_Ajar_IPA_Metode_Ilmiah_Kls7.pdf",
    ukuranFile: "2.4 MB"
  },
  {
    id: "MAT-002",
    judul: "Modul Ajar Matematika: Teorema Pythagoras dan Penerapan Nyata",
    mapel: "matematika",
    mapelNama: "Matematika",
    kelas: "8",
    fase: "Fase D (Kelas VIII)",
    semester: "Ganjil",
    kategori: "modul_ajar",
    alokasiWaktu: "8 JP (4 Pertemuan)",
    dimensiP5: ["bernalar_kritis", "kreatif", "mandiri"],
    capaianPembelajaran: "Peserta didik dapat menunjukkan kebenaran Teorema Pythagoras dan menggunakannya dalam menyelesaikan masalah kontekstual termasuk menghitung jarak antara dua titik serta panjang sisi segitiga siku-siku.",
    tujuanPembelajaran: [
      "Membuktikan rumus c² = a² + b² melalui eksplorasi puzzle persegi dan origami.",
      "Menentukan panjang sisi segitiga siku-siku jika dua sisi lainnya diketahui.",
      "Mengidentifikasi Tripel Pythagoras dan jenis segitiga (lancip, siku-siku, tumpul).",
      "Menerapkan konsep Pythagoras dalam memecahkan masalah kehidupan nyata (ketinggian tangga, jarak tempuh kapal, tinggi tiang)."
    ],
    pemahamanBermakna: "Hubungan matematis Pythagoras adalah fondasi rekayasa konstruksi, navigasi maritim, hingga arsitektur bangunan modern yang kokoh.",
    pertanyaanPemantik: [
      "Bagaimana seorang tukang bangunan memastikan bahwa sudut pondasi rumah benar-benar siku-siku sempurna (90°) tanpa busur derajat raksasa?",
      "Jika seutas tali diikatkan dari puncak tiang bendera 12 meter ke patok di tanah berjarak 5 meter, berapakah panjang minimal tali tersebut?"
    ],
    modelPembelajaran: "Discovery Learning dengan Media Manipulatif & Geogebra",
    saranaPrasarana: "Kertas berpetak, gunting, mistar, busur derajat, proyektor, LKPD eksplorasi luas",
    kegiatanPembelajaran: {
      pendahuluan: "Apersepsi bangun datar segitiga siku-siku dan konsep kuadrat/akar kuadrat. Mengaitkan dengan sejarah Pythagoras di Yunani kuno dan Babilonia.",
      inti: "Siswa menyusun 4 segitiga siku-siku identik di dalam bingkai persegi untuk membuktikan a² + b² = c². Melakukan latihan berjenjang (scaffolding) dari soal langsung ke soal cerita kontekstual arsitektur.",
      penutup: "Kuis interaktif cepat (5 menit) untuk konfirmasi pemahaman, refleksi jurnal belajar matematika."
    },
    asesmen: {
      diagnostik: "Asesmen kognitif awal mengenai operasi kuadrat dan akar kuadrat bilangan bulat.",
      formatif: "Rubrik penugasan proyek pembuktian visual teorema pythagoras.",
      sumatif: "Tes sumatif 10 soal uraian penalaran kontekstual."
    },
    isiMateriRingkas: `### RANGKUMAN TEOREMA PYTHAGORAS

Pada segitiga siku-siku, kuadrat sisi miring (hipotenusa) sama dengan jumlah kuadrat sisi-sisi tegaknya.
Rumus: c² = a² + b²
Di mana:
c = sisi miring (sisi terpanjang di depan sudut 90°)
a dan b = sisi penyiku

Tripel Pythagoras Populer:
- 3, 4, 5 dan kelipatannya (6, 8, 10), (9, 12, 15)
- 5, 12, 13
- 7, 24, 25
- 8, 15, 17

Uji Kebalikan Teorema Pythagoras:
- Jika c² = a² + b² -> Segitiga Siku-siku
- Jika c² < a² + b² -> Segitiga Lancip
- Jika c² > a² + b² -> Segitiga Tumpul`,
    lampiranLKPD: `LEMBAR SOAL KONTEKSTUAL PYTHAGORAS:
Sebuah tangga dengan panjang 5 meter disandarkan pada dinding tembok. Jarak ujung bawah tangga ke dinding adalah 3 meter.
1. Gambarkan sketsa segitiga siku-siku yang terbentuk!
2. Hitunglah tinggi tembok yang dapat dicapai oleh tangga tersebut!
3. Jika tangga digeser menjauhi dinding sejauh 1 meter lagi, berapakah penurunan ujung atas tangga pada dinding?`,
    tags: ["Matematika", "Kelas 8", "Pythagoras", "Geometri", "Fase D"],
    tanggalDibuat: "2024-08-20",
    fileLampiran: "Modul_Matematika_Pythagoras_Kls8.pdf",
    ukuranFile: "1.8 MB"
  },
  {
    id: "MAT-003",
    judul: "Modul Ajar Informatika: Berpikir Komputasional & Dekomposisi Masalah",
    mapel: "informatika",
    mapelNama: "Informatika",
    kelas: "7",
    fase: "Fase D (Kelas VII)",
    semester: "Ganjil",
    kategori: "modul_ajar",
    alokasiWaktu: "6 JP (3 Pertemuan)",
    dimensiP5: ["bernalar_kritis", "kreatif", "mandiri"],
    capaianPembelajaran: "Peserta didik mampu menerapkan Berpikir Komputasional (BK) untuk menyelesaikan persoalan sehari-hari yang mengandung struktur data diskrit, pengenalan pola, abstraksi, dan perancangan algoritma sederhana.",
    tujuanPembelajaran: [
      "Menjelaskan 4 pilar utama computational thinking (dekomposisi, pola, abstraksi, algoritma).",
      "Mendekomposisi masalah kompleks menjadi sub-masalah yang lebih mudah dikelola.",
      "Menemukan pola dan membuat abstraksi dalam pemecahan teka-teki logika komputasi (Bebras task).",
      "Menyusun algoritma langkah demi langkah menggunakan diagram alir (flowchart) atau pseudocode."
    ],
    pemahamanBermakna: "Berpikir komputasional adalah kecakapan hidup (life skill) untuk menstrukturkan pemikiran logis yang berlaku tidak hanya pada komputer, melainkan juga dalam mengorganisir kegiatan sekolah, belajar, dan merencanakan masa depan.",
    pertanyaanPemantik: [
      "Bagaimana aplikasi navigasi (seperti Google Maps) bisa menemukan rute tercepat menghindari macet hanya dalam waktu 1 detik?",
      "Jika kamu harus menyiapkan pentas seni sekolah dengan 10 divisi kerja, bagaimana kamu membagi tugasnya agar tidak ada yang tumpang tindih?"
    ],
    modelPembelajaran: "Unplugged Computational Thinking & Tantangan Logika Bebras",
    saranaPrasarana: "Kartu tantangan logika, papan tulis, sticky notes, simulasi flowchart",
    kegiatanPembelajaran: {
      pendahuluan: "Ice breaking permainan tebak pola kartu dan teka-teki penyeberangan sungai (serigala, kambing, dan sayur).",
      inti: "Siswa dikelompokkan untuk memecahkan kasus nyata: Mengoptimalkan antrean kantin sekolah. Mereka menuliskan Dekomposisi, Pola kedatangan siswa, Abstraksi data menu, dan Algoritma layanan dalam bentuk flowchart visual.",
      penutup: "Presentasi kilat kelompok (galeri walk), guru memberikan penegasan tentang esensi algoritma yang efisien."
    },
    asesmen: {
      diagnostik: "Kuis teka-teki logika pola angka dan warna sederhana.",
      formatif: "Rubrik unjuk kerja perancangan flowchart penanganan sampah plastik sekolah.",
      sumatif: "Tes pilihan ganda beralasan (Tantangan Bebras Indonesia Fase D)."
    },
    isiMateriRingkas: `### 4 PILAR BERPIKIR KOMPUTASIONAL (COMPUTATIONAL THINKING)

1. Dekomposisi (Decomposition):
Memecah masalah yang rumit atau besar menjadi bagian-bagian yang lebih kecil dan lebih mudah diselesaikan satu per satu.
Contoh: Membuat nasi goreng dipecah jadi: penyiapan bumbu, pemotongan bahan, proses memasak, dan penyajian.

2. Pengenalan Pola (Pattern Recognition):
Melihat kesamaan, tren, atau keteraturan dalam suatu masalah berdasarkan pengalaman sebelumnya.
Contoh: Mengenali jam-jam ramai antrean di koperasi sekolah.

3. Abstraksi (Abstraction):
Memusatkan perhatian pada informasi yang penting saja dan mengabaikan detail-detail yang tidak relevan.
Contoh: Peta jalur MRT hanya menampilkan stasiun dan lintasan, tidak menampilkan detail pepohonan atau gedung di atasnya.

4. Perancangan Algoritma (Algorithm Design):
Menyusun langkah-langkah sistematis dan terurut yang logis untuk menyelesaikan masalah atau menyelesaikan tugas secara presisi.`,
    lampiranLKPD: `LKPD BERPIKIR KOMPUTASIONAL: TANTANGAN ROBOT MAZE
Tugas: Buatlah rangkaian instruksi (algoritma) agar robot di posisi (A1) dapat mencapai titik bendera (D4) dengan syarat:
- Tidak boleh menabrak rintangan tembok (kotak hitam).
- Mengambil koin bonus di koordinat (B3) dan (C2).
- Tuliskan dalam notasi instruksi: [MAJU(langkah)], [BELOK_KIRI], [BELOK_KANAN], [AMBIL_KOIN].`,
    tags: ["Informatika", "Kelas 7", "Berpikir Komputasional", "Algoritma", "Fase D"],
    tanggalDibuat: "2024-08-25",
    fileLampiran: "Modul_Informatika_BK_Kls7.pdf",
    ukuranFile: "3.1 MB"
  },
  {
    id: "MAT-004",
    judul: "Modul Proyek P5: Jejak Karbon Kita - Pembuatan Ecobrick & Kebun Sekolah",
    mapel: "p5",
    mapelNama: "Proyek Penguatan Profil Pelajar Pancasila (P5)",
    kelas: "7",
    fase: "Fase D (Kelas VII)",
    semester: "Ganjil",
    kategori: "p5",
    alokasiWaktu: "40 JP (Blok 2 Minggu)",
    dimensiP5: ["beriman", "gotong_royong", "kreatif"],
    capaianPembelajaran: "Membangun kesadaran kritis peserta didik terhadap bahaya pencemaran sampah plastik sekali pakai serta melatih aksi nyata gaya hidup berkelanjutan melalui pemanfaatan limbah menjadi produk bernilai guna (ecobrick).",
    tujuanPembelajaran: [
      "Mengaudit timbulan sampah anorganik di kantin dan lingkungan kelas selama 1 minggu.",
      "Menganalisis dampak mikroplastik bagi ekosistem tanah dan perairan.",
      "Membuat produk modular ecobrick dengan standar kepadatan minimal 0,33 g/ml.",
      "Menyusun pameran karya dan kampanye zero plastic waste kepada warga sekolah."
    ],
    pemahamanBermakna: "Bumi adalah titipan Tuhan yang harus dijaga kelestariannya. Setiap sampah plastik yang kita hasilkan akan bertahan ratusan tahun jika tidak kita kelola secara bijak.",
    pertanyaanPemantik: [
      "Berapa kilogram plastik kemasan jajan yang kamu buang setiap minggunya?",
      "Bagaimana kita bisa mengubah sampah plastik kemasan yang tidak bernilai jual menjadi fasilitas bangku taman sekolah yang kokoh?"
    ],
    modelPembelajaran: "Project-Based Learning (PjBL) Terpadu",
    saranaPrasarana: "Botol air mineral 600ml bekas, sampah plastik bersih kering, tongkat kayu pemadat, timbangan digital, lem tembak",
    kegiatanPembelajaran: {
      pendahuluan: "Tahap Pengenalan (8 JP): Nonton bareng film dokumenter 'Pulau Plastik', pemaparan data darurat sampah nasional.",
      inti: "Tahap Kontekstualisasi & Aksi (24 JP): Audit sampah harian, edukasi cuci-kering-potong plastik, perakitan ecobrick dengan standar timbangan, pembuatan modul meja/kursi santai.",
      penutup: "Tahap Refleksi & Tindak Lanjut (8 JP): Pameran gelar karya P5, pengisian lembar asesmen antarteman, deklarasi komitmen bawa tumbler dan kotak bekal."
    },
    asesmen: {
      diagnostik: "Survei kebiasaan pemilahan sampah di rumah dan sekolah.",
      formatif: "Lembar jurnal berkala proyek, lembar observasi gotong royong saat pembuatan ecobrick.",
      sumatif: "Penilaian produk akhir ecobrick (kepadatan, kerapian, kekokohan) dan rubrik presentasi gelar karya."
    },
    isiMateriRingkas: `### PANDUAN STANDAR PROYEK ECOBRICK P5 SMP

Kriteria Botol Ecobrick Standar Internasional:
1. Botol plastik yang digunakan harus seragam (misal ukuran 600 mL atau 1.500 mL).
2. Sampah plastik wajib dalam keadaan BERSIH dan KERING sempurna untuk mencegah pembusukan bakteri anaerob dan gas di dalam botol.
3. Gunakan stik kayu berujung tumpul untuk memadatkan plastik ke setiap sudut dasar botol.
4. Berat minimal untuk botol 600 mL adalah 200 gram (kepadatan = 200 g / 600 ml = 0,33 g/ml).
5. Uji kepadatan: botol tidak boleh penyok atau berbunyi kresek-kresek saat ditekan dengan ibu jari tangan orang dewasa.`,
    lampiranLKPD: `LEMBAR AUDIT TIMBULAN SAMPAH PLASTIK (7 HARI):
Catat setiap bungkus plastik yang kamu konsumsi selama 7 hari:
- Hari 1: Bungkus makanan ringan (... buah), sedotan (... buah), kantong kresek (... buah)
- Hari 2: ...
Pertanyaan Reflektif:
1. Apa jenis plastik yang paling mendominasi konsumsimu?
2. Usaha apa yang bisa kamu lakukan untuk mengurangi 50% sampah tersebut mulai esok hari?`,
    tags: ["P5", "Gaya Hidup Berkelanjutan", "Ecobrick", "Kelas 7", "Fase D"],
    tanggalDibuat: "2024-09-01",
    fileLampiran: "Modul_P5_Gaya_Hidup_Berkelanjutan_FaseD.pdf",
    ukuranFile: "4.5 MB"
  },
  {
    id: "MAT-005",
    judul: "Bahan Ajar & Rangkuman: Bahasa Indonesia - Menggali Pesona Nusantara lewat Teks Deskripsi",
    mapel: "bindo",
    mapelNama: "Bahasa Indonesia",
    kelas: "7",
    fase: "Fase D (Kelas VII)",
    semester: "Ganjil",
    kategori: "bahan_ajar",
    alokasiWaktu: "4 JP",
    dimensiP5: ["berkebinekaan", "kreatif"],
    capaianPembelajaran: "Peserta didik mampu mengevaluasi dan mengkreasi informasi berupa gagasan, pikiran, pandangan, atau pesan dari berbagai teks deskripsi lisan dan tulis tentang objek wisata, budaya, dan kuliner Nusantara.",
    tujuanPembelajaran: [
      "Mengidentifikasi ciri umum, tujuan, dan struktur teks deskripsi (identifikasi, deskripsi bagian, simpulan/kesan).",
      "Menganalisis penggunaan kata sifat, kalimat bermajas, dan cerapan pancaindra dalam teks deskripsi.",
      "Menulis teks deskripsi 3 paragraf tentang destinasi budaya lokal dengan diksi yang menggugah indra pembaca."
    ],
    pemahamanBermakna: "Kemampuan mendeskripsikan sesuatu dengan hidup dan detail memungkinkan kita mempromosikan keindahan alam dan kekayaan tradisi Nusantara kepada dunia luar.",
    pertanyaanPemantik: [
      "Bagaimana kata-kata bisa membuat orang seolah-olah melihat warna jingga senja di Pantai Kuta atau merasakan semilir dinginnya udara Dieng?",
      "Apa bedanya mendeskripsikan secara objektif dan mendeskripsikan dengan kesan pribadi?"
    ],
    modelPembelajaran: "Genre-Based Approach (Pendekatan Berbasis Teks)",
    saranaPrasarana: "Buku siswa Bahasa Indonesia Kemendikbud, rekaman video keindahan Danau Toba, lembar kerja analisis teks",
    kegiatanPembelajaran: {
      pendahuluan: "Menyimak tayangan video 2 menit pesona Raja Ampat tanpa suara, meminta 3 siswa menggambarkan apa yang mereka rasakan.",
      inti: "Membedah struktur teks deskripsi 'Pantai Parangtritis nan Memesona'. Latihan kelompok menandai kata-kata yang memicu cerapan indra penglihatan, pendengaran, dan peraba.",
      penutup: "Membacakan 1 kutipan deskripsi terbaik siswa, refleksi penulisan kreatif."
    },
    asesmen: {
      diagnostik: "Tes singkat memilih kata sifat yang tepat untuk menggambarkan benda di sekitar kelas.",
      formatif: "Tabel analisis struktur dan unsur kebahasaan teks deskripsi.",
      sumatif: "Produk tulisan teks deskripsi objek wisata daerah berilustrasi foto."
    },
    isiMateriRingkas: `### CIRI & STRUKTUR TEKS DESKRIPSI

1. Ciri Teks Deskripsi:
- Menggambarkan atau melukiskan suatu objek (tempat, orang, suasana, benda) secara konkret.
- Melibatkan panca indra (penglihatan, pendengaran, penciuman, pengecapan, perabaan).
- Membuat pembaca atau pendengar seolah-olah melihat, mendengar, atau merasakan langsung apa yang diceritakan.

2. Struktur Teks:
- Judul: Menarik dan menggambarkan isi objek.
- Identifikasi / Orientasi: Pengenalan nama objek, lokasi, sejarah, atau gambaran umum.
- Deskripsi Bagian: Perincian detail aspek fisik objek berdasarkan pengamatan mendalam.
- Simpulan / Penutup: Kesan umum atau apresiasi penulis terhadap keindahan objek.

3. Unsur Kebahasaan:
- Kata Sifat (adjektiva): megah, gemerlap, jernih, semilir.
- Frasa yang melibatkan cerapan indra: "deburan ombak berirama", "aroma tanah basah selepas hujan".
- Kata konkret: bukan sekadar 'burung', melainkan 'burung jalak putih bermata biru'.
- Majas Personifikasi & Asosiasi: "ombak berkejaran mencium bibir pantai".`,
    lampiranLKPD: `TUGAS MENULIS MANDIRI:
Pilihlah salah satu objek berikut:
A. Ruang perpustakaan sekolah impianmu
B. Makanan tradisional favorit daerahmu
C. Tempat wisata alam yang pernah kamu kunjungi
Buatlah teks deskripsi minimal 150 kata dengan menyertakan minimal 3 cerapan pancaindra berbeda!`,
    tags: ["Bahasa Indonesia", "Kelas 7", "Teks Deskripsi", "Fase D"],
    tanggalDibuat: "2024-09-05",
    fileLampiran: "Ringkasan_Teks_Deskripsi_Kls7.pdf",
    ukuranFile: "1.2 MB"
  },
  {
    id: "MAT-006",
    judul: "Bank Asesmen & Kisi-Kisi Sumatif: IPA Kelas 8 - Sistem Pencernaan dan Nutrisi Makanan",
    mapel: "ipa",
    mapelNama: "Ilmu Pengetahuan Alam (IPA)",
    kelas: "8",
    fase: "Fase D (Kelas VIII)",
    semester: "Ganjil",
    kategori: "asesmen",
    alokasiWaktu: "2 JP (80 Menit)",
    dimensiP5: ["bernalar_kritis", "mandiri"],
    capaianPembelajaran: "Peserta didik memahami sistem organ tubuh manusia (sistem pencernaan, peredaran darah, pernapasan, dan ekskresi) dan keterkaitannya dengan pola hidup sehat.",
    tujuanPembelajaran: [
      "Mengidentifikasi 6 jenis nutrisi makanan dan fungsinya bagi metabolisme sel.",
      "Menganalisis proses pencernaan mekanik dan kimiawi beserta enzim pencernaan yang bekerja pada setiap organ.",
      "Mendiagnosis gangguan pencernaan (maag, konstipasi, diare, apendisitis) berdasarkan kasus gaya hidup sehari-hari."
    ],
    pemahamanBermakna: "Makanan bergizi seimbang dan menjaga ritme kerja organ pencernaan adalah investasi penting untuk mencegah penyakit kronis di usia dewasa.",
    pertanyaanPemantik: [
      "Mengapa makanan yang dikunyah lebih lama terasa lebih manis di mulut kita?",
      "Apa yang terjadi pada tubuh jika seseorang kekurangan asupan serat secara terus-menerus?"
    ],
    modelPembelajaran: "Asesmen Sumatif Lingkup Materi",
    saranaPrasarana: "Naskah soal cetak, lembar jawab komputer/manual, kunci jawaban & rubrik penskoran",
    kegiatanPembelajaran: {
      pendahuluan: "Pengondisian ruang ujian, pembacaan tata tertib asesmen sumatif, pembagian naskah soal.",
      inti: "Pengerjaan mandiri soal asesmen sumatif selama 60 menit: 15 butir pilihan ganda berbasis stimulus AKM literasi sains + 5 butir soal uraian analisis kasus nutrisi.",
      penutup: "Pengumpulan lembar jawaban, refleksi tingkat kesulitan soal secara singkat."
    },
    asesmen: {
      diagnostik: "N/A (Instrumen ini adalah Sumatif Akhir Bab)",
      formatif: "N/A",
      sumatif: "15 Soal Pilihan Ganda AKM + 5 Soal Uraian HOTS beserta Pedoman Penskoran."
    },
    isiMateriRingkas: `### KISI-KISI & CONTOH BANK SOAL SUMATIF SISTEM PENCERNAAN

Contoh Soal Pilihan Ganda Tipe AKM:
Stimulus: "Seorang siswa menguji kandungan suatu sampel makanan menggunakan tiga jenis reagen. Hasil pengujian menunjukkan: ditetesi Lugol berubah warna menjadi biru kehitaman; ditetesi Biuret tetap berwarna biru muda; ditetesi Benedict lalu dipanaskan berubah menjadi merah bata."
Pertanyaan: Berdasarkan data uji laboratorium tersebut, zat makanan apakah yang terkandung dalam sampel tersebut?
A. Mengandung protein dan glukosa, tidak mengandung amilum.
B. Mengandung amilum dan glukosa, tidak mengandung protein. (KUNCI JAWABAN)
C. Hanya mengandung lemak dan asam amino.
D. Mengandung vitamin C dosis tinggi.

Contoh Soal Uraian Penalaran:
Jelaskan perbedaan mendasar antara pencernaan mekanik dan kimiawi di dalam lambung, serta sebutkan fungsi asam klorida (HCl) yang disekresikan oleh dinding lambung!`,
    lampiranLKPD: `KUNCI JAWABAN & PEDOMAN RUBRIK:
Skor Maksimal PG = 15 x 4 = 60
Skor Maksimal Uraian = 5 x 8 = 40
Total Nilai = 100
Kriteria Ketercapaian Tujuan Pembelajaran (KKTP):
- 0 - 65 : Perlu bimbingan remedial menyeluruh
- 66 - 75 : Cukup mencapai tujuan (remedial bagian tertentu)
- 76 - 85 : Baik, mencapai tujuan pembelajaran
- 86 - 100 : Sangat mahir (diberikan pengayaan)`,
    tags: ["IPA", "Kelas 8", "Asesmen Sumatif", "Bank Soal", "Sistem Pencernaan"],
    tanggalDibuat: "2024-09-15",
    fileLampiran: "Bank_Soal_IPA_Sistem_Pencernaan_Kls8.pdf",
    ukuranFile: "980 KB"
  },
  {
    id: "MAT-007",
    judul: "LKPD Berdiferensiasi: Bahasa Inggris - Descriptive Text (Describing Animal Habitats)",
    mapel: "bing",
    mapelNama: "Bahasa Inggris",
    kelas: "7",
    fase: "Fase D (Kelas VII)",
    semester: "Ganjil",
    kategori: "lkpd",
    alokasiWaktu: "2 JP",
    dimensiP5: ["berkebinekaan", "bernalar_kritis", "mandiri"],
    capaianPembelajaran: "Students can produce simple spoken and written descriptive texts to describe animals, things, and places using appropriate vocabulary, simple present tense, and adjectives.",
    tujuanPembelajaran: [
      "Identify the physical traits and natural habitats of endangered Indonesian endemic animals (Komodo dragon, Orangutan, Sumatran Tiger).",
      "Use simple present tense accurately with third-person singular verbs (e.g., lives, eats, hunts).",
      "Write a short descriptive paragraph based on a guided mind-map."
    ],
    pemahamanBermakna: "Communicating in English allows us to raise global awareness about wildlife conservation in Indonesia.",
    pertanyaanPemantik: [
      "What makes Indonesian wildlife unique compared to animals on other continents?",
      "How do we describe what an animal looks like and what it eats in proper English?"
    ],
    modelPembelajaran: "Differentiated Instruction (Tingkat Pemula, Menengah, Mahir)",
    saranaPrasarana: "Animal flashcards, fact-sheet, guided worksheet (LKPD Tiga Level)",
    kegiatanPembelajaran: {
      pendahuluan: "Warm-up guessing game: 'Who am I? I have orange fur, I live in trees in Borneo.'",
      inti: "Diferensiasi Konten & Produk: Siswa tier 1 (fondasi) mengisi teks rumpang dengan kata kunci; Siswa tier 2 menyusun paragraf dari mind-map; Siswa tier 3 membuat brosur kampanye penyelamatan satwa.",
      penutup: "Peer check pasangan sebangku, vocabulary exit ticket."
    },
    asesmen: {
      diagnostik: "Pre-quiz kosakata nama bagian tubuh hewan (fur, beak, claws, tail, pouch).",
      formatif: "Lembar kerja berdiferensiasi dan keaktifan diskusi berpasangan.",
      sumatif: "Penilaian unjuk kerja penulisan teks deskriptif hewan."
    },
    isiMateriRingkas: `### GRAMMAR & VOCABULARY FOCUS

1. Simple Present Tense:
- Subject + Verb 1 (s/es) + Complement
- Example: "The Orangutan lives in the rainforest of Sumatra and Borneo."
- "Komodo dragons have sharp teeth and venomous saliva."

2. Adjectives for Animal Description:
- Size: huge, tiny, gigantic, slender.
- Appearance: striped, spotted, hairy, scaly, fierce.
- Behavior: nocturnal, herbivore, solitary, aggressive, gentle.

3. Text Structure:
- Identification: General introduction of the animal.
- Description: Specific physical characteristics, diet, habitat, and unique behaviors.`,
    lampiranLKPD: `STUDENT WORKSHEET: THE KOMODO DRAGON
Fact Box:
- Habitat: Komodo Island, Flores, Indonesia.
- Diet: Deer, buffaloes, wild boars.
- Weight: Up to 70 kg.
- Special feature: Keen sense of smell using its forked yellow tongue.
Task: Write 5 coherent sentences combining the facts above using Simple Present Tense!`,
    tags: ["Bahasa Inggris", "Kelas 7", "LKPD", "Descriptive Text", "Fauna"],
    tanggalDibuat: "2024-09-18",
    fileLampiran: "LKPD_English_Descriptive_Animal_Kls7.pdf",
    ukuranFile: "1.4 MB"
  },
  {
    id: "MAT-008",
    judul: "Alur Tujuan Pembelajaran (ATP) & Capaian Pembelajaran: IPS Fase D (Kelas 7, 8, 9)",
    mapel: "ips",
    mapelNama: "Ilmu Pengetahuan Sosial (IPS)",
    kelas: "7",
    fase: "Fase D (Kelas VII - IX)",
    semester: "Ganjil & Genap",
    kategori: "atp_cp",
    alokasiWaktu: "144 JP / Tahun",
    dimensiP5: ["berkebinekaan", "gotong_royong", "bernalar_kritis"],
    capaianPembelajaran: "Pada akhir fase D, peserta didik mampu memahami keberagaman kondisi geografis Indonesia, interaksi antarruang, dinamika interaksi sosial, pemenuhan kebutuhan ekonomi kelangkaan, serta peranan sejarah kebangsaan Indonesia dari masa praaksara hingga era modern.",
    tujuanPembelajaran: [
      "Tema 1: Manusia, Tempat, dan Lingkungan (Peta, Letak Astronomis, Iklim & Geologis Indonesia).",
      "Tema 2: Interaksi Sosial dan Kelembagaan Sosial di Tengah Kemajemukan.",
      "Tema 3: Dinamika Kependudukan dan Potensi Sumber Daya Alam Kemaritiman.",
      "Tema 4: Pemberdayaan Masyarakat dan Literasi Finansial Pengelolaan Keuangan Remaja."
    ],
    pemahamanBermakna: "Geografi dan sejarah membentuk jati diri bangsa kita; dengan memahami posisi strategis Indonesia, kita mampu mengelola sumber daya alam secara berkelanjutan.",
    pertanyaanPemantik: [
      "Bagaimana letak geografis di antara dua benua dan dua samudra memengaruhi cuaca serta jalur perdagangan Nusantara?",
      "Mengapa terjadi kelangkaan barang kebutuhan pokok menjelang hari raya dan bagaimana peran pasar menyeimbangkannya?"
    ],
    modelPembelajaran: "Alur Pembelajaran Spiral Terintegrasi IPS Fase D",
    saranaPrasarana: "Peta rupa bumi, atlas digital, data BPS demografi penduduk, portal sejarah kemendikbud",
    kegiatanPembelajaran: {
      pendahuluan: "Panduan pemetaan bagi guru MGMP IPS SMP dalam membagi materi per semester.",
      inti: "Struktur alur: Kelas 7 berfokus pada keluarga, ruang hidup lokal, dan interaksi sosial dasar; Kelas 8 berfokus pada kemaritiman, interaksi keruangan ASEAN, dan kolonialisme; Kelas 9 berfokus pada globalisasi dan perubahan sosial.",
      penutup: "Matriks integrasi asesmen diagnostik berkala dan asesmen akhir fase D."
    },
    asesmen: {
      diagnostik: "Pemetaan literasi spasial siswa (membaca peta rupa bumi).",
      formatif: "Tugas proyek peta tematik persebaran flora fauna garis Wallace-Weber.",
      sumatif: "Portofolio karya studi kelayakan ekonomi pasar lokal."
    },
    isiMateriRingkas: `### MATRIKS ALUR TUJUAN PEMBELAJARAN (ATP) IPS SMP FASE D

Semester 1 (Kelas 7):
- 7.1 Memahami konsep konektivitas antarruang dan lokasi Indonesia via peta.
- 7.2 Menjelaskan interaksi sosial asosiatif dan disosiatif di lingkungan sekolah.
- 7.3 Menganalisis peran norma sosial dalam menciptakan keteraturan bermasyarakat.

Semester 2 (Kelas 7):
- 7.4 Mengidentifikasi kelangkaan sebagai inti masalah ekonomi manusia.
- 7.5 Memahami konsep permintaan, penawaran, harga keseimbangan pasar tradisional.
- 7.6 Menelusuri peninggalan kebudayaan masa Hindu-Buddha dan Islam di Nusantara.`,
    lampiranLKPD: `DOKUMEN DUKUNGAN ATP:
Tersedia lembar pemetaan CP ke TP, pembagian alokasi minggu efektif semester, dan modul ajar turunan per bab.`,
    tags: ["IPS", "Fase D", "ATP", "CP", "Kurikulum Merdeka"],
    tanggalDibuat: "2024-07-28",
    fileLampiran: "ATP_IPS_Fase_D_SMP_Lengkap.pdf",
    ukuranFile: "2.1 MB"
  },
  {
    id: "MAT-009",
    judul: "Modul Proyek P5: Suara Demokrasi - Pemilihan Ketua OSIS Jujur & Berkeadilan",
    mapel: "p5",
    mapelNama: "Proyek Penguatan Profil Pelajar Pancasila (P5)",
    kelas: "8",
    fase: "Fase D (Kelas VIII)",
    semester: "Ganjil",
    kategori: "p5",
    alokasiWaktu: "36 JP",
    dimensiP5: ["berkebinekaan", "bernalar_kritis", "gotong_royong"],
    capaianPembelajaran: "Peserta didik merefleksikan makna demokrasi, musyawarah mufakat, dan hak bersuara melalui simulasi pemilu sekolah serta perancangan visi misi kepemimpinan muda.",
    tujuanPembelajaran: [
      "Menganalisis asas Luber Jurdil (Langsung, Umum, Bebas, Rahasia, Jujur, dan Adil) dalam sistem demokrasi.",
      "Mengenal peran KPU sekolah, bawaslu sekolah, dan pemilih cerdas anti hoaks/black campaign.",
      "Melaksanakan debat kandidat calon ketua OSIS berbasis isu lingkungan dan perundungan (anti-bullying).",
      "Mengorganisasikan pemungutan dan penghitungan suara secara transparan dan akuntabel."
    ],
    pemahamanBermakna: "Demokrasi yang sehat dimulai dari kesediaan mendengarkan pandangan yang berbeda dan mengutamakan kepentingan bersama di atas golongan.",
    pertanyaanPemantik: [
      "Apa jadinya jika seorang pemimpin dipilih hanya karena popularitas tanpa melihat visi dan rekam jejak kinerjanya?",
      "Bagaimana cara kita menangkal berita bohong (hoaks) saat kampanye di media sosial sekolah?"
    ],
    modelPembelajaran: "Simulasi Peran Nyata & Inquiry Demokrasi",
    saranaPrasarana: "Bilik suara kardus daur ulang, surat suara tiruan, tinta celup jari, format berita acara C1",
    kegiatanPembelajaran: {
      pendahuluan: "Bedah kasus: Mengapa suara setiap warga negara berharga? Menyimak sejarah pemilu di Indonesia.",
      inti: "Pembentukan komisi pemilihan OSIS, seleksi berkas calon, perumusan visi misi, debat terbuka kandidat, pemungutan suara serentak.",
      penutup: "Deklarasi siap menang siap kalah, pelantikan pengurus OSIS terpilih, refleksi etika demokrasi."
    },
    asesmen: {
      diagnostik: "Angket pemahaman dasar tentang hak suara dan musyawarah.",
      formatif: "Lembar penilaian argumen saat debat kandidat dan rubrik integritas panitia.",
      sumatif: "Laporan pertanggungjawaban proyek dan esai reflektif 'Menjadi Pemilih Kritis'."
    },
    isiMateriRingkas: `### ALUR TAHAPAN PROYEK SUARA DEMOKRASI SMP

Tahap 1: Pengenalan (8 JP)
- Makna konstitusi, pasal 28 UUD 1945 tentang kemerdekaan berpendapat.
- Asas pemilu LUBER JURDIL.

Tahap 2: Kontekstualisasi (8 JP)
- Identifikasi masalah nyata di sekolah (kebersihan, kedisiplinan, bullying, kreativitas ekskul).
- Merumuskan kriteria pemimpin ideal SMP.

Tahap 3: Aksi Nyata (14 JP)
- Kampanye dialogis tatap muka & media kreatif infografis.
- Debat visi misi dengan panelis perwakilan siswa dan guru.
- Hari pencoblosan dan penghitungan suara realtime.

Tahap 4: Refleksi & Evaluasi (6 JP)
- Refleksi pengalaman menyalurkan aspirasi.
- Komitmen mendukung program ketua OSIS terpilih.`,
    lampiranLKPD: `LEMBAR KERJA ANALISIS VISI MISI KANDIDAT:
Nama Calon: ....................
1. Apa program unggulan paling realistis yang ditawarkan?
2. Apakah program tersebut menjawab permasalahan siswa di sekolah?
3. Apa masukan perbaikan yang ingin kamu sampaikan kepada kandidat ini?`,
    tags: ["P5", "Suara Demokrasi", "Kelas 8", "Fase D", "OSIS"],
    tanggalDibuat: "2024-09-22",
    fileLampiran: "Modul_P5_Suara_Demokrasi_SMP_FaseD.pdf",
    ukuranFile: "3.8 MB"
  },
  {
    id: "MAT-010",
    judul: "Modul Ajar Pendidikan Pancasila: Meneladani Nilai-Nilai Pancasila dalam Kehidupan Berbangsa",
    mapel: "ppkn",
    mapelNama: "Pendidikan Pancasila",
    kelas: "7",
    fase: "Fase D (Kelas VII)",
    semester: "Ganjil",
    kategori: "modul_ajar",
    alokasiWaktu: "6 JP",
    dimensiP5: ["beriman", "berkebinekaan", "gotong_royong"],
    capaianPembelajaran: "Peserta didik memahami sejarah kelahiran, perumusan, dan penetapan Pancasila sebagai dasar negara; serta mampu meneladani komitmen para pendiri bangsa dalam kehidupan sehari-hari.",
    tujuanPembelajaran: [
      "Menganalisis sidang BPUPK pertama dan kedua dalam merumuskan dasar negara.",
      "Meneladani sikap nasionalisme, patriotisme, dan jiwa toleransi para pendiri bangsa dalam Piagam Jakarta.",
      "Mempraktikkan perilaku gotong royong dan musyawarah di lingkungan sekolah dan keluarga."
    ],
    pemahamanBermakna: "Pancasila adalah titik temu pemersatu (meja statis) sekaligus pemandu arah kemajuan bangsa Indonesia (leitstar dinamis).",
    pertanyaanPemantik: [
      "Bagaimana para pendiri bangsa kita yang berbeda suku, agama, dan latar belakang bisa sepakat merumuskan 5 sila Pancasila tanpa perpecahan?",
      "Apa contoh konkret penerapan sila ke-3 dalam menjaga kerukunan antarkelas?"
    ],
    modelPembelajaran: "Role Playing Sidang BPUPK & Value Clarification Technique (VCT)",
    saranaPrasarana: "Naskah drama sidang BPUPK, salinan dokumen Piagam Jakarta, proyektor video dokumenter sejarah",
    kegiatanPembelajaran: {
      pendahuluan: "Menyanyikan lagu Garuda Pancasila secara khidmat, mendiskusikan makna lambang burung garuda dan pita Bhinneka Tunggal Ika.",
      inti: "Simulasi bermain peran: Siswa memerankan tokoh Ir. Soekarno, Moh. Yamin, dan Mr. Soepomo saat menyampaikan pandangan dasar negara di gedung Chuo Sangi-In.",
      penutup: "Refleksi nilai keteladanan 'Jiwa 45' dan komitmen pribadi peserta didik."
    },
    asesmen: {
      diagnostik: "Pertanyaan lisan mengenai urutan sila Pancasila dan simbol lambang bintang, rantai, pohon beringin, banteng, padi kapas.",
      formatif: "Rubrik penghayatan peran sidang BPUPK dan keaktifan argumen kelompok.",
      sumatif: "Tes esai analisis kasus tantangan ideologi Pancasila di era media sosial."
    },
    isiMateriRingkas: `### SEJARAH PERUMUSAN PANCASILA

1. Tokoh Perumus Dasar Negara (Sidang BPUPK 29 Mei - 1 Juni 1945):
- Mohammad Yamin (29 Mei 1945): Peri Kebangsaan, Peri Kemanusiaan, Peri Ketuhanan, Peri Kerakyatan, Kesejahteraan Rakyat.
- Soepomo (31 Mei 1945): Paham Persatuan/Integralistik, Kekeluargaan, Keseimbangan Lahir Batin, Musyawarah, Keadilan Rakyat.
- Ir. Soekarno (1 Juni 1945): Kebangsaan Indonesia, Internasionalisme/Perikemanusiaan, Mufakat/Demokrasi, Kesejahteraan Sosial, Ketuhanan yang Berkebudayaan. (Lahir istilah Pancasila).

2. Panitia Sembilan & Piagam Jakarta (22 Juni 1945):
Menghasilkan rancangan pembukaan yang memuat rumusan Pancasila. Pada 18 Agustus 1945 di sidang PPKI disepakati perubahan kalimat sila pertama demi persatuan bangsa Indonesia menjadi: 'Ketuhanan Yang Maha Esa'.`,
    lampiranLKPD: `LEMBAR KERJA REFLEKSI NILAI PANCASILA:
Tuliskan 1 tindakan konkret yang sudah dan akan kamu lakukan minggu ini yang mencerminkan:
- Sila 1 (Ketuhanan): ................................
- Sila 2 (Kemanusiaan): .............................
- Sila 3 (Persatuan): ................................
- Sila 4 (Kerakyatan / Musyawarah): .................
- Sila 5 (Keadilan Sosial): ..........................`,
    tags: ["PPKn", "Pendidikan Pancasila", "BPUPK", "Kelas 7", "Fase D"],
    tanggalDibuat: "2024-09-28",
    fileLampiran: "Modul_Pancasila_FaseD_SMP.pdf",
    ukuranFile: "2.3 MB"
  }
];

export const initialTeachingLogs = [
  {
    id: "LOG-01",
    tanggal: "2024-10-14",
    jamPelajaran: "Ke 1 - 3 (07.15 - 09.30)",
    kelas: "7A",
    mapel: "ipa",
    mapelNama: "Ilmu Pengetahuan Alam (IPA)",
    materi: "Pengukuran Besaran Massa & Volume di Laboratorium",
    kehadiran: "31 / 32 Siswa (1 Izin sakit)",
    kegiatan: "Praktikum pengukuran volume benda tak beraturan menggunakan gelas ukur. Siswa aktif bekerja sama dalam 6 kelompok.",
    refleksi: "Kelompok 2 masih ragu membaca miniskus cekung pada batas cairan. Perlu demonstrasi ulang pada awal pertemuan berikutnya.",
    status: "Selesai"
  },
  {
    id: "LOG-02",
    tanggal: "2024-10-15",
    jamPelajaran: "Ke 4 - 5 (09.45 - 11.15)",
    kelas: "8B",
    mapel: "matematika",
    mapelNama: "Matematika",
    materi: "Pembuktian Luas Persegi Teorema Pythagoras",
    kehadiran: "32 / 32 Siswa (Lengkap)",
    kegiatan: "Aktivitas puzzle origami potongan kertas 4 segitiga siku-siku. Mengonstruksi pemahaman a² + b² = c².",
    refleksi: "Metode manipulatif kertas berpetak sangat efektif membantu anak visual memahami rumus tanpa harus menghafal.",
    status: "Selesai"
  },
  {
    id: "LOG-03",
    tanggal: "2024-10-16",
    jamPelajaran: "Ke 6 - 8 (12.30 - 14.30)",
    kelas: "7C",
    mapel: "informatika",
    mapelNama: "Informatika",
    materi: "Dekomposisi Masalah & Flowchart Sederhana",
    kehadiran: "30 / 32 Siswa (2 Lomba OSN)",
    kegiatan: "Mendesain diagram alir algoritma pemilihan rute jalan terpendek dari rumah ke sekolah.",
    refleksi: "Sebagian siswa masih bingung membedakan simbol belah ketupat (Decision/Keputusan) dengan persegi panjang (Proses). Perlu latihan mandiri di LKPD.",
    status: "Selesai"
  },
  {
    id: "LOG-04",
    tanggal: "2024-10-18",
    jamPelajaran: "Ke 1 - 4 (07.15 - 10.00)",
    kelas: "7A & 7B",
    mapel: "p5",
    mapelNama: "Proyek Penguatan Profil Pelajar Pancasila (P5)",
    materi: "P5 Gaya Hidup Berkelanjutan: Audit Sampah Plastik",
    kehadiran: "64 Siswa (Gabungan Paralel)",
    kegiatan: "Menimbang sampah plastik botol dan kemasan hasil pengumpulan kelas. Pengecekan standar berat ecobrick pertama.",
    refleksi: "Siswa sangat antusias dan mulai peduli membawa tumbler air minum ke sekolah untuk meminimalisir sampah botol baru.",
    status: "Selesai"
  }
];

export const initialSchedule = [
  { hari: "Senin", jam: "07.15 - 09.30", kelas: "7A", mapel: "IPA", ruangan: "Lab IPA 1" },
  { hari: "Senin", jam: "10.00 - 12.15", kelas: "7B", mapel: "IPA", ruangan: "Lab IPA 1" },
  { hari: "Selasa", jam: "07.15 - 09.30", kelas: "8B", mapel: "Matematika", ruangan: "Kelas 8B" },
  { hari: "Selasa", jam: "09.45 - 11.15", kelas: "8A", mapel: "Matematika", ruangan: "Kelas 8A" },
  { hari: "Rabu", jam: "07.15 - 09.30", kelas: "7C", mapel: "Informatika", ruangan: "Lab Komputer 2" },
  { hari: "Rabu", jam: "10.00 - 12.15", kelas: "7A", mapel: "Informatika", ruangan: "Lab Komputer 2" },
  { hari: "Kamis", jam: "07.15 - 09.30", kelas: "8C", mapel: "Matematika", ruangan: "Kelas 8C" },
  { hari: "Kamis", jam: "10.00 - 11.30", kelas: "7B", mapel: "IPA", ruangan: "Ruang Guru / Rapat MGMP" },
  { hari: "Jumat", jam: "07.00 - 10.30", kelas: "7A, 7B, 7C", mapel: "Koordinator Proyek P5", ruangan: "Aula & Lapangan" },
];

export const sampleCPMasterSMP = [
  {
    mapel: "IPA",
    fase: "Fase D (SMP Kelas 7-9)",
    elemen: "Pemahaman IPA & Keterampilan Proses",
    deskripsiCP: "Pada akhir Fase D, peserta didik mampu melakukan pengukuran terhadap aspek fisis, mengidentifikasi sifat zat dan perubahannya, memahami sistem organ manusia, interaksi makhluk hidup dan lingkungannya, konsep gaya dan gerak, listrik dan magnet, serta struktur bumi dan tata surya. Peserta didik juga terampil merancang percobaan ilmiah mandiri, mengumpulkan data, dan mengomunikasikan hasil investigasi secara logis dan etis."
  },
  {
    mapel: "Matematika",
    fase: "Fase D (SMP Kelas 7-9)",
    elemen: "Bilangan, Aljabar, Pengukuran, Geometri, Analisis Data & Peluang",
    deskripsiCP: "Peserta didik dapat membaca, menulis, dan membandingkan bilangan bulat, rasional, dan tak rasional; menggunakan faktorisasi prima; mengoperasikan aljabar linear dan persamaan kuadrat; menggunakan Teorema Pythagoras; menghitung luas permukaan dan volume bangun ruang; serta menyajikan dan menganalisis data statistik dan peluang kejadian tunggal."
  },
  {
    mapel: "Informatika",
    fase: "Fase D (SMP Kelas 7-9)",
    elemen: "Berpikir Komputasional, TIK, SK, JKI, AD, AP, DSI, PLB",
    deskripsiCP: "Peserta didik mampu menerapkan Berpikir Komputasional dalam persoalan komputasi terstruktur; mengoperasikan aplikasi pengolah dokumen, angka, dan presentasi secara produktif; memahami interaksi perangkat keras dan sistem operasi; memahami protokol jaringan dan keamanan berinternet; menganalisis data sederhana; merancang algoritma dan program visual (Scratch/Blockly/Python dasar); serta memahami etika bermedia digital."
  },
  {
    mapel: "Bahasa Indonesia",
    fase: "Fase D (SMP Kelas 7-9)",
    elemen: "Menyimak, Membaca dan Memirsa, Berbicara dan Mempresentasikan, Menulis",
    deskripsiCP: "Peserta didik mampu memahami, mengolah, dan menginterpretasikan informasi paparan lisan dan tulis dari teks deskripsi, narasi, prosedur, eksposisi, dan puisi. Mampu menyampaikan gagasan secara terstruktur, santun, dan kritis, serta menulis teks kreatif dan informatif yang kaya kosakata dan bernalar logis."
  }
];
