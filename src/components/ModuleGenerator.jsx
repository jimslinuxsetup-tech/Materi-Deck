import React, { useState } from 'react';
import { 
  Save, ArrowLeft, ArrowRight, Check, Plus, Trash2, 
  BookOpen, Layers, Award, FileText, CheckCircle2, RotateCcw
} from 'lucide-react';
import { subjectList, profilPelajarPancasilaList } from '../data/initialData';

const TEMPLATES = [
  {
    label: "IPA: Sistem Tata Surya (Kelas 7)",
    data: {
      judul: "Modul Ajar IPA: Karakteristik Anggota Tata Surya & Gravitasi Planet",
      mapel: "ipa",
      mapelNama: "Ilmu Pengetahuan Alam (IPA)",
      kelas: "7",
      fase: "Fase D (Kelas VII)",
      semester: "Genap",
      kategori: "modul_ajar",
      alokasiWaktu: "6 JP (2 Pertemuan)",
      dimensiP5: ["bernalar_kritis", "kreatif", "gotong_royong"],
      capaianPembelajaran: "Peserta didik mengelaborasikan pemahamannya tentang posisi relatif bumi-bulan-matahari dalam sistem tata surya, pengaruh gravitasi, dan fenomena gerhana serta pasang surut air laut.",
      tujuanPembelajaran: [
        "Membandingkan karakteristik planet terestrial dan planet jovian dalam tata surya.",
        "Mendemonstrasikan orbit revolusi planet dan hukum gravitasi menggunakan simulasi interaktif.",
        "Membuat model visual tata surya berskala menggunakan bahan daur ulang."
      ],
      pemahamanBermakna: "Keteraturan orbit planet dalam tata surya mencerminkan keagungan penciptaan alam semesta dan pentingnya keseimbangan gravitasi bagi keberlangsungan kehidupan di Bumi.",
      pertanyaanPemantik: [
        "Mengapa planet Merkurius yang paling dekat dengan matahari bukan merupakan planet terpanas di tata surya kita?",
        "Apa jadinya jika gaya gravitasi bumi tiba-tiba berkurang menjadi setengah dari nilai sekarang?"
      ],
      modelPembelajaran: "Project-Based Learning (PjBL) & Eksplorasi PhET Simulation",
      saranaPrasarana: "Laptop, proyektor, bola styrofoam daur ulang, kawat gantungan, lembar kerja PhET",
      kegiatanPembelajaran: {
        pendahuluan: "Menayangkan video cuplikan teleskop James Webb tentang galaksi Bima Sakti dan melontarkan pertanyaan pemantik.",
        inti: "Diferensiasi Proses: Siswa mengeksplorasi simulasi gravitasi orbit; Kelompok visual membuat poster infografis perbandingan ukuran planet; Kelompok kinestetik merakit miniatur model gantung berskala.",
        penutup: "Pameran hasil karya keliling meja (gallery walk) dan refleksi satu hal baru paling menakjubkan yang dipelajari."
      },
      asesmen: {
        diagnostik: "Pre-test 5 soal mengenai urutan nama planet dari yang terdekat ke matahari.",
        formatif: "Checklist pengamatan kerja sama kelompok dan rubrik perakitan skala planet.",
        sumatif: "Tes pilihan ganda beralasan dan penilaian produk model tata surya."
      },
      isiMateriRingkas: `### KARAKTERISTIK ANGGOTA TATA SURYA

1. Matahari sebagai Bintang Pusat:
Massa matahari mencapai 99,8% dari total massa tata surya. Sumber energinya adalah reaksi fusi nuklir hidrogen menjadi helium.

2. Pengelompokan Planet:
- Planet Dalam (Terestrial / Berbatu): Merkurius, Venus, Bumi, Mars. Ciri: berukuran relatif kecil, padat berbatu, tidak memiliki cincin.
- Planet Luar (Jovian / Raksasa Gas & Es): Yupiter, Saturnus, Uranus, Neptunus. Ciri: berukuran sangat masif, tersusun atas gas dan es, memiliki cincin dan banyak satelit alami.`,
      lampiranLKPD: `LKPD: SKALA PERBANDINGAN JARAK DAN DIAMETER PLANET
Tugas Kelompok:
1. Hitunglah perbandingan diameter planet jika Bumi diumpamakan sebesar kelereng berdiameter 1 cm!
2. Temukan urutan planet dari yang terpadat hingga yang paling renggang massa jenisnya!
3. Analisis mengapa Pluto sejak 2006 diklasifikasikan sebagai planet kerdil (dwarf planet) oleh IAU!`,
      tags: ["IPA", "Kelas 7", "Tata Surya", "Fase D"]
    }
  },
  {
    label: "Matematika: Bangun Ruang Sisi Lengkung (Kelas 9)",
    data: {
      judul: "Modul Ajar Matematika: Luas Permukaan & Volume Tabung, Kerucut, Bola",
      mapel: "matematika",
      mapelNama: "Matematika",
      kelas: "9",
      fase: "Fase D (Kelas IX)",
      semester: "Genap",
      kategori: "modul_ajar",
      alokasiWaktu: "8 JP (4 Pertemuan)",
      dimensiP5: ["bernalar_kritis", "kreatif", "mandiri"],
      capaianPembelajaran: "Peserta didik dapat menentukan luas permukaan dan volume bangun ruang sisi lengkung (tabung, kerucut, dan bola) serta memecahkan masalah kontekstual yang berkaitan dengan kemasan industri dan tangki penampungan.",
      tujuanPembelajaran: [
        "Menemukan jaring-jaring tabung dan kerucut melalui bedah kaleng dan corong karton.",
        "Menghitung luas permukaan tabung, kerucut, dan bola menggunakan rumus matematika.",
        "Menghitung volume zat cair dalam tangki tabung dan wadah kerucut.",
        "Menyelesaikan masalah optimasi kemasan dengan biaya bahan minimum."
      ],
      pemahamanBermakna: "Industri pengemasan makanan dan minuman menggunakan perhitungan geometri sisi lengkung untuk memaksimalkan volume isi dengan luas bahan permukaan seminimal mungkin.",
      pertanyaanPemantik: [
        "Mengapa sebagian besar kaleng minuman ringan atau tangki minyak berbentuk tabung, bukan balok atau kubus?",
        "Jika jari-jari tabung digandakan menjadi 2 kali lipat namun tingginya tetap, berapa kali lipat kenaikan volumenya?"
      ],
      modelPembelajaran: "Inquiry Learning dengan Eksperimen Pengisian Beras / Air",
      saranaPrasarana: "Kaleng bekas, karton manila, beras / pasir, jangka, gunting, neraca timbangan",
      kegiatanPembelajaran: {
        pendahuluan: "Membedah kaleng susu kental manis untuk memperlihatkan 2 lingkaran dan 1 persegi panjang sebagai selimut tabung.",
        inti: "Eksperimen pembuktian volume: Menuang beras dari wadah kerucut ke tabung dengan diameter dan tinggi yang sama. Latihan soal kontekstual tangki air.",
        penutup: "Menyimpulkan rumus bersama siswa, kuis cepat 3 menit pemahaman rasio jari-jari."
      },
      asesmen: {
        diagnostik: "Tes pemahaman rumus luas lingkaran (πr²) dan keliling lingkaran (2πr).",
        formatif: "Rubrik penemuan rumus melalui bedah jaring-jaring karton.",
        sumatif: "Tes sumatif 10 soal uraian penerapan bangun ruang sisi lengkung."
      },
      isiMateriRingkas: `### RUMUS DASAR BANGUN RUANG SISI LENGKUNG

1. TABUNG:
- Luas Selimut = 2 × π × r × t
- Luas Permukaan = 2 × π × r × (r + t)
- Volume = π × r² × t`,
      lampiranLKPD: `STUDI KASUS INDUSTRI: DESAIN KALENG BISKUIT HEMAT BIAYA
Perusahaan makanan ingin membuat kaleng biskuit berbentuk tabung dengan volume 1.000 cm³. Rancang 2 alternatif ukuran dan hitung biaya sengnya.`,
      tags: ["Matematika", "Kelas 9", "Bangun Ruang", "Geometri", "Fase D"]
    }
  }
];

export default function ModuleGenerator({ onSave, onCancel, editingDoc = null }) {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    id: editingDoc?.id || `MOD-${Date.now().toString().slice(-4)}`,
    judul: editingDoc?.judul || '',
    mapel: editingDoc?.mapel || 'ipa',
    mapelNama: editingDoc?.mapelNama || 'Ilmu Pengetahuan Alam (IPA)',
    kelas: editingDoc?.kelas || '7',
    fase: editingDoc?.fase || 'Fase D (Kelas VII)',
    semester: editingDoc?.semester || 'Ganjil',
    kategori: 'modul_ajar',
    alokasiWaktu: editingDoc?.alokasiWaktu || '6 JP (3 Pertemuan)',
    dimensiP5: editingDoc?.dimensiP5 || ['bernalar_kritis', 'gotong_royong'],
    capaianPembelajaran: editingDoc?.capaianPembelajaran || '',
    tujuanPembelajaran: editingDoc?.tujuanPembelajaran || ['', ''],
    pemahamanBermakna: editingDoc?.pemahamanBermakna || '',
    pertanyaanPemantik: editingDoc?.pertanyaanPemantik || ['', ''],
    modelPembelajaran: editingDoc?.modelPembelajaran || 'Problem-Based Learning (PBL)',
    saranaPrasarana: editingDoc?.saranaPrasarana || '',
    kegiatanPembelajaran: {
      pendahuluan: editingDoc?.kegiatanPembelajaran?.pendahuluan || 'Guru membuka pembelajaran dengan salam, mempresensi siswa, melakukan apersepsi kaitan dengan kehidupan sehari-hari, dan menyampaikan tujuan pembelajaran.',
      inti: editingDoc?.kegiatanPembelajaran?.inti || 'Diferensiasi Proses & Konten: Siswa berkelompok membedah materi melalui diskusi studi kasus. Guru mendampingi kelompok yang membutuhkan bimbingan bertahap.',
      penutup: editingDoc?.kegiatanPembelajaran?.penutup || 'Siswa bersama guru menyimpulkan inti pembelajaran, melakukan asesmen formatif kilat, mengisi lembar refleksi belajar, dan berdoa penutup.'
    },
    asesmen: {
      diagnostik: editingDoc?.asesmen?.diagnostik || 'Kuis tanya jawab lisan pemahaman prasyarat di awal bab.',
      formatif: editingDoc?.asesmen?.formatif || 'Lembar observasi keaktifan diskusi kelompok dan pengerjaan LKPD.',
      sumatif: editingDoc?.asesmen?.sumatif || 'Tes tertulis lingkup materi berupa 15 soal pilihan ganda dan 5 uraian analitis.'
    },
    isiMateriRingkas: editingDoc?.isiMateriRingkas || '',
    lampiranLKPD: editingDoc?.lampiranLKPD || '',
    tags: editingDoc?.tags || ['Kurikulum Merdeka', 'Fase D']
  });

  const steps = [
    { number: 1, title: "Identitas Modul", desc: "Mapel & Kelas" },
    { number: 2, title: "Profil Pancasila", desc: "Dimensi Karakter" },
    { number: 3, title: "CP & Tujuan", desc: "Target Capaian" },
    { number: 4, title: "Langkah Ajar", desc: "Diferensiasi" },
    { number: 5, title: "Asesmen & LKPD", desc: "Evaluasi & Bahan" }
  ];

  const handleMapelChange = (e) => {
    const val = e.target.value;
    const subj = subjectList.find(s => s.id === val);
    setFormData(prev => ({
      ...prev,
      mapel: val,
      mapelNama: subj ? subj.name : val
    }));
  };

  const handleKelasChange = (e) => {
    const val = e.target.value;
    setFormData(prev => ({
      ...prev,
      kelas: val,
      fase: `Fase D (Kelas ${val === '7' ? 'VII' : val === '8' ? 'VIII' : 'IX'})`
    }));
  };

  const toggleP5 = (id) => {
    setFormData(prev => {
      const exists = prev.dimensiP5.includes(id);
      return {
        ...prev,
        dimensiP5: exists ? prev.dimensiP5.filter(x => x !== id) : [...prev.dimensiP5, id]
      };
    });
  };

  const handleAddTP = () => {
    setFormData(prev => ({
      ...prev,
      tujuanPembelajaran: [...prev.tujuanPembelajaran, '']
    }));
  };

  const handleUpdateTP = (index, value) => {
    setFormData(prev => {
      const updated = [...prev.tujuanPembelajaran];
      updated[index] = value;
      return { ...prev, tujuanPembelajaran: updated };
    });
  };

  const handleRemoveTP = (index) => {
    setFormData(prev => ({
      ...prev,
      tujuanPembelajaran: prev.tujuanPembelajaran.filter((_, i) => i !== index)
    }));
  };

  const handleAddPertanyaan = () => {
    setFormData(prev => ({
      ...prev,
      pertanyaanPemantik: [...prev.pertanyaanPemantik, '']
    }));
  };

  const handleUpdatePertanyaan = (index, value) => {
    setFormData(prev => {
      const updated = [...prev.pertanyaanPemantik];
      updated[index] = value;
      return { ...prev, pertanyaanPemantik: updated };
    });
  };

  const handleRemovePertanyaan = (index) => {
    setFormData(prev => ({
      ...prev,
      pertanyaanPemantik: prev.pertanyaanPemantik.filter((_, i) => i !== index)
    }));
  };

  const loadPresetTemplate = (template) => {
    setFormData(prev => ({
      ...prev,
      ...template.data,
      id: prev.id
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.judul.trim()) {
      alert("Silakan isi Judul Modul Ajar terlebih dahulu.");
      return;
    }
    const cleaned = {
      ...formData,
      tujuanPembelajaran: formData.tujuanPembelajaran.filter(t => t.trim() !== ''),
      pertanyaanPemantik: formData.pertanyaanPemantik.filter(q => q.trim() !== ''),
      tanggalDibuat: editingDoc?.tanggalDibuat || new Date().toISOString().split('T')[0]
    };
    onSave(cleaned);
  };

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 shadow-2xs overflow-hidden w-full">
      
      {/* Top Banner - Minimalist Dual Tone */}
      <div className="bg-white p-6 md:p-8 border-b border-neutral-200 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1.5 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono border border-neutral-200 bg-neutral-100 text-neutral-800">
            <span>✦</span>
            <span>Generator Modul Ajar Fase D</span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-normal text-neutral-900 tracking-tight">
            {editingDoc ? 'Edit Perangkat Ajar' : 'Penyusun Modul Ajar Kurikulum Merdeka'}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500">
            Panduan penyusunan terstruktur sesuai standar BSKAP Kemendikbudristek untuk jenjang SMP.
          </p>
        </div>

        {/* Preset Selector */}
        {!editingDoc && (
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3 flex flex-col gap-1.5 text-xs">
            <span className="font-mono text-[11px] text-neutral-600">Muat Template Standar:</span>
            <div className="flex flex-wrap gap-1.5">
              {TEMPLATES.map((tpl, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => loadPresetTemplate(tpl)}
                  className="px-2.5 py-1 bg-white border border-neutral-300 text-neutral-900 font-medium rounded-lg hover:border-neutral-900 transition-colors shadow-2xs text-[11px]"
                >
                  + {tpl.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Stepper Navigation */}
      <div className="border-b border-neutral-200 bg-neutral-50/50 px-6 py-3 overflow-x-auto">
        <div className="flex items-center justify-between min-w-[550px] gap-2">
          {steps.map((st) => (
            <button
              key={st.number}
              type="button"
              onClick={() => setActiveStep(st.number)}
              className={`flex items-center gap-2.5 py-2 px-3 rounded-lg text-left transition-all ${
                activeStep === st.number
                  ? 'bg-neutral-900 text-white shadow-2xs'
                  : activeStep > st.number
                  ? 'bg-white border border-neutral-300 text-neutral-900'
                  : 'text-neutral-500 hover:bg-neutral-100'
              }`}
            >
              <div
                className={`w-6 h-6 rounded flex items-center justify-center font-mono text-xs ${
                  activeStep === st.number
                    ? 'bg-white text-neutral-900 font-bold'
                    : activeStep > st.number
                    ? 'bg-neutral-100 text-neutral-900 font-bold'
                    : 'bg-neutral-200 text-neutral-600'
                }`}
              >
                {activeStep > st.number ? <Check className="w-3.5 h-3.5" /> : st.number}
              </div>
              <div>
                <p className="text-xs font-medium leading-tight">{st.title}</p>
                <p className={`text-[10px] leading-tight font-mono ${activeStep === st.number ? 'text-neutral-300' : 'text-neutral-400'}`}>
                  {st.desc}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Form Body */}
      <form onSubmit={handleSubmit} className="p-6 md:p-8">
        
        {/* STEP 1: IDENTITAS MODUL */}
        {activeStep === 1 && (
          <div className="space-y-6 max-w-3xl">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                Judul Modul Ajar / RPP Plus <span className="text-neutral-400">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.judul}
                onChange={(e) => setFormData({ ...formData, judul: e.target.value })}
                placeholder="Contoh: Modul Ajar IPA: Zat dan Karakteristik Perubahannya"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-neutral-900 text-sm font-medium bg-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                  Mata Pelajaran
                </label>
                <select
                  value={formData.mapel}
                  onChange={handleMapelChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-neutral-900 text-sm font-medium bg-white text-neutral-800"
                >
                  {subjectList.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                  Jenjang Kelas (Fase D SMP)
                </label>
                <select
                  value={formData.kelas}
                  onChange={handleKelasChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-neutral-900 text-sm font-medium bg-white text-neutral-800"
                >
                  <option value="7">Kelas 7 (Fase D)</option>
                  <option value="8">Kelas 8 (Fase D)</option>
                  <option value="9">Kelas 9 (Fase D)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                  Semester
                </label>
                <select
                  value={formData.semester}
                  onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-neutral-900 text-sm font-medium bg-white text-neutral-800"
                >
                  <option value="Ganjil">Semester Ganjil</option>
                  <option value="Genap">Semester Genap</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                  Alokasi Waktu
                </label>
                <input
                  type="text"
                  value={formData.alokasiWaktu}
                  onChange={(e) => setFormData({ ...formData, alokasiWaktu: e.target.value })}
                  placeholder="Contoh: 6 JP (2 Pertemuan x 3 JP)"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-neutral-900 text-sm font-medium bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                Model / Pendekatan Pembelajaran
              </label>
              <input
                type="text"
                value={formData.modelPembelajaran}
                onChange={(e) => setFormData({ ...formData, modelPembelajaran: e.target.value })}
                placeholder="Contoh: Problem-Based Learning (PBL), Discovery Learning, atau PjBL"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-neutral-900 text-sm font-medium bg-white"
              />
            </div>
          </div>
        )}

        {/* STEP 2: PROFIL PELAJAR PANCASILA & SARPRAS */}
        {activeStep === 2 && (
          <div className="space-y-6 max-w-3xl">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                Pilih Dimensi Profil Pelajar Pancasila
              </label>
              <p className="text-xs text-neutral-500 mb-3">
                Karakter dan kompetensi esensial yang dibangun selama pembelajaran materi ini.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {profilPelajarPancasilaList.map((p) => {
                  const isChecked = formData.dimensiP5.includes(p.id);
                  return (
                    <div
                      key={p.id}
                      onClick={() => toggleP5(p.id)}
                      className={`cursor-pointer p-3 rounded-xl border flex items-start gap-3 transition-all ${
                        isChecked
                          ? 'border-neutral-900 bg-neutral-100 text-neutral-900 font-medium'
                          : 'border-neutral-200 hover:border-neutral-300 text-neutral-700 bg-white'
                      }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center ${
                        isChecked ? 'bg-neutral-900 border-neutral-900 text-white' : 'border-neutral-300 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-xs leading-snug">{p.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                Sarana & Prasarana Pembelajaran
              </label>
              <textarea
                rows={3}
                value={formData.saranaPrasarana}
                onChange={(e) => setFormData({ ...formData, saranaPrasarana: e.target.value })}
                placeholder="Contoh: LCD Proyektor, laptop, gelas beker, tabung reaksi, LKPD 1, koneksi internet"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-neutral-900 text-sm font-medium bg-white"
              />
            </div>
          </div>
        )}

        {/* STEP 3: CP & TUJUAN PEMBELAJARAN */}
        {activeStep === 3 && (
          <div className="space-y-6 max-w-3xl">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                Capaian Pembelajaran (CP) Fase D
              </label>
              <textarea
                rows={3}
                value={formData.capaianPembelajaran}
                onChange={(e) => setFormData({ ...formData, capaianPembelajaran: e.target.value })}
                placeholder="Tuliskan rumusan CP resmi untuk fase D mapel ini..."
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-neutral-900 text-sm font-medium bg-white"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700">
                  Tujuan Pembelajaran (TP)
                </label>
                <button
                  type="button"
                  onClick={handleAddTP}
                  className="inline-flex items-center gap-1 text-xs font-mono text-neutral-900 underline font-medium"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Tambah Butir TP
                </button>
              </div>

              <div className="space-y-2.5">
                {formData.tujuanPembelajaran.map((tp, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-6 text-xs font-mono text-neutral-400 text-center">{idx + 1}.</span>
                    <input
                      type="text"
                      value={tp}
                      onChange={(e) => handleUpdateTP(idx, e.target.value)}
                      placeholder={`Rumusan Tujuan Pembelajaran ${idx + 1}...`}
                      className="flex-1 px-4 py-2 rounded-xl border border-neutral-300 focus:outline-none focus:border-neutral-900 text-sm bg-white"
                    />
                    {formData.tujuanPembelajaran.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveTP(idx)}
                        className="p-2 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                Pemahaman Bermakna
              </label>
              <textarea
                rows={2}
                value={formData.pemahamanBermakna}
                onChange={(e) => setFormData({ ...formData, pemahamanBermakna: e.target.value })}
                placeholder="Apa esensi utama yang akan diingat siswa setelah 5 tahun mendatang mengenai materi ini?"
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-neutral-900 text-sm font-medium bg-white"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700">
                  Pertanyaan Pemantik
                </label>
                <button
                  type="button"
                  onClick={handleAddPertanyaan}
                  className="inline-flex items-center gap-1 text-xs font-mono text-neutral-900 underline font-medium"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Tambah Pertanyaan
                </button>
              </div>

              <div className="space-y-2.5">
                {formData.pertanyaanPemantik.map((q, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-6 text-xs font-mono text-neutral-400 text-center">•</span>
                    <input
                      type="text"
                      value={q}
                      onChange={(e) => handleUpdatePertanyaan(idx, e.target.value)}
                      placeholder={`Pertanyaan yang memicu rasa ingin tahu siswa ${idx + 1}...`}
                      className="flex-1 px-4 py-2 rounded-xl border border-neutral-300 focus:outline-none focus:border-neutral-900 text-sm bg-white"
                    />
                    {formData.pertanyaanPemantik.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemovePertanyaan(idx)}
                        className="p-2 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: LANGKAH-LANGKAH PEMBELAJARAN (BERDIFERENSIASI) */}
        {activeStep === 4 && (
          <div className="space-y-6 max-w-3xl">
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 text-xs text-neutral-800 flex items-start gap-3">
              <span className="text-neutral-900 font-serif text-base">✦</span>
              <div>
                <p className="font-medium text-neutral-900">Pembelajaran Berdiferensiasi Fase D</p>
                <p className="mt-0.5 text-neutral-600">
                  Akomodasi keragaman profil belajar melalui diferensiasi konten, diferensiasi proses, atau diferensiasi produk.
                </p>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                A. Kegiatan Pendahuluan (Apersepsi & Motivasi)
              </label>
              <textarea
                rows={3}
                value={formData.kegiatanPembelajaran.pendahuluan}
                onChange={(e) => setFormData({
                  ...formData,
                  kegiatanPembelajaran: { ...formData.kegiatanPembelajaran, pendahuluan: e.target.value }
                })}
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-neutral-900 text-sm font-medium bg-white"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                B. Kegiatan Inti (Berdiferensiasi Konten / Proses / Produk)
              </label>
              <textarea
                rows={5}
                value={formData.kegiatanPembelajaran.inti}
                onChange={(e) => setFormData({
                  ...formData,
                  kegiatanPembelajaran: { ...formData.kegiatanPembelajaran, inti: e.target.value }
                })}
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-neutral-900 text-sm font-medium bg-white"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                C. Kegiatan Penutup & Refleksi Belajar
              </label>
              <textarea
                rows={3}
                value={formData.kegiatanPembelajaran.penutup}
                onChange={(e) => setFormData({
                  ...formData,
                  kegiatanPembelajaran: { ...formData.kegiatanPembelajaran, penutup: e.target.value }
                })}
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-neutral-900 text-sm font-medium bg-white"
              />
            </div>
          </div>
        )}

        {/* STEP 5: ASESMEN, LKPD & RINGKASAN MATERI */}
        {activeStep === 5 && (
          <div className="space-y-6 max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                  1. Asesmen Diagnostik (Awal)
                </label>
                <textarea
                  rows={3}
                  value={formData.asesmen.diagnostik}
                  onChange={(e) => setFormData({
                    ...formData,
                    asesmen: { ...formData.asesmen, diagnostik: e.target.value }
                  })}
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 focus:outline-none focus:border-neutral-900 text-xs font-medium bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                  2. Asesmen Formatif (Proses)
                </label>
                <textarea
                  rows={3}
                  value={formData.asesmen.formatif}
                  onChange={(e) => setFormData({
                    ...formData,
                    asesmen: { ...formData.asesmen, formatif: e.target.value }
                  })}
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 focus:outline-none focus:border-neutral-900 text-xs font-medium bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                  3. Asesmen Sumatif (Akhir)
                </label>
                <textarea
                  rows={3}
                  value={formData.asesmen.sumatif}
                  onChange={(e) => setFormData({
                    ...formData,
                    asesmen: { ...formData.asesmen, sumatif: e.target.value }
                  })}
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 focus:outline-none focus:border-neutral-900 text-xs font-medium bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                Bahan Bacaan & Ringkasan Materi (Guru & Murid)
              </label>
              <textarea
                rows={5}
                value={formData.isiMateriRingkas}
                onChange={(e) => setFormData({ ...formData, isiMateriRingkas: e.target.value })}
                placeholder="Uraikan ringkasan materi konseptual, rumus penting, atau fakta materi..."
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-neutral-900 text-xs font-mono bg-white"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                Instrumen Lembar Kerja Peserta Didik (LKPD)
              </label>
              <textarea
                rows={5}
                value={formData.lampiranLKPD}
                onChange={(e) => setFormData({ ...formData, lampiranLKPD: e.target.value })}
                placeholder="Tuliskan petunjuk kerja, soal latihan, atau instruksi praktikum untuk dibagikan kepada peserta didik..."
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-neutral-900 text-xs font-mono bg-white"
              />
            </div>
          </div>
        )}

        {/* Navigation & Action Buttons */}
        <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
          <div>
            {activeStep > 1 && (
              <button
                type="button"
                onClick={() => setActiveStep(activeStep - 1)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-neutral-800 bg-white border border-neutral-300 hover:border-neutral-900 rounded-xl transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Sebelumnya
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Batal
            </button>

            {activeStep < 5 ? (
              <button
                type="button"
                onClick={() => setActiveStep(activeStep + 1)}
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-all"
              >
                Lanjutkan
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl shadow-2xs transition-all active:scale-[0.98]"
              >
                <Save className="w-3.5 h-3.5" />
                {editingDoc ? 'Perbarui Modul Ajar' : 'Simpan Modul ke Arsip'}
              </button>
            )}
          </div>
        </div>

      </form>
    </div>
  );
}
