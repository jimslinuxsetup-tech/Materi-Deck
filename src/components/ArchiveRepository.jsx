import React, { useState, useMemo } from 'react';
import { 
  Search, BookOpen, Layers, Printer, Eye, Edit3, Trash2, 
  Plus, Download, Tag, Clock, FileText, LayoutGrid, List,
  CheckSquare, HelpCircle, Award, Compass, Cpu, Atom, Calculator,
  Globe, Shield, Palette, Activity
} from 'lucide-react';
import { subjectList, categoryList, profilPelajarPancasilaList } from '../data/initialData';

const iconMap = {
  Atom: Atom,
  Calculator: Calculator,
  BookOpen: BookOpen,
  Globe: Globe,
  Cpu: Cpu,
  Compass: Compass,
  Shield: Shield,
  Activity: Activity,
  Palette: Palette,
  Award: Award
};

export default function ArchiveRepository({ 
  materials, 
  onViewDoc, 
  onEditDoc, 
  onDeleteDoc, 
  onAddNew, 
  selectedSubject = 'all' 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterKelas, setFilterKelas] = useState('all');
  const [filterMapel, setFilterMapel] = useState(selectedSubject);
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterSemester, setFilterSemester] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Filtered materials
  const filteredMaterials = useMemo(() => {
    return materials.filter(item => {
      const query = searchQuery.toLowerCase().trim();
      const matchQuery = !query || 
        item.judul.toLowerCase().includes(query) ||
        item.mapelNama.toLowerCase().includes(query) ||
        (item.capaianPembelajaran && item.capaianPembelajaran.toLowerCase().includes(query)) ||
        (item.isiMateriRingkas && item.isiMateriRingkas.toLowerCase().includes(query)) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(query)));

      const matchKelas = filterKelas === 'all' || item.kelas === filterKelas;
      const matchMapel = filterMapel === 'all' || item.mapel === filterMapel;
      const matchCategory = filterCategory === 'all' || item.kategori === filterCategory;
      const matchSemester = filterSemester === 'all' || item.semester === filterSemester;

      return matchQuery && matchKelas && matchMapel && matchCategory && matchSemester;
    });
  }, [materials, searchQuery, filterKelas, filterMapel, filterCategory, filterSemester]);

  const getCategoryLabel = (catId) => {
    const c = categoryList.find(cat => cat.id === catId);
    return c ? c.name : catId;
  };

  return (
    <div className="space-y-6 w-full">
      
      {/* Header & Quick Action - Claude Minimalist Dual Tone */}
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-neutral-200 shadow-2xs flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono border border-neutral-200 bg-neutral-100 text-neutral-800">
              Fase D (SMP Kelas 7-9)
            </span>
            <span className="text-xs text-neutral-400 font-mono">
              Standar BSKAP
            </span>
          </div>
          <h1 className="font-serif text-2xl md:text-3xl font-normal text-neutral-900 tracking-tight">
            Pusat Arsip Materi & Perangkat Ajar
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
            Kelola, temukan, dan cetak modul ajar, ringkasan materi, LKPD, serta instrumen asesmen dalam format minimalis.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onAddNew}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-medium border border-neutral-900 shadow-2xs transition-all active:scale-[0.98]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Buat Modul / Arsip Baru</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-2xs space-y-4">
        
        {/* Search Input & View Switcher */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari materi, capaian pembelajaran (CP), topik, atau kata kunci..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-neutral-300 focus:outline-none focus:border-neutral-900 text-xs md:text-sm font-sans bg-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-neutral-400 hover:text-neutral-900"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            <div className="flex bg-neutral-100 p-1 rounded-xl border border-neutral-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white shadow-2xs text-neutral-900 font-bold' : 'text-neutral-500'}`}
                title="Tampilan Kartu"
              >
                <LayoutGrid className="w-4 h-4 stroke-[1.8]" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white shadow-2xs text-neutral-900 font-bold' : 'text-neutral-500'}`}
                title="Tampilan Tabel/List"
              >
                <List className="w-4 h-4 stroke-[1.8]" />
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown Filters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-neutral-100 text-xs">
          
          {/* Kelas */}
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
              Jenjang Kelas
            </label>
            <select
              value={filterKelas}
              onChange={(e) => setFilterKelas(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg border border-neutral-200 focus:outline-none focus:border-neutral-900 font-medium bg-white text-neutral-800"
            >
              <option value="all">Semua Kelas (Fase D)</option>
              <option value="7">Kelas 7 SMP</option>
              <option value="8">Kelas 8 SMP</option>
              <option value="9">Kelas 9 SMP</option>
            </select>
          </div>

          {/* Mapel */}
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
              Mata Pelajaran
            </label>
            <select
              value={filterMapel}
              onChange={(e) => setFilterMapel(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg border border-neutral-200 focus:outline-none focus:border-neutral-900 font-medium bg-white text-neutral-800"
            >
              <option value="all">Semua Mapel</option>
              {subjectList.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>

          {/* Kategori */}
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
              Jenis Dokumen
            </label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg border border-neutral-200 focus:outline-none focus:border-neutral-900 font-medium bg-white text-neutral-800"
            >
              {categoryList.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          {/* Semester */}
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
              Semester
            </label>
            <select
              value={filterSemester}
              onChange={(e) => setFilterSemester(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg border border-neutral-200 focus:outline-none focus:border-neutral-900 font-medium bg-white text-neutral-800"
            >
              <option value="all">Semua Semester</option>
              <option value="Ganjil">Semester Ganjil</option>
              <option value="Genap">Semester Genap</option>
            </select>
          </div>

        </div>

        {/* Results Counter & Reset Filter */}
        <div className="flex items-center justify-between pt-1 text-xs text-neutral-500 font-mono">
          <span>
            Menampilkan <strong className="text-neutral-900">{filteredMaterials.length}</strong> perangkat ajar
          </span>
          {(searchQuery || filterKelas !== 'all' || filterMapel !== 'all' || filterCategory !== 'all' || filterSemester !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setFilterKelas('all');
                setFilterMapel('all');
                setFilterCategory('all');
                setFilterSemester('all');
              }}
              className="text-neutral-900 underline font-medium hover:text-neutral-600"
            >
              Reset Filter
            </button>
          )}
        </div>
      </div>

      {/* Materials List / Grid */}
      {filteredMaterials.length === 0 ? (
        <div className="bg-white rounded-2xl border border-dashed border-neutral-300 p-12 text-center">
          <BookOpen className="w-10 h-10 text-neutral-300 mx-auto mb-3 stroke-[1.5]" />
          <h3 className="font-serif text-base font-medium text-neutral-800">Tidak ada arsip yang cocok</h3>
          <p className="text-xs text-neutral-500 mt-1 max-w-sm mx-auto">
            Coba sesuaikan kata kunci pencarian atau bersihkan filter kelas dan mata pelajaran di atas.
          </p>
          <button
            onClick={onAddNew}
            className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 text-white rounded-xl text-xs font-medium hover:bg-neutral-800 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Buat Perangkat Ajar Baru</span>
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        
        /* GRID VIEW - Responsive to Browser Window */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredMaterials.map((item) => {
            const subject = subjectList.find(s => s.id === item.mapel);
            const Icon = subject && iconMap[subject.icon] ? iconMap[subject.icon] : BookOpen;

            return (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl border border-neutral-200 shadow-2xs hover:border-neutral-900 transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-5 space-y-3">
                  
                  {/* Badge Row */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-medium border border-neutral-200 bg-neutral-100 text-neutral-800">
                      <Icon className="w-3 h-3 stroke-[1.8]" />
                      {item.mapelNama}
                    </span>

                    <span className="text-[11px] font-mono px-2 py-0.5 bg-neutral-50 text-neutral-700 rounded border border-neutral-200">
                      Kelas {item.kelas}
                    </span>
                  </div>

                  {/* Title in Claude Serif Typography */}
                  <h3 
                    onClick={() => onViewDoc(item)}
                    className="font-serif text-base font-medium text-neutral-900 leading-snug line-clamp-2 cursor-pointer group-hover:underline transition-colors"
                  >
                    {item.judul}
                  </h3>

                  {/* CP Excerpt */}
                  <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                    {item.capaianPembelajaran || item.pemahamanBermakna}
                  </p>

                  {/* Profil Pelajar Pancasila Tags - Monochrome */}
                  {item.dimensiP5 && item.dimensiP5.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {item.dimensiP5.slice(0, 2).map((dim, i) => {
                        const pItem = profilPelajarPancasilaList.find(p => p.id === dim);
                        return (
                          <span key={i} className="text-[10px] font-mono bg-neutral-50 text-neutral-600 border border-neutral-200 px-2 py-0.5 rounded">
                            {pItem ? pItem.label.split(',')[0] : dim}
                          </span>
                        );
                      })}
                      {item.dimensiP5.length > 2 && (
                        <span className="text-[10px] text-neutral-400 font-mono py-0.5">
                          +{item.dimensiP5.length - 2}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Metadata Info */}
                  <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      <span>{item.alokasiWaktu || 'Sem. ' + item.semester}</span>
                    </div>
                    <span>{getCategoryLabel(item.kategori)}</span>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="px-5 py-3 bg-neutral-50/70 border-t border-neutral-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => onEditDoc(item)}
                      className="p-1.5 text-neutral-400 hover:text-neutral-900 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-neutral-200"
                      title="Edit Modul"
                    >
                      <Edit3 className="w-3.5 h-3.5 stroke-[1.8]" />
                    </button>
                    <button
                      onClick={() => onDeleteDoc(item.id)}
                      className="p-1.5 text-neutral-400 hover:text-neutral-900 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-neutral-200"
                      title="Hapus dari Arsip"
                    >
                      <Trash2 className="w-3.5 h-3.5 stroke-[1.8]" />
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onViewDoc(item)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-medium transition-colors shadow-2xs"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Buka & Cetak</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      ) : (

        /* LIST / TABLE VIEW */
        <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-100/70 border-b border-neutral-200 text-neutral-700 font-mono text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4 font-medium">Mata Pelajaran & Judul</th>
                  <th className="py-3 px-4 font-medium">Kelas</th>
                  <th className="py-3 px-4 font-medium">Jenis Perangkat</th>
                  <th className="py-3 px-4 font-medium">Semester</th>
                  <th className="py-3 px-4 font-medium">Alokasi</th>
                  <th className="py-3 px-4 text-right font-medium">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {filteredMaterials.map((item) => (
                  <tr key={item.id} className="hover:bg-neutral-50/70 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-serif text-sm font-medium text-neutral-900 cursor-pointer hover:underline" onClick={() => onViewDoc(item)}>
                        {item.judul}
                      </div>
                      <div className="text-[11px] text-neutral-500 mt-0.5 flex items-center gap-2 font-mono">
                        <span>{item.mapelNama}</span>
                        <span>•</span>
                        <span>ID: {item.id}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 bg-neutral-100 font-mono text-neutral-700 rounded border border-neutral-200 text-[11px]">
                        Kelas {item.kelas}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-neutral-600">
                      {getCategoryLabel(item.kategori)}
                    </td>
                    <td className="py-3 px-4 text-neutral-600 font-mono">
                      {item.semester}
                    </td>
                    <td className="py-3 px-4 text-neutral-600 font-mono whitespace-nowrap">
                      {item.alokasiWaktu}
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-1.5">
                        <button
                          onClick={() => onViewDoc(item)}
                          className="px-2.5 py-1 bg-white border border-neutral-300 text-neutral-900 hover:border-neutral-900 rounded-lg font-medium text-xs"
                        >
                          Lihat
                        </button>
                        <button
                          onClick={() => onEditDoc(item)}
                          className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-lg"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onDeleteDoc(item.id)}
                          className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-lg"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      )}

    </div>
  );
}
