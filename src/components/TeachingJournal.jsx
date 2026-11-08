import React, { useState } from 'react';
import { 
  Calendar, Clock, Plus, Printer, Trash2, CheckCircle2, 
  FileText, X
} from 'lucide-react';

export default function TeachingJournal({ 
  journal, 
  classes, 
  onAddJournal, 
  onDeleteJournal, 
  teacherProfile 
}) {
  const [showModal, setShowModal] = useState(false);
  const [filterKelas, setFilterKelas] = useState('all');

  const [form, setForm] = useState({
    tanggal: new Date().toISOString().split('T')[0],
    kelas: classes[0] || '7A',
    jam: 'Ke 1 - 3 (07.15 - 09.30)',
    materi: '',
    hadir: 'Lengkap',
    catatan: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.materi.trim()) return;

    const newLog = {
      ...form,
      id: `JRN-${Date.now().toString().slice(-4)}`
    };

    onAddJournal(newLog);
    setShowModal(false);
    setForm({
      tanggal: new Date().toISOString().split('T')[0],
      kelas: classes[0] || '7A',
      jam: 'Ke 1 - 3 (07.15 - 09.30)',
      materi: '',
      hadir: 'Lengkap',
      catatan: ''
    });
  };

  const filtered = filterKelas === 'all'
    ? journal
    : journal.filter(j => j.kelas === filterKelas);

  return (
    <div className="space-y-6 w-full font-sans">
      
      {/* Header */}
      <div className="bg-white p-5 md:p-6 rounded-2xl border border-neutral-200 shadow-2xs flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-serif text-xl md:text-2xl font-normal text-neutral-900 tracking-tight">
            Jurnal Mengajar Informatika
          </h1>
          <p className="text-xs text-neutral-500 mt-0.5">
            Catatan pelaksanaan materi, praktikum lab komputer, dan kendala pembelajaran per kelas.
          </p>
        </div>

        <div className="flex items-center gap-2 no-print shrink-0">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-neutral-300 hover:border-neutral-900 text-neutral-800 rounded-xl text-xs font-medium transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Cetak Jurnal</span>
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-medium shadow-2xs transition-all active:scale-[0.98]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Catat Jurnal</span>
          </button>
        </div>
      </div>

      {/* Filter and Table */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-2xs overflow-hidden">
        
        {/* Printable Official Header */}
        <div className="print-only hidden p-6 border-b-2 border-black text-center">
          <h2 className="text-xl font-bold uppercase">{teacherProfile.sekolah}</h2>
          <h1 className="text-lg font-bold mt-1">JURNAL PELAKSANAAN PEMBELAJARAN INFORMATIKA</h1>
          <p className="text-xs text-neutral-600 mt-1">
            Guru: {teacherProfile.namaGuru} (NIP: {teacherProfile.nip}) • Semester: {teacherProfile.semesterAktif} • T.A: {teacherProfile.tahunAjaran}
          </p>
        </div>

        <div className="p-4 border-b border-neutral-200 flex items-center justify-between no-print text-xs">
          <div className="flex items-center gap-2">
            <span className="font-serif text-base font-medium text-neutral-900">
              Riwayat Pertemuan ({filtered.length})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-neutral-500 font-mono text-[11px]">Filter:</span>
            <select
              value={filterKelas}
              onChange={(e) => setFilterKelas(e.target.value)}
              className="px-2.5 py-1 rounded-lg border border-neutral-200 text-xs font-mono bg-white text-neutral-800"
            >
              <option value="all">Semua Kelas</option>
              {classes.map(c => (
                <option key={c} value={c}>Kelas {c}</option>
              ))}
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="p-12 text-center text-xs text-neutral-400 font-mono">
            Belum ada catatan jurnal mengajar.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-100/70 border-b border-neutral-200 text-neutral-700 font-mono text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4 font-medium">Tanggal & Jam</th>
                  <th className="py-3 px-4 font-medium">Kelas</th>
                  <th className="py-3 px-4 font-medium">Materi Pokok / Praktik Lab</th>
                  <th className="py-3 px-4 font-medium">Kehadiran</th>
                  <th className="py-3 px-4 font-medium">Catatan / Refleksi</th>
                  <th className="py-3 px-4 text-right font-medium no-print">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {filtered.map((log) => (
                  <tr key={log.id} className="hover:bg-neutral-50/70 transition-colors">
                    <td className="py-3 px-4 whitespace-nowrap font-mono">
                      <div className="font-medium text-neutral-900">{log.tanggal}</div>
                      <div className="text-[11px] text-neutral-400">{log.jam}</div>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <span className="inline-block px-2 py-0.5 rounded bg-neutral-100 font-mono text-neutral-800 border border-neutral-200 text-[11px]">
                        Kelas {log.kelas}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-serif text-sm font-medium text-neutral-900">{log.materi}</div>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap font-mono text-[11px] text-neutral-600">
                      {log.hadir}
                    </td>
                    <td className="py-3 px-4 max-w-sm text-neutral-700 leading-relaxed">
                      {log.catatan || '-'}
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap no-print">
                      <button
                        onClick={() => onDeleteJournal(log.id)}
                        className="p-1 text-neutral-400 hover:text-neutral-900 rounded"
                        title="Hapus"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Printable Signature footer */}
        <div className="print-only hidden p-8 pt-10">
          <div className="flex justify-between items-start text-xs">
            <div className="text-center w-60">
              <p>Mengetahui,</p>
              <p className="font-bold">Kepala Sekolah</p>
              <div className="h-16 flex items-end justify-center">
                <p className="font-bold underline">{teacherProfile.kepalaSekolah}</p>
              </div>
              <p>NIP. {teacherProfile.nipKepalaSekolah}</p>
            </div>
            <div className="text-center w-60">
              <p>{teacherProfile.kota}, {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              <p className="font-bold">Guru Mata Pelajaran Informatika</p>
              <div className="h-16 flex items-end justify-center">
                <p className="font-bold underline">{teacherProfile.namaGuru}</p>
              </div>
              <p>NIP. {teacherProfile.nip}</p>
            </div>
          </div>
        </div>

      </div>

      {/* Modal Input Jurnal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full my-auto border border-neutral-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/50">
              <h3 className="font-serif text-base font-medium text-neutral-900">
                Catat Jurnal Mengajar Informatika
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-neutral-400 hover:text-neutral-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-[10px] uppercase text-neutral-600 mb-1">Tanggal</label>
                  <input
                    type="date"
                    required
                    value={form.tanggal}
                    onChange={(e) => setForm({ ...form, tanggal: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-300 font-mono text-xs bg-white"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase text-neutral-600 mb-1">Kelas</label>
                  <select
                    value={form.kelas}
                    onChange={(e) => setForm({ ...form, kelas: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs bg-white font-mono"
                  >
                    {classes.map(c => (
                      <option key={c} value={c}>Kelas {c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase text-neutral-600 mb-1">Jam Pelajaran</label>
                <input
                  type="text"
                  value={form.jam}
                  onChange={(e) => setForm({ ...form, jam: e.target.value })}
                  placeholder="Ke 1-3 (07.15 - 09.30)"
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs bg-white"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase text-neutral-600 mb-1">
                  Materi Pokok / Aktivitas Lab <span className="text-neutral-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.materi}
                  onChange={(e) => setForm({ ...form, materi: e.target.value })}
                  placeholder="Contoh: Praktikum Scratch - Game Tangkap Apel Jatuh"
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-sm bg-white"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase text-neutral-600 mb-1">Status Kehadiran</label>
                <input
                  type="text"
                  value={form.hadir}
                  onChange={(e) => setForm({ ...form, hadir: e.target.value })}
                  placeholder="Contoh: 31/32 Hadir (1 Sakit: Budi)"
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs bg-white"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase text-neutral-600 mb-1">Catatan Refleksi & Kendala</label>
                <textarea
                  rows={3}
                  value={form.catatan}
                  onChange={(e) => setForm({ ...form, catatan: e.target.value })}
                  placeholder="Catatan keaktifan siswa, kendala komputer lab, atau tindak lanjut..."
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs bg-white"
                />
              </div>

              <div className="pt-3 border-t border-neutral-200 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-neutral-600 font-medium hover:text-neutral-900 rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-xl shadow-2xs"
                >
                  Simpan Jurnal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
