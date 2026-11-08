import React from 'react';
import { 
  BookOpen, FileText, CheckSquare, Award, Clock, Calendar, 
  ArrowRight, Plus, Printer, CheckCircle2, School, Layers, HelpCircle
} from 'lucide-react';
import { profilPelajarPancasilaList } from '../data/initialData';

export default function Dashboard({ 
  teacherProfile, 
  materials, 
  schedule, 
  onNavigateTab, 
  onViewDoc, 
  onAddNew 
}) {
  const totalMaterials = materials.length;
  const totalModul = materials.filter(m => m.kategori === 'modul_ajar').length;
  const totalP5 = materials.filter(m => m.kategori === 'p5').length;
  const totalAsesmenLKPD = materials.filter(m => m.kategori === 'asesmen' || m.kategori === 'lkpd').length;

  const todayName = new Intl.DateTimeFormat('id-ID', { weekday: 'long' }).format(new Date());
  const todayDateStr = new Intl.DateTimeFormat('id-ID', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  }).format(new Date());

  const todaySchedules = schedule.filter(s => s.hari.toLowerCase() === todayName.toLowerCase());
  const displaySchedules = todaySchedules.length > 0 ? todaySchedules : schedule.slice(0, 3);
  const recentMaterials = materials.slice(0, 4);

  return (
    <div className="space-y-6 md:space-y-8 w-full">
      
      {/* Claude Style Minimalist Hero Banner (Dual Tone) */}
      <div className="relative overflow-hidden rounded-2xl bg-white border border-neutral-200 p-6 md:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-200 text-[11px] font-mono text-neutral-700">
              <School className="w-3.5 h-3.5 stroke-[1.8]" />
              <span>{teacherProfile.sekolah}</span>
              <span className="text-neutral-300">•</span>
              <span>T.A. {teacherProfile.tahunAjaran} ({teacherProfile.semesterAktif})</span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-neutral-900 leading-tight">
              Selamat datang, {teacherProfile.namaGuru}
            </h1>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-2xl">
              Platform minimalis administrasi pengajar dan pusat arsip perangkat pembelajaran Kurikulum Merdeka Fase D (SMP Kelas 7, 8, dan 9).
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded border border-neutral-200 bg-neutral-50 text-neutral-700">
                {todayDateStr}
              </span>
              <span className="px-2.5 py-1 rounded border border-neutral-200 bg-neutral-50 text-neutral-700 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 inline-block"></span>
                Standar BSKAP Fase D
              </span>
            </div>
          </div>

          <div className="flex flex-row sm:flex-col gap-2 shrink-0">
            <button
              onClick={onAddNew}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition-colors border border-neutral-900 shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Susun Modul Ajar</span>
            </button>
            <button
              onClick={() => onNavigateTab('repository')}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-neutral-800 text-xs font-medium border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-50 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Buka Arsip</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metric Cards Row - Responsive Dual Tone */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Arsip */}
        <div 
          onClick={() => onNavigateTab('repository')}
          className="bg-white p-5 rounded-xl border border-neutral-200 shadow-2xs hover:border-neutral-900 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">Total Berkas</span>
            <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-colors">
              <FileText className="w-4 h-4 stroke-[1.8]" />
            </div>
          </div>
          <div className="mt-4">
            <div className="font-serif text-3xl font-normal text-neutral-900">{totalMaterials}</div>
            <p className="text-[11px] text-neutral-500 mt-0.5">Arsip materi & dokumen</p>
          </div>
        </div>

        {/* Modul Ajar */}
        <div 
          onClick={() => onNavigateTab('repository')}
          className="bg-white p-5 rounded-xl border border-neutral-200 shadow-2xs hover:border-neutral-900 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">Modul Ajar</span>
            <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-colors">
              <BookOpen className="w-4 h-4 stroke-[1.8]" />
            </div>
          </div>
          <div className="mt-4">
            <div className="font-serif text-3xl font-normal text-neutral-900">{totalModul}</div>
            <p className="text-[11px] text-neutral-500 mt-0.5">RPP Plus standar BSKAP</p>
          </div>
        </div>

        {/* Proyek P5 */}
        <div 
          onClick={() => onNavigateTab('p5')}
          className="bg-white p-5 rounded-xl border border-neutral-200 shadow-2xs hover:border-neutral-900 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">Proyek P5</span>
            <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-colors">
              <Award className="w-4 h-4 stroke-[1.8]" />
            </div>
          </div>
          <div className="mt-4">
            <div className="font-serif text-3xl font-normal text-neutral-900">{totalP5}</div>
            <p className="text-[11px] text-neutral-500 mt-0.5">Profil pelajar Pancasila</p>
          </div>
        </div>

        {/* Asesmen & LKPD */}
        <div 
          onClick={() => onNavigateTab('assessment')}
          className="bg-white p-5 rounded-xl border border-neutral-200 shadow-2xs hover:border-neutral-900 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">Asesmen & LKPD</span>
            <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-colors">
              <CheckSquare className="w-4 h-4 stroke-[1.8]" />
            </div>
          </div>
          <div className="mt-4">
            <div className="font-serif text-3xl font-normal text-neutral-900">{totalAsesmenLKPD}</div>
            <p className="text-[11px] text-neutral-500 mt-0.5">Bank instrumen & lembar kerja</p>
          </div>
        </div>

      </div>

      {/* 2-Column Responsive Section: Recent Materials & Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (2 span): Recent Materials */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-2xs">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
              <div>
                <h2 className="font-serif text-lg font-medium text-neutral-900">Perangkat Ajar Terbaru</h2>
                <p className="text-xs text-neutral-500 mt-0.5">Materi Kurikulum Merdeka yang siap dicetak atau digunakan di kelas</p>
              </div>
              <button
                onClick={() => onNavigateTab('repository')}
                className="text-xs font-mono text-neutral-900 hover:underline flex items-center gap-1 font-medium"
              >
                Lihat Semua <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="divide-y divide-neutral-100">
              {recentMaterials.map((doc) => (
                <div 
                  key={doc.id}
                  className="py-4 flex items-start justify-between gap-4 hover:bg-neutral-50/70 px-2 rounded-xl transition-colors"
                >
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-neutral-200 bg-neutral-100 text-neutral-800 font-medium">
                        Kelas {doc.kelas}
                      </span>
                      <span className="text-[11px] font-medium text-neutral-600">
                        {doc.mapelNama}
                      </span>
                      <span className="text-[10px] text-neutral-400 font-mono">
                        • {doc.alokasiWaktu}
                      </span>
                    </div>

                    <h3 
                      onClick={() => onViewDoc(doc)}
                      className="font-serif text-base font-medium text-neutral-900 hover:underline cursor-pointer leading-snug truncate"
                    >
                      {doc.judul}
                    </h3>

                    <p className="text-xs text-neutral-500 line-clamp-1 leading-relaxed">
                      {doc.capaianPembelajaran}
                    </p>
                  </div>

                  <button
                    onClick={() => onViewDoc(doc)}
                    className="shrink-0 px-3 py-1.5 bg-white border border-neutral-300 hover:border-neutral-900 text-neutral-900 rounded-lg text-xs font-medium transition-colors"
                  >
                    Buka
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Profil Pelajar Pancasila Minimalist Dual Tone Box */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-bold text-neutral-900">✦</span>
                <h2 className="font-serif text-base font-medium text-neutral-900">
                  6 Dimensi Profil Pelajar Pancasila (Fase D SMP)
                </h2>
              </div>
              <span className="text-[10px] font-mono text-neutral-400">Kemendikbudristek</span>
            </div>
            
            <p className="text-xs text-neutral-600 leading-relaxed">
              Karakter dan kompetensi esensial yang dibangun dalam setiap pembelajaran dan proyek SMP:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {profilPelajarPancasilaList.map((dim) => (
                <div key={dim.id} className="bg-neutral-50 rounded-xl p-3 border border-neutral-200 text-xs">
                  <div className="font-medium text-neutral-900 text-[11px] leading-snug">{dim.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (1 span): Jadwal Mengajar & Panduan */}
        <div className="space-y-6">
          
          {/* Jadwal Mengajar Minimal Card */}
          <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-2xs space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 stroke-[1.8] text-neutral-700" />
                <h2 className="font-serif text-base font-medium text-neutral-900">Agenda Hari Ini</h2>
              </div>
              <button
                onClick={() => onNavigateTab('journal')}
                className="text-[11px] font-mono text-neutral-600 hover:text-neutral-900 hover:underline"
              >
                Kalender →
              </button>
            </div>

            <div className="space-y-2.5">
              {displaySchedules.map((item, idx) => (
                <div key={idx} className="p-3 bg-neutral-50/80 border border-neutral-200 rounded-xl space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-neutral-700 bg-neutral-200/80 px-2 py-0.5 rounded">
                      {item.hari} • {item.jam}
                    </span>
                    <span className="text-xs font-mono font-medium text-neutral-900">
                      Kelas {item.kelas}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-neutral-900">
                    {item.mapel}
                  </div>
                  <div className="text-[11px] text-neutral-500 font-mono">
                    📍 {item.ruangan}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigateTab('journal')}
              className="w-full py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-medium rounded-xl transition-colors text-center"
            >
              Buka Jurnal Mengajar Harian
            </button>
          </div>

          {/* Panduan Ringkas Kurikulum Merdeka */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 space-y-3">
            <div className="font-serif text-sm font-semibold text-neutral-900 flex items-center gap-1.5">
              <span>✦</span>
              <span>Esensi Pembelajaran Fase D</span>
            </div>
            <ul className="text-xs text-neutral-600 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-neutral-900 font-bold">•</span>
                <span><strong>Fase D:</strong> Jenjang kelas 7, 8, dan 9 SMP/MTs dengan alur capaian kompetensi spiral terpadu.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-900 font-bold">•</span>
                <span><strong>Diferensiasi:</strong> Menyesuaikan konten, proses, atau produk berdasarkan kesiapan belajar murid.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-900 font-bold">•</span>
                <span><strong>KKTP:</strong> Kriteria Ketercapaian Tujuan Pembelajaran pengganti KKM angka tunggal.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}
