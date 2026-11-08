import React, { useState } from 'react';
import { 
  CheckSquare, HelpCircle, FileText, Printer, Plus, Eye, 
  CheckCircle2, ChevronRight, Layers, Award
} from 'lucide-react';
import { subjectList } from '../data/initialData';

export default function AssessmentBank({ materials, onViewDoc, onAddNewAssessment }) {
  const [filterType, setFilterType] = useState('all');

  const assessmentMaterials = materials.filter(m => m.kategori === 'asesmen' || m.kategori === 'lkpd');

  const filteredItems = assessmentMaterials.filter(item => {
    if (filterType === 'all') return true;
    if (filterType === 'lkpd') return item.kategori === 'lkpd';
    if (filterType === 'diagnostik') return item.judul.toLowerCase().includes('diagnostik') || item.asesmen?.diagnostik;
    if (filterType === 'formatif') return item.judul.toLowerCase().includes('formatif') || item.asesmen?.formatif;
    if (filterType === 'sumatif') return item.judul.toLowerCase().includes('sumatif') || item.asesmen?.sumatif;
    return true;
  });

  return (
    <div className="space-y-6 w-full">
      
      {/* Banner - Claude Dual Tone */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200 shadow-2xs flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono border border-neutral-200 bg-neutral-100 text-neutral-800">
            <span>✦</span>
            <span>Evaluasi Kurikulum Merdeka Fase D</span>
          </div>
          <h1 className="font-serif text-2xl md:text-3xl font-normal tracking-tight text-neutral-900">
            Bank Asesmen & Lembar Kerja Siswa (LKPD)
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
            Arsip instrumen evaluasi pembelajaran: Asesmen Diagnostik Awal, Asesmen Formatif, Asesmen Sumatif berbasis AKM, rubrik KKTP, dan LKPD berdiferensiasi.
          </p>
        </div>

        <button
          onClick={onAddNewAssessment}
          className="shrink-0 px-4 py-2.5 rounded-xl bg-neutral-900 text-white font-medium text-xs shadow-2xs hover:bg-neutral-800 transition-all flex items-center gap-2"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Buat Instrumen / LKPD</span>
        </button>
      </div>

      {/* Filter Tabs - Monochrome */}
      <div className="bg-white p-2 rounded-2xl border border-neutral-200 shadow-2xs flex flex-wrap gap-1.5">
        <button
          onClick={() => setFilterType('all')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
            filterType === 'all'
              ? 'bg-neutral-900 text-white'
              : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
          }`}
        >
          Semua Instrumen ({assessmentMaterials.length})
        </button>
        <button
          onClick={() => setFilterType('diagnostik')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
            filterType === 'diagnostik'
              ? 'bg-neutral-900 text-white'
              : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
          }`}
        >
          Asesmen Diagnostik (Awal)
        </button>
        <button
          onClick={() => setFilterType('formatif')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
            filterType === 'formatif'
              ? 'bg-neutral-900 text-white'
              : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
          }`}
        >
          Asesmen Formatif & Rubrik
        </button>
        <button
          onClick={() => setFilterType('sumatif')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
            filterType === 'sumatif'
              ? 'bg-neutral-900 text-white'
              : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
          }`}
        >
          Asesmen Sumatif & Soal
        </button>
        <button
          onClick={() => setFilterType('lkpd')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
            filterType === 'lkpd'
              ? 'bg-neutral-900 text-white'
              : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
          }`}
        >
          LKPD / Lembar Kerja
        </button>
      </div>

      {/* Grid of Assessments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredItems.map((item) => (
          <div 
            key={item.id}
            className="bg-white rounded-2xl border border-neutral-200 shadow-2xs hover:border-neutral-900 transition-all p-6 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-neutral-100 text-neutral-800 border border-neutral-200">
                  {item.mapelNama} • Kelas {item.kelas}
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  {item.kategori === 'lkpd' ? 'Lembar Kerja' : 'Bank Asesmen'}
                </span>
              </div>

              <h3 
                onClick={() => onViewDoc(item)}
                className="font-serif text-lg font-medium text-neutral-900 hover:underline cursor-pointer leading-snug"
              >
                {item.judul}
              </h3>

              <div className="text-xs text-neutral-600 bg-neutral-50 p-3 rounded-xl border border-neutral-200 space-y-1.5">
                <div className="font-mono text-[10px] uppercase text-neutral-500 font-semibold">
                  Target Capaian Pembelajaran:
                </div>
                <p className="line-clamp-2 leading-relaxed">
                  {item.capaianPembelajaran}
                </p>
              </div>

              {/* Detail Cuplikan Soal / LKPD */}
              <div className="bg-neutral-50/50 p-3 rounded-xl border border-dashed border-neutral-200 text-xs text-neutral-600 font-mono line-clamp-3 leading-relaxed">
                {item.lampiranLKPD || item.isiMateriRingkas}
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-[11px] text-neutral-400 font-mono">
                Alokasi: {item.alokasiWaktu}
              </span>
              <button
                onClick={() => onViewDoc(item)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-medium transition-all shadow-2xs"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Lihat & Cetak Soal</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edukasi KKTP Kurikulum Merdeka - Monochrome */}
      <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-2xs space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg">✦</span>
          <h3 className="font-serif text-base font-medium text-neutral-900">
            Panduan KKTP (Kriteria Ketercapaian Tujuan Pembelajaran) SMP
          </h3>
        </div>
        <p className="text-xs text-neutral-600 leading-relaxed">
          Dalam Kurikulum Merdeka, istilah KKM digantikan oleh <strong>KKTP</strong> yang tidak lagi berbasis angka tunggal kaku, melainkan menggunakan 3 pendekatan utama:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 space-y-1.5">
            <span className="font-mono text-[11px] uppercase font-semibold text-neutral-900 block">1. Pendekatan Rubrik</span>
            <p className="text-neutral-600 leading-relaxed">
              Menilai tingkatan capaian peserta didik (Belum Berkembang, Mulai Berkembang, Cakap, Mahir) dengan deskripsi kualitatif yang jelas.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 space-y-1.5">
            <span className="font-mono text-[11px] uppercase font-semibold text-neutral-900 block">2. Deskripsi Kriteria</span>
            <p className="text-neutral-600 leading-relaxed">
              Guru menetapkan kriteria ketuntasan (misal 4 indikator). Murid tuntas jika memenuhi minimal 3 dari 4 kriteria.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 space-y-1.5">
            <span className="font-mono text-[11px] uppercase font-semibold text-neutral-900 block">3. Skala Interval Nilai</span>
            <p className="text-neutral-600 leading-relaxed">
              0-40% (Remedial seluruhnya); 41-65% (Remedial bagian tertentu); 66-85% (Tuntas); 86-100% (Tuntas pengayaan).
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
