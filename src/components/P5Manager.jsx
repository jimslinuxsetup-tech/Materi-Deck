import React, { useState } from 'react';
import { 
  Award, Plus, BookOpen, Clock, Users, CheckCircle2, 
  Printer, Eye, Compass, Layers, HelpCircle
} from 'lucide-react';
import { temaP5List, profilPelajarPancasilaList } from '../data/initialData';

export default function P5Manager({ materials, onViewDoc, onAddNewP5 }) {
  const [selectedTema, setSelectedTema] = useState('all');

  const p5Materials = materials.filter(m => m.kategori === 'p5');
  const filteredP5 = selectedTema === 'all' 
    ? p5Materials 
    : p5Materials.filter(m => m.tags?.some(t => t.toLowerCase() === selectedTema.toLowerCase()) || m.judul.toLowerCase().includes(selectedTema.toLowerCase()));

  return (
    <div className="space-y-6 w-full">
      
      {/* Header Banner - Claude Dual Tone */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200 shadow-2xs flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono border border-neutral-200 bg-neutral-100 text-neutral-800">
            <span>✦</span>
            <span>Koordinator & Fasilitator P5 Fase D</span>
          </div>
          <h1 className="font-serif text-2xl md:text-3xl font-normal tracking-tight text-neutral-900">
            Proyek Penguatan Profil Pelajar Pancasila
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
            Kelola modul proyek lintas disiplin ilmu yang kontekstual dan berbasis aksi nyata. Sekolah jenjang SMP memilih minimal 3 tema utama per tahun ajaran.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded border border-neutral-200 bg-neutral-50 text-neutral-600">
              Target: Kelas 7, 8, 9 SMP
            </span>
            <span className="px-2.5 py-1 rounded border border-neutral-200 bg-neutral-50 text-neutral-600">
              Alokasi: ~20-30% Total JP/Tahun
            </span>
          </div>
        </div>

        <div className="shrink-0">
          <button
            onClick={onAddNewP5}
            className="px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-xs shadow-2xs transition-all flex items-center gap-2"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Buat Modul P5 Baru</span>
          </button>
        </div>
      </div>

      {/* 8 Tema Filter - Monochrome */}
      <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-2xs space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
            <span>✦</span>
            <span>8 Tema Standar Kemendikbudristek untuk SMP:</span>
          </h3>
          <span className="text-xs text-neutral-400 font-mono">Filter Tema</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setSelectedTema('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedTema === 'all'
                ? 'bg-neutral-900 text-white'
                : 'bg-white border border-neutral-200 text-neutral-700 hover:border-neutral-900'
            }`}
          >
            Semua Tema ({p5Materials.length})
          </button>
          {temaP5List.map((tema, i) => (
            <button
              key={i}
              onClick={() => setSelectedTema(tema)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedTema === tema
                  ? 'bg-neutral-900 text-white'
                  : 'bg-white border border-neutral-200 text-neutral-700 hover:border-neutral-900'
              }`}
            >
              {tema}
            </button>
          ))}
        </div>
      </div>

      {/* Modul P5 List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredP5.map((modul) => (
          <div 
            key={modul.id}
            className="bg-white rounded-2xl border border-neutral-200 shadow-2xs hover:border-neutral-900 transition-all p-6 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono px-2.5 py-0.5 bg-neutral-100 text-neutral-800 rounded border border-neutral-200">
                  {modul.fase}
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  {modul.alokasiWaktu}
                </span>
              </div>

              <h3 
                onClick={() => onViewDoc(modul)}
                className="font-serif text-lg font-medium text-neutral-900 hover:underline cursor-pointer leading-snug"
              >
                {modul.judul}
              </h3>

              <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3 bg-neutral-50 p-3 rounded-xl border border-neutral-200">
                {modul.capaianPembelajaran || modul.pemahamanBermakna}
              </p>

              {/* Dimensi Profil Pelajar Pancasila */}
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1.5">
                  Dimensi Profil yang Dibangun:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {modul.dimensiP5?.map((dimId, idx) => {
                    const p = profilPelajarPancasilaList.find(x => x.id === dimId);
                    return (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 bg-white text-neutral-800 rounded border border-neutral-300">
                        ✓ {p ? p.label.split(',')[0] : dimId}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-[11px] text-neutral-400 font-mono">
                ID: {modul.id}
              </span>
              <button
                onClick={() => onViewDoc(modul)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-medium transition-all shadow-2xs"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Buka & Cetak Modul</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Alur Tahapan P5 Guide - Minimalist Dual Tone */}
      <div className="bg-white rounded-2xl border border-neutral-200 p-6 space-y-4 shadow-2xs">
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg">✦</span>
          <h3 className="font-serif text-base font-medium text-neutral-900">
            Standar 4 Tahap Alur Pembelajaran Proyek P5 (Fase D SMP)
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200 space-y-1">
            <span className="font-mono text-[11px] uppercase text-neutral-900 font-semibold block">1. Pengenalan</span>
            <p className="text-neutral-600 leading-relaxed">
              Membangun kesadaran dan membuka wawasan peserta didik terhadap tema isu melalui tayangan dokumenter dan riset data.
            </p>
          </div>
          <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200 space-y-1">
            <span className="font-mono text-[11px] uppercase text-neutral-900 font-semibold block">2. Kontekstualisasi</span>
            <p className="text-neutral-600 leading-relaxed">
              Menggali masalah di lingkungan sekitar sekolah (observasi lapangan, survei warga sekolah, identifikasi masalah).
            </p>
          </div>
          <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200 space-y-1">
            <span className="font-mono text-[11px] uppercase text-neutral-900 font-semibold block">3. Aksi Nyata</span>
            <p className="text-neutral-600 leading-relaxed">
              Merumuskan solusi, pembuatan purwarupa/karya nyata, serta kampanye edukatif kepada komunitas sekolah.
            </p>
          </div>
          <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200 space-y-1">
            <span className="font-mono text-[11px] uppercase text-neutral-900 font-semibold block">4. Refleksi & Tindak Lanjut</span>
            <p className="text-neutral-600 leading-relaxed">
              Gelar karya (pameran hasil proyek), asesmen teman sebaya, dan komitmen keberlanjutan.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
