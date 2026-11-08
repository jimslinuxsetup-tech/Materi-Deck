import React, { useState } from 'react';
import { 
  X, Printer, Download, Copy, Check, BookOpen, Clock, 
  Award, FileText, CheckCircle2, School, Cpu
} from 'lucide-react';

export default function DocumentViewerModal({ document: doc, teacherProfile, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!doc) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textContent = `
===========================================================
${teacherProfile.sekolah.toUpperCase()}
MODUL AJAR INFORMATIKA SMP (FASE D)
===========================================================
Judul: ${doc.judul}
Elemen: ${doc.elemenNama || doc.elemen}
Kelas: Kelas ${doc.kelas} SMP (Fase D)
Alokasi Waktu: ${doc.alokasiWaktu}
Guru Pengampu: ${teacherProfile.namaGuru} (NIP: ${teacherProfile.nip})

--- TUJUAN PEMBELAJARAN (TP) ---
${doc.tujuan || doc.capaianPembelajaran || '-'}

--- RINGKASAN MATERI / KONSEP INFORMATIKA ---
${doc.ringkasan || doc.isiMateriRingkas || '-'}

--- LEMBAR PRAKTIKUM LAB KOMPUTER / LKPD ---
${doc.tugasPraktik || doc.lampiranLKPD || '-'}
===========================================================
    `.trim();

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex justify-center p-2 sm:p-4 md:p-6 print:p-0 print:bg-white print:static">
      <div className="relative bg-white rounded-2xl shadow-xl max-w-4xl w-full flex flex-col my-auto border border-neutral-300 overflow-hidden print:shadow-none print:border-none print:rounded-none max-h-[92vh]">
        
        {/* Modal Toolbar (Hidden during Print) */}
        <div className="no-print sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-neutral-200 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-mono border border-neutral-200 bg-neutral-100 text-neutral-800">
              Informatika • Kelas {doc.kelas}
            </span>
            <span className="text-[11px] font-mono text-neutral-400">
              ID: {doc.id}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-700 bg-white hover:bg-neutral-50 rounded-lg border border-neutral-200 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-neutral-900" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Tersalin' : 'Salin Teks'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-2xs transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak Dokumen / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-lg transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Printable Content */}
        <div className="p-6 md:p-10 space-y-6 text-neutral-900 bg-white overflow-y-auto">
          
          {/* KOP RESMI SEKOLAH */}
          <div className="border-b-4 border-double border-neutral-900 pb-4 text-center">
            <h3 className="text-xs font-mono font-semibold tracking-wider text-neutral-600 uppercase">
              PEMERINTAH DAERAH PROVINSI / KOTA {teacherProfile.kota?.toUpperCase() || 'JAKARTA'}
            </h3>
            <h2 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-neutral-900 uppercase mt-0.5">
              {teacherProfile.sekolah}
            </h2>
            <p className="text-xs text-neutral-600 mt-0.5 font-sans">
              Jalan Pendidikan No. 45, {teacherProfile.kota} • Telp/Fax: (021) 555-8899 • Email: info@{teacherProfile.sekolah.toLowerCase().replace(/\s+/g, '')}.sch.id
            </p>
          </div>

          {/* JUDUL DOKUMEN */}
          <div className="text-center pt-2">
            <span className="inline-block text-[10px] uppercase font-mono tracking-widest font-semibold text-neutral-800 bg-neutral-100 px-3 py-1 rounded border border-neutral-200 mb-2">
              MODUL AJAR & PANDUAN PRAKTIKUM INFORMATIKA FASE D
            </span>
            <h1 className="font-serif text-xl md:text-2xl font-bold text-neutral-900 leading-snug">
              {doc.judul}
            </h1>
          </div>

          {/* TABEL IDENTITAS */}
          <div className="rounded-xl border border-neutral-300 overflow-hidden bg-neutral-50/50">
            <div className="bg-neutral-100 px-4 py-2 border-b border-neutral-300 text-[11px] font-mono font-bold text-neutral-800 uppercase tracking-wider flex items-center gap-2">
              <School className="w-3.5 h-3.5 text-neutral-900" />
              IDENTITAS PERANGKAT PEMBELAJARAN
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 text-xs">
              <div className="p-3.5 border-b md:border-b-0 md:border-r border-neutral-200 space-y-1.5 font-sans">
                <div className="flex"><span className="w-36 text-neutral-500 font-mono text-[11px]">Satuan Pendidikan:</span><span className="font-medium text-neutral-900">{teacherProfile.sekolah}</span></div>
                <div className="flex"><span className="w-36 text-neutral-500 font-mono text-[11px]">Guru Pengampu:</span><span className="font-medium text-neutral-900">{teacherProfile.namaGuru}</span></div>
                <div className="flex"><span className="w-36 text-neutral-500 font-mono text-[11px]">NIP Guru:</span><span className="font-mono text-neutral-800 text-[11px]">{teacherProfile.nip}</span></div>
                <div className="flex"><span className="w-36 text-neutral-500 font-mono text-[11px]">Mata Pelajaran:</span><span className="font-bold text-neutral-900">Informatika</span></div>
              </div>
              <div className="p-3.5 space-y-1.5 font-sans">
                <div className="flex"><span className="w-36 text-neutral-500 font-mono text-[11px]">Jenjang / Fase:</span><span className="font-medium text-neutral-900">SMP / Fase D</span></div>
                <div className="flex"><span className="w-36 text-neutral-500 font-mono text-[11px]">Kelas:</span><span className="font-medium text-neutral-900">Kelas {doc.kelas}</span></div>
                <div className="flex"><span className="w-36 text-neutral-500 font-mono text-[11px]">Elemen Informatika:</span><span className="font-semibold text-neutral-900">{doc.elemenNama || doc.elemen}</span></div>
                <div className="flex"><span className="w-36 text-neutral-500 font-mono text-[11px]">Alokasi Waktu:</span><span className="font-medium text-neutral-900">{doc.alokasiWaktu}</span></div>
              </div>
            </div>
          </div>

          {/* TUJUAN PEMBELAJARAN */}
          <div className="border border-neutral-200 rounded-xl p-4 bg-white shadow-2xs">
            <h4 className="text-[11px] font-mono font-bold text-neutral-700 uppercase tracking-wider mb-1.5 flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-neutral-900 text-white inline-flex items-center justify-center text-[10px] font-mono">A</span>
              Tujuan Pembelajaran (TP)
            </h4>
            <p className="font-serif text-sm leading-relaxed text-neutral-800 bg-neutral-50/80 p-3 rounded-lg border border-neutral-200">
              {doc.tujuan || doc.capaianPembelajaran}
            </p>
          </div>

          {/* RINGKASAN MATERI */}
          <div className="border border-neutral-200 rounded-xl p-4 bg-white shadow-2xs">
            <h4 className="text-[11px] font-mono font-bold text-neutral-700 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-md bg-neutral-900 text-white inline-flex items-center justify-center text-[10px] font-mono">B</span>
              Bahan Bacaan & Konsep Teori
            </h4>
            <div className="text-xs text-neutral-800 whitespace-pre-line leading-relaxed bg-neutral-50/50 p-3.5 rounded-lg border border-neutral-200 font-sans">
              {doc.ringkasan || doc.isiMateriRingkas || 'Materi pembelajaran disajikan secara bertahap melalui demonstrasi langsung di lab komputer.'}
            </div>
          </div>

          {/* TUGAS PRAKTIKUM LAB */}
          <div className="border border-neutral-300 rounded-xl p-4 bg-white shadow-2xs">
            <h4 className="text-[11px] font-mono font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-neutral-900" />
              C. Lembar Praktikum Lab Komputer / LKPD
            </h4>
            <div className="text-xs text-neutral-800 whitespace-pre-line leading-relaxed bg-neutral-50 p-3.5 rounded-lg border border-neutral-200 font-mono">
              {doc.tugasPraktik || doc.lampiranLKPD || 'Lakukan pengamatan dan praktik sesuai arahan lembar kerja.'}
            </div>
          </div>

          {/* TANDA TANGAN */}
          <div className="pt-8 pb-4 border-t border-neutral-300 page-break-inside-avoid">
            <div className="flex justify-between items-start text-xs text-neutral-900">
              <div className="text-center w-60">
                <p>Mengetahui,</p>
                <p className="font-medium">Kepala {teacherProfile.sekolah}</p>
                <div className="h-20 flex items-end justify-center">
                  <p className="font-bold underline text-neutral-900">{teacherProfile.kepalaSekolah}</p>
                </div>
                <p className="text-[11px] text-neutral-600 font-mono">NIP. {teacherProfile.nipKepalaSekolah}</p>
              </div>

              <div className="text-center w-60">
                <p>{teacherProfile.kota}, {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                <p className="font-medium">Guru Mata Pelajaran Informatika</p>
                <div className="h-20 flex items-end justify-center">
                  <p className="font-bold underline text-neutral-900">{teacherProfile.namaGuru}</p>
                </div>
                <p className="text-[11px] text-neutral-600 font-mono">NIP. {teacherProfile.nip}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
