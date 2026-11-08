import React, { useState } from 'react';
import { 
  BookOpen, Plus, Eye, Printer, Trash2, Edit3, 
  Search, Cpu, Download, X, Check, Save
} from 'lucide-react';
import { informaticsElements } from '../data/informaticsData';

export default function InformaticsArchive({ 
  materials, 
  onSaveMaterial, 
  onDeleteMaterial, 
  onViewDoc, 
  teacherProfile 
}) {
  const [filterKelas, setFilterKelas] = useState('all');
  const [filterElemen, setFilterElemen] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Simple Add/Edit Modal
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    judul: '',
    kelas: '7',
    elemen: 'BK',
    elemenNama: 'Berpikir Komputasional (BK)',
    alokasiWaktu: '4 JP (2 Pertemuan)',
    tujuan: '',
    ringkasan: '',
    tugasPraktik: ''
  });

  const handleOpenNew = () => {
    setEditingId(null);
    setForm({
      judul: '',
      kelas: '7',
      elemen: 'BK',
      elemenNama: 'Berpikir Komputasional (BK)',
      alokasiWaktu: '4 JP (2 Pertemuan)',
      tujuan: '',
      ringkasan: '',
      tugasPraktik: ''
    });
    setShowModal(true);
  };

  const handleOpenEdit = (item) => {
    setEditingId(item.id);
    setForm({
      judul: item.judul,
      kelas: item.kelas,
      elemen: item.elemen,
      elemenNama: item.elemenNama,
      alokasiWaktu: item.alokasiWaktu,
      tujuan: item.tujuan || '',
      ringkasan: item.ringkasan || '',
      tugasPraktik: item.tugasPraktik || ''
    });
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.judul.trim()) return;

    const el = informaticsElements.find(x => x.id === form.elemen);
    const item = {
      ...form,
      id: editingId || `INF-${form.kelas}0${Date.now().toString().slice(-3)}`,
      elemenNama: el ? el.name : form.elemen
    };

    onSaveMaterial(item);
    setShowModal(false);
  };

  // Filtered materials
  const filtered = materials.filter(m => {
    const matchKelas = filterKelas === 'all' || m.kelas === filterKelas;
    const matchElemen = filterElemen === 'all' || m.elemen === filterElemen;
    const q = searchQuery.toLowerCase().trim();
    const matchQuery = !q || m.judul.toLowerCase().includes(q) || (m.tujuan && m.tujuan.toLowerCase().includes(q)) || (m.ringkasan && m.ringkasan.toLowerCase().includes(q));
    return matchKelas && matchElemen && matchQuery;
  });

  return (
    <div className="space-y-6 w-full font-sans">
      
      {/* Header & Quick Action */}
      <div className="bg-white p-5 md:p-6 rounded-2xl border border-neutral-200 shadow-2xs flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-serif text-xl md:text-2xl font-normal text-neutral-900 tracking-tight">
            Arsip Materi & Modul Ajar Informatika
          </h1>
          <p className="text-xs text-neutral-500 mt-0.5">
            Perangkat ajar dan panduan praktikum lab komputer Fase D (Kelas 7, 8, dan 9 SMP).
          </p>
        </div>

        <button
          onClick={handleOpenNew}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-medium shadow-2xs transition-all active:scale-[0.98] self-start md:self-auto"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>+ Tambah Materi / Modul</span>
        </button>
      </div>

      {/* Filter Strip */}
      <div className="bg-white p-4 rounded-2xl border border-neutral-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        
        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari topik, Scratch, Excel, jaringan..."
            className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-neutral-300 text-xs focus:outline-none focus:border-neutral-900 bg-white"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select
            value={filterKelas}
            onChange={(e) => setFilterKelas(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-neutral-200 text-xs font-mono bg-white text-neutral-800"
          >
            <option value="all">Semua Kelas</option>
            <option value="7">Kelas 7</option>
            <option value="8">Kelas 8</option>
            <option value="9">Kelas 9</option>
          </select>

          <select
            value={filterElemen}
            onChange={(e) => setFilterElemen(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-neutral-200 text-xs font-mono bg-white text-neutral-800"
          >
            {informaticsElements.map(el => (
              <option key={el.id} value={el.id}>{el.id === 'all' ? 'Semua Elemen' : el.id + ' — ' + el.name.split('(')[0]}</option>
            ))}
          </select>
        </div>

      </div>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item) => (
          <div 
            key={item.id}
            className="bg-white rounded-2xl border border-neutral-200 shadow-2xs hover:border-neutral-900 transition-all p-5 flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-neutral-100 text-neutral-800 border border-neutral-200">
                  {item.elemen} • Kelas {item.kelas}
                </span>
                <span className="font-mono text-xs text-neutral-400">
                  {item.alokasiWaktu}
                </span>
              </div>

              <h3 
                onClick={() => onViewDoc(item)}
                className="font-serif text-base font-medium text-neutral-900 hover:underline cursor-pointer leading-snug"
              >
                {item.judul}
              </h3>

              <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                {item.tujuan}
              </p>

              {item.tugasPraktik && (
                <div className="bg-neutral-50 p-2.5 rounded-lg border border-neutral-200 text-[11px] font-mono text-neutral-700 line-clamp-2">
                  {item.tugasPraktik}
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleOpenEdit(item)}
                  className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded"
                  title="Edit"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onDeleteMaterial(item.id)}
                  className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded"
                  title="Hapus"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={() => onViewDoc(item)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-medium shadow-2xs transition-all"
              >
                <Eye className="w-3 h-3" />
                <span>Buka & Cetak Modul</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Simple Form Modal (1 Page, No complicated wizard) */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full my-auto border border-neutral-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/50">
              <h3 className="font-serif text-base font-medium text-neutral-900">
                {editingId ? 'Edit Perangkat Pembelajaran' : 'Tambah Materi / Modul Informatika'}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-neutral-400 hover:text-neutral-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-medium text-neutral-700 mb-1">
                  Judul Materi / Topik Informatika <span className="text-neutral-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.judul}
                  onChange={(e) => setForm({ ...form, judul: e.target.value })}
                  placeholder="Contoh: Pemrograman Visual: Logika Perulangan di Scratch"
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-neutral-900 bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-medium text-neutral-700 mb-1">Jenjang Kelas</label>
                  <select
                    value={form.kelas}
                    onChange={(e) => setForm({ ...form, kelas: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs bg-white text-neutral-800"
                  >
                    <option value="7">Kelas 7</option>
                    <option value="8">Kelas 8</option>
                    <option value="9">Kelas 9</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-neutral-700 mb-1">Elemen Informatika</label>
                  <select
                    value={form.elemen}
                    onChange={(e) => setForm({ ...form, elemen: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs bg-white text-neutral-800"
                  >
                    {informaticsElements.filter(x => x.id !== 'all').map(el => (
                      <option key={el.id} value={el.id}>{el.id} — {el.name.split('(')[0]}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-neutral-700 mb-1">Alokasi Waktu</label>
                  <input
                    type="text"
                    value={form.alokasiWaktu}
                    onChange={(e) => setForm({ ...form, alokasiWaktu: e.target.value })}
                    placeholder="4 JP (2 Pertemuan)"
                    className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-neutral-700 mb-1">Tujuan Pembelajaran (TP)</label>
                <textarea
                  rows={2}
                  value={form.tujuan}
                  onChange={(e) => setForm({ ...form, tujuan: e.target.value })}
                  placeholder="Peserta didik mampu memahami..."
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs bg-white"
                />
              </div>

              <div>
                <label className="block font-medium text-neutral-700 mb-1">Ringkasan Konsep / Materi</label>
                <textarea
                  rows={4}
                  value={form.ringkasan}
                  onChange={(e) => setForm({ ...form, ringkasan: e.target.value })}
                  placeholder="Poin-poin teori atau materi yang disampaikan..."
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs font-mono bg-white"
                />
              </div>

              <div>
                <label className="block font-medium text-neutral-700 mb-1">Lembar Praktikum Komputer / LKPD</label>
                <textarea
                  rows={3}
                  value={form.tugasPraktik}
                  onChange={(e) => setForm({ ...form, tugasPraktik: e.target.value })}
                  placeholder="Instruksi tugas siswa di lab komputer..."
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs font-mono bg-white"
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
                  Simpan Materi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
