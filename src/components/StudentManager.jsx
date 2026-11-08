import React, { useState } from 'react';
import { 
  Users, Plus, Check, Printer, Sparkles, Award, 
  Trash2, FileText, ChevronRight, UserPlus, ListPlus, Edit3, X
} from 'lucide-react';

export default function StudentManager({ 
  students, 
  classes, 
  onUpdateStudents, 
  onAddClass, 
  teacherProfile 
}) {
  const [selectedClass, setSelectedClass] = useState(classes[0] || '7A');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  
  // Modals
  const [showAddModal, setShowAddModal] = useState(false);
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [showAddClassModal, setShowAddClassModal] = useState(false);
  const [viewingHistoryStudent, setViewingHistoryStudent] = useState(null);

  // Single Add form
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentNISN, setNewStudentNISN] = useState('');

  // Bulk Add form
  const [bulkText, setBulkText] = useState('');

  // New Class form
  const [newClassName, setNewClassName] = useState('');

  // Filter students by selected class
  const classStudents = students.filter(s => s.kelas === selectedClass);

  // Presensi Handler
  const handleSetAttendance = (studentId, status) => {
    const updated = students.map(s => {
      if (s.id === studentId) {
        return {
          ...s,
          presensi: {
            ...s.presensi,
            [selectedDate]: status
          }
        };
      }
      return s;
    });
    onUpdateStudents(updated);
  };

  // Mark all students in current class as Hadir (H)
  const handleMarkAllHadir = () => {
    const updated = students.map(s => {
      if (s.kelas === selectedClass) {
        return {
          ...s,
          presensi: {
            ...s.presensi,
            [selectedDate]: 'H'
          }
        };
      }
      return s;
    });
    onUpdateStudents(updated);
  };

  // Add / Subtract Points
  const handleAddPoints = (studentId, delta, alasan) => {
    const updated = students.map(s => {
      if (s.id === studentId) {
        const newScore = Math.max(0, (s.poinKeaktifan || 0) + delta);
        const newHistory = [
          {
            tanggal: selectedDate,
            poin: delta,
            alasan: alasan || (delta > 0 ? `+${delta} Keaktifan Kelas` : `${delta} Pengurangan`)
          },
          ...(s.riwayatPoin || [])
        ];
        return {
          ...s,
          poinKeaktifan: newScore,
          riwayatPoin: newHistory
        };
      }
      return s;
    });
    onUpdateStudents(updated);
  };

  // Delete Student
  const handleDeleteStudent = (studentId) => {
    if (window.confirm("Hapus siswa ini dari daftar kelas?")) {
      onUpdateStudents(students.filter(s => s.id !== studentId));
    }
  };

  // Handle Single Student Addition
  const handleSingleAdd = (e) => {
    e.preventDefault();
    if (!newStudentName.trim()) return;

    const newObj = {
      id: `SIS-${selectedClass}-${Date.now().toString().slice(-4)}`,
      nama: newStudentName.trim(),
      nisn: newStudentNISN.trim() || `009${Math.floor(1000000 + Math.random() * 9000000)}`,
      kelas: selectedClass,
      poinKeaktifan: 0,
      presensi: { [selectedDate]: 'H' },
      riwayatPoin: []
    };

    onUpdateStudents([...students, newObj]);
    setNewStudentName('');
    setNewStudentNISN('');
    setShowAddModal(false);
  };

  // Handle Bulk Student Addition (Paste Excel/Text)
  const handleBulkAdd = (e) => {
    e.preventDefault();
    if (!bulkText.trim()) return;

    const lines = bulkText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    const newStudents = lines.map((line, idx) => {
      // Check if line contains tab (Excel copy: NISN \t Name or Name \t NISN)
      const parts = line.split('\t');
      let nama = line;
      let nisn = `009${Math.floor(1000000 + Math.random() * 9000000)}`;

      if (parts.length >= 2) {
        if (/^\d+$/.test(parts[0])) {
          nisn = parts[0];
          nama = parts[1];
        } else {
          nama = parts[0];
          nisn = parts[1];
        }
      }

      return {
        id: `SIS-${selectedClass}-${Date.now().toString().slice(-4)}-${idx}`,
        nama: nama.trim(),
        nisn: nisn.trim(),
        kelas: selectedClass,
        poinKeaktifan: 0,
        presensi: { [selectedDate]: 'H' },
        riwayatPoin: []
      };
    });

    onUpdateStudents([...students, ...newStudents]);
    setBulkText('');
    setShowBulkModal(false);
  };

  // Add new class
  const handleAddClassSubmit = (e) => {
    e.preventDefault();
    const clean = newClassName.trim().toUpperCase();
    if (clean && !classes.includes(clean)) {
      onAddClass(clean);
      setSelectedClass(clean);
      setNewClassName('');
      setShowAddClassModal(false);
    }
  };

  // Top 3 Leaderboard in class
  const sortedByPoints = [...classStudents].sort((a, b) => (b.poinKeaktifan || 0) - (a.poinKeaktifan || 0));

  // Count attendance today
  const hadirCount = classStudents.filter(s => s.presensi?.[selectedDate] === 'H').length;
  const sakitCount = classStudents.filter(s => s.presensi?.[selectedDate] === 'S').length;
  const izinCount = classStudents.filter(s => s.presensi?.[selectedDate] === 'I').length;
  const alpaCount = classStudents.filter(s => s.presensi?.[selectedDate] === 'A').length;

  return (
    <div className="space-y-6 w-full font-sans">
      
      {/* Top Header & Class Navigation */}
      <div className="bg-white p-5 md:p-6 rounded-2xl border border-neutral-200 shadow-2xs space-y-4">
        
        {/* Row 1: Title and Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="font-serif text-xl md:text-2xl font-normal text-neutral-900 tracking-tight">
              Presensi & Poin Keaktifan Siswa Informatika
            </h1>
            <p className="text-xs text-neutral-500 mt-0.5">
              Kelola absensi harian dan catat poin keaktifan murid saat pembelajaran atau praktikum komputer.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 no-print">
            <button
              onClick={() => setShowBulkModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-neutral-300 hover:border-neutral-900 text-neutral-800 rounded-lg text-xs font-medium transition-colors"
              title="Salin dan tempel daftar nama dari Excel"
            >
              <ListPlus className="w-3.5 h-3.5" />
              <span>Tempel Daftar (Bulk)</span>
            </button>

            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-medium shadow-2xs transition-all"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>+ Siswa Baru</span>
            </button>

            <button
              onClick={() => window.print()}
              className="p-1.5 text-neutral-500 hover:text-neutral-900 border border-neutral-200 hover:border-neutral-900 rounded-lg bg-white"
              title="Cetak Presensi & Rekap Poin"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Row 2: Class Pills & Date Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-neutral-100 no-print">
          
          {/* Class Selectors */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs font-mono text-neutral-500 mr-1 shrink-0">Kelas:</span>
            {classes.map((cls) => (
              <button
                key={cls}
                onClick={() => setSelectedClass(cls)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all shrink-0 ${
                  selectedClass === cls
                    ? 'bg-neutral-900 text-white shadow-2xs'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {cls}
              </button>
            ))}

            <button
              onClick={() => setShowAddClassModal(true)}
              className="px-2 py-1 rounded-lg text-xs font-mono border border-dashed border-neutral-300 text-neutral-500 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
            >
              + Kelas
            </button>
          </div>

          {/* Date Selector & Quick Hadir */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-neutral-50 border border-neutral-200 px-2 py-1 rounded-lg text-xs font-mono">
              <span className="text-neutral-500">Tgl:</span>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-transparent font-mono text-xs focus:outline-none"
              />
            </div>

            <button
              onClick={handleMarkAllHadir}
              className="px-3 py-1 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-800 text-xs font-medium rounded-lg transition-colors whitespace-nowrap"
            >
              ✓ Semua Hadir
            </button>
          </div>

        </div>

      </div>

      {/* Attendance Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white p-3.5 rounded-xl border border-neutral-200 shadow-2xs flex items-center justify-between">
          <span className="font-mono text-xs text-neutral-500">Hadir (H)</span>
          <span className="font-serif text-xl font-medium text-neutral-900">{hadirCount}</span>
        </div>
        <div className="bg-white p-3.5 rounded-xl border border-neutral-200 shadow-2xs flex items-center justify-between">
          <span className="font-mono text-xs text-neutral-500">Sakit (S)</span>
          <span className="font-serif text-xl font-medium text-neutral-900">{sakitCount}</span>
        </div>
        <div className="bg-white p-3.5 rounded-xl border border-neutral-200 shadow-2xs flex items-center justify-between">
          <span className="font-mono text-xs text-neutral-500">Izin (I)</span>
          <span className="font-serif text-xl font-medium text-neutral-900">{izinCount}</span>
        </div>
        <div className="bg-white p-3.5 rounded-xl border border-neutral-200 shadow-2xs flex items-center justify-between">
          <span className="font-mono text-xs text-neutral-500">Alpa (A)</span>
          <span className="font-serif text-xl font-medium text-neutral-900">{alpaCount}</span>
        </div>
      </div>

      {/* Main Student Table */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-2xs overflow-hidden">
        
        {/* Printable Official Header */}
        <div className="print-only hidden p-6 border-b-2 border-black text-center">
          <h2 className="text-xl font-bold uppercase">{teacherProfile.sekolah}</h2>
          <h1 className="text-lg font-bold mt-1">PRESENSI & REKAP KEAKTIFAN SISWA MATA PELAJARAN INFORMATIKA</h1>
          <p className="text-xs text-neutral-600 mt-1">
            Kelas: {selectedClass} • Tanggal: {selectedDate} • Guru: {teacherProfile.namaGuru}
          </p>
        </div>

        <div className="p-4 border-b border-neutral-200 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="font-serif text-base font-medium text-neutral-900">
              Daftar Siswa Kelas {selectedClass}
            </span>
            <span className="text-xs font-mono text-neutral-500">
              ({classStudents.length} Murid)
            </span>
          </div>

          <span className="text-[11px] font-mono text-neutral-400 hidden sm:inline">
            Klik tombol presensi (H/S/I/A) atau tombol (+) untuk memberi poin langsung di kelas
          </span>
        </div>

        {classStudents.length === 0 ? (
          <div className="p-12 text-center space-y-3">
            <Users className="w-10 h-10 text-neutral-300 mx-auto stroke-[1.5]" />
            <h3 className="font-serif text-base text-neutral-800">Belum ada siswa di kelas {selectedClass}</h3>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto">
              Tambahkan siswa satu per satu atau salin tempel seluruh daftar nama dari Excel.
            </p>
            <div className="flex items-center justify-center gap-2 pt-2">
              <button
                onClick={() => setShowBulkModal(true)}
                className="px-4 py-2 bg-neutral-900 text-white rounded-xl text-xs font-medium hover:bg-neutral-800 transition-colors"
              >
                Tempel Daftar Nama
              </button>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-100/70 border-b border-neutral-200 text-neutral-700 font-mono text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4 w-12 text-center">No</th>
                  <th className="py-3 px-4">Nama Siswa & NISN</th>
                  <th className="py-3 px-4 text-center">Status Presensi</th>
                  <th className="py-3 px-4 text-center">Total Poin</th>
                  <th className="py-3 px-4 text-center no-print">Beri Poin Keaktifan</th>
                  <th className="py-3 px-4 text-right w-16 no-print">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {classStudents.map((st, idx) => {
                  const currentStatus = st.presensi?.[selectedDate] || '-';
                  return (
                    <tr key={st.id} className="hover:bg-neutral-50/70 transition-colors">
                      
                      {/* No */}
                      <td className="py-3 px-4 text-center font-mono text-neutral-400 text-xs">
                        {idx + 1}
                      </td>

                      {/* Nama Siswa */}
                      <td className="py-3 px-4">
                        <div className="font-medium text-neutral-900 text-sm">{st.nama}</div>
                        <div className="text-[11px] font-mono text-neutral-400">NISN: {st.nisn}</div>
                      </td>

                      {/* Presensi Buttons */}
                      <td className="py-3 px-4 text-center whitespace-nowrap">
                        <div className="inline-flex items-center gap-1 bg-neutral-100 p-1 rounded-lg border border-neutral-200">
                          {['H', 'S', 'I', 'A'].map((stKey) => {
                            const isSelected = currentStatus === stKey;
                            return (
                              <button
                                key={stKey}
                                type="button"
                                onClick={() => handleSetAttendance(st.id, stKey)}
                                className={`w-7 h-6 rounded flex items-center justify-center font-mono text-xs font-bold transition-all ${
                                  isSelected
                                    ? 'bg-neutral-900 text-white shadow-2xs'
                                    : 'text-neutral-600 hover:bg-white hover:text-neutral-900'
                                }`}
                                title={
                                  stKey === 'H' ? 'Hadir' : stKey === 'S' ? 'Sakit' : stKey === 'I' ? 'Izin' : 'Alpa'
                                }
                              >
                                {stKey}
                              </button>
                            );
                          })}
                        </div>
                      </td>

                      {/* Total Poin Keaktifan */}
                      <td className="py-3 px-4 text-center whitespace-nowrap">
                        <button
                          onClick={() => setViewingHistoryStudent(st)}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-neutral-50 hover:bg-neutral-100 border border-neutral-300 rounded-lg text-xs font-mono font-bold text-neutral-900 transition-colors"
                          title="Klik untuk melihat riwayat keaktifan"
                        >
                          <span>{st.poinKeaktifan || 0}</span>
                          <span className="text-[10px] text-neutral-400 font-normal">pts</span>
                        </button>
                      </td>

                      {/* Quick Point Buttons */}
                      <td className="py-3 px-4 text-center whitespace-nowrap no-print">
                        <div className="inline-flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleAddPoints(st.id, 1, 'Menjawab pertanyaan / tanggapan')}
                            className="px-2 py-1 bg-white hover:bg-neutral-900 hover:text-white border border-neutral-300 text-neutral-900 rounded font-mono text-xs font-bold transition-all"
                            title="+1 Poin: Menjawab / Bertanya"
                          >
                            +1
                          </button>
                          <button
                            type="button"
                            onClick={() => handleAddPoints(st.id, 2, 'Selesai praktik koding / modul lab')}
                            className="px-2 py-1 bg-white hover:bg-neutral-900 hover:text-white border border-neutral-300 text-neutral-900 rounded font-mono text-xs font-bold transition-all"
                            title="+2 Poin: Tugas Praktik Lab Selesai"
                          >
                            +2
                          </button>
                          <button
                            type="button"
                            onClick={() => handleAddPoints(st.id, 3, 'Presentasi karya / demonstrasi kode')}
                            className="px-2 py-1 bg-white hover:bg-neutral-900 hover:text-white border border-neutral-300 text-neutral-900 rounded font-mono text-xs font-bold transition-all"
                            title="+3 Poin: Maju Presentasi"
                          >
                            +3
                          </button>
                          <button
                            type="button"
                            onClick={() => handleAddPoints(st.id, -1, 'Kurang fokus / mengganggu')}
                            className="px-2 py-1 bg-white hover:bg-neutral-900 hover:text-white border border-neutral-200 text-neutral-400 hover:text-white rounded font-mono text-xs transition-all"
                            title="-1 Poin: Kurang tertib"
                          >
                            -1
                          </button>
                        </div>
                      </td>

                      {/* Delete */}
                      <td className="py-3 px-4 text-right whitespace-nowrap no-print">
                        <button
                          type="button"
                          onClick={() => handleDeleteStudent(st.id)}
                          className="p-1 text-neutral-400 hover:text-neutral-900 rounded"
                          title="Hapus siswa"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Printable Signature footer */}
        <div className="print-only hidden p-8 pt-10">
          <div className="flex justify-between items-start text-xs">
            <div className="text-center w-60">
              <p>Mengetahui,</p>
              <p className="font-bold">Kepala {teacherProfile.sekolah}</p>
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

      {/* Top Active Students Leaderboard Widget */}
      {classStudents.length > 0 && (
        <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-2xs space-y-3 no-print">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-neutral-900" />
              <h3 className="font-serif text-base font-medium text-neutral-900">
                Peringkat Keaktifan Kelas {selectedClass}
              </h3>
            </div>
            <span className="text-xs font-mono text-neutral-400">Top Partisipasi</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {sortedByPoints.slice(0, 3).map((st, i) => (
              <div key={st.id} className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-neutral-900 text-white font-mono text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <div className="text-xs font-medium text-neutral-900 line-clamp-1">{st.nama}</div>
                    <div className="text-[10px] font-mono text-neutral-400">NISN: {st.nisn}</div>
                  </div>
                </div>
                <div className="font-mono text-sm font-bold text-neutral-900 pl-2">
                  {st.poinKeaktifan || 0} pts
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MODAL 1: Tambah Siswa Satu per Satu */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full my-auto border border-neutral-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/50">
              <h3 className="font-serif text-base font-medium text-neutral-900">
                Tambah Siswa Baru ke Kelas {selectedClass}
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-neutral-400 hover:text-neutral-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSingleAdd} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-medium text-neutral-700 mb-1">
                  Nama Lengkap Siswa <span className="text-neutral-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  autoFocus
                  value={newStudentName}
                  onChange={(e) => setNewStudentName(e.target.value)}
                  placeholder="Contoh: Muhammad Rizky Saputra"
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-neutral-900 bg-white"
                />
              </div>

              <div>
                <label className="block font-medium text-neutral-700 mb-1">
                  NISN / No. Induk (Opsional)
                </label>
                <input
                  type="text"
                  value={newStudentNISN}
                  onChange={(e) => setNewStudentNISN(e.target.value)}
                  placeholder="Contoh: 0091283401"
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 font-mono text-xs focus:outline-none focus:border-neutral-900 bg-white"
                />
              </div>

              <div className="pt-3 border-t border-neutral-200 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-neutral-600 font-medium hover:text-neutral-900 rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-xl shadow-2xs"
                >
                  Simpan Siswa
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: Bulk Add (Tempel Daftar Nama dari Excel) */}
      {showBulkModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full my-auto border border-neutral-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/50">
              <h3 className="font-serif text-base font-medium text-neutral-900">
                Tempel Daftar Nama Siswa — Kelas {selectedClass}
              </h3>
              <button
                onClick={() => setShowBulkModal(false)}
                className="text-neutral-400 hover:text-neutral-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleBulkAdd} className="p-6 space-y-4 text-xs">
              <p className="text-neutral-500 leading-relaxed">
                Salin kolom nama dari Microsoft Excel atau Google Sheets, lalu tempel (*paste*) di kotak bawah (1 nama per baris).
              </p>

              <textarea
                rows={8}
                required
                value={bulkText}
                onChange={(e) => setBulkText(e.target.value)}
                placeholder="Ahmad Faiz Pratama&#10;Anindya Putri Kirana&#10;Bagas Surya Ramadhan&#10;Chelsea Olivia Zahra"
                className="w-full px-3 py-2.5 rounded-xl border border-neutral-300 font-mono text-xs focus:outline-none focus:border-neutral-900 bg-white"
              />

              <div className="pt-2 border-t border-neutral-200 flex items-center justify-between">
                <span className="text-neutral-400 font-mono text-[11px]">
                  {bulkText.split('\n').filter(l => l.trim().length > 0).length} baris terdeteksi
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowBulkModal(false)}
                    className="px-4 py-2 text-neutral-600 font-medium hover:text-neutral-900 rounded-xl"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-xl shadow-2xs"
                  >
                    Tambahkan Semua
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: Tambah Kelas Baru */}
      {showAddClassModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full my-auto border border-neutral-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/50">
              <h3 className="font-serif text-base font-medium text-neutral-900">
                Tambah Kelas Informatika Baru
              </h3>
              <button
                onClick={() => setShowAddClassModal(false)}
                className="text-neutral-400 hover:text-neutral-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddClassSubmit} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-medium text-neutral-700 mb-1">
                  Nama Kelas
                </label>
                <input
                  type="text"
                  required
                  autoFocus
                  value={newClassName}
                  onChange={(e) => setNewClassName(e.target.value)}
                  placeholder="Contoh: 7C, 8C, 9B"
                  className="w-full px-3 py-2 rounded-xl border border-neutral-300 font-mono text-sm focus:outline-none focus:border-neutral-900 uppercase"
                />
              </div>

              <div className="pt-2 border-t border-neutral-200 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddClassModal(false)}
                  className="px-4 py-2 text-neutral-600 font-medium hover:text-neutral-900 rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-xl"
                >
                  Tambah Kelas
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 4: Riwayat Poin Siswa */}
      {viewingHistoryStudent && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full my-auto border border-neutral-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/50">
              <div>
                <h3 className="font-serif text-base font-medium text-neutral-900">
                  {viewingHistoryStudent.nama}
                </h3>
                <p className="text-[11px] font-mono text-neutral-400">
                  Kelas {viewingHistoryStudent.kelas} • Total: {viewingHistoryStudent.poinKeaktifan || 0} Poin
                </p>
              </div>
              <button
                onClick={() => setViewingHistoryStudent(null)}
                className="text-neutral-400 hover:text-neutral-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-3 max-h-80 overflow-y-auto text-xs">
              <h4 className="font-mono text-[10px] uppercase text-neutral-500 font-semibold">
                Riwayat Poin & Catatan Guru:
              </h4>

              {(!viewingHistoryStudent.riwayatPoin || viewingHistoryStudent.riwayatPoin.length === 0) ? (
                <p className="text-neutral-400 italic text-center py-4">Belum ada riwayat poin keaktifan.</p>
              ) : (
                <div className="divide-y divide-neutral-100">
                  {viewingHistoryStudent.riwayatPoin.map((r, i) => (
                    <div key={i} className="py-2.5 flex items-start justify-between gap-2">
                      <div>
                        <div className="font-medium text-neutral-800">{r.alasan}</div>
                        <div className="text-[10px] font-mono text-neutral-400">{r.tanggal}</div>
                      </div>
                      <span className={`font-mono font-bold text-xs ${r.poin > 0 ? 'text-neutral-900' : 'text-neutral-400'}`}>
                        {r.poin > 0 ? `+${r.poin}` : r.poin} pts
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 border-t border-neutral-200 bg-neutral-50/50 text-right">
              <button
                onClick={() => setViewingHistoryStudent(null)}
                className="px-4 py-2 bg-neutral-900 text-white rounded-xl text-xs font-medium"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
