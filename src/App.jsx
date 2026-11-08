import React, { useState, useEffect } from 'react';
import { 
  Users, BookOpen, Calendar, Settings, Plus, Printer, 
  Menu, X, Sparkles, Cpu
} from 'lucide-react';

import { 
  getStoredProfile, saveStoredProfile,
  getStoredStudents, saveStoredStudents,
  getStoredClasses, saveStoredClasses,
  getStoredMaterials, saveStoredMaterials,
  getStoredJournal, saveStoredJournal
} from './utils/storage';

import StudentManager from './components/StudentManager';
import InformaticsArchive from './components/InformaticsArchive';
import TeachingJournal from './components/TeachingJournal';
import SettingsProfile from './components/SettingsProfile';
import DocumentViewerModal from './components/DocumentViewerModal';

export default function App() {
  const [profile, setProfile] = useState(getStoredProfile);
  const [students, setStudents] = useState(getStoredStudents);
  const [classes, setClasses] = useState(getStoredClasses);
  const [materials, setMaterials] = useState(getStoredMaterials);
  const [journal, setJournal] = useState(getStoredJournal);

  // Active tab: 'students' (default), 'materials', 'journal', 'settings'
  const [activeTab, setActiveTab] = useState('students');
  const [viewingDoc, setViewingDoc] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync state to local storage
  useEffect(() => {
    saveStoredProfile(profile);
  }, [profile]);

  useEffect(() => {
    saveStoredStudents(students);
  }, [students]);

  useEffect(() => {
    saveStoredClasses(classes);
  }, [classes]);

  useEffect(() => {
    saveStoredMaterials(materials);
  }, [materials]);

  useEffect(() => {
    saveStoredJournal(journal);
  }, [journal]);

  // Handlers
  const handleUpdateStudents = (newStudents) => {
    setStudents(newStudents);
  };

  const handleAddClass = (newClass) => {
    setClasses(prev => [...prev, newClass]);
  };

  const handleSaveMaterial = (item) => {
    setMaterials(prev => {
      const idx = prev.findIndex(m => m.id === item.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = item;
        return copy;
      }
      return [item, ...prev];
    });
  };

  const handleDeleteMaterial = (id) => {
    if (window.confirm("Hapus materi informatika ini dari arsip?")) {
      setMaterials(prev => prev.filter(m => m.id !== id));
      if (viewingDoc?.id === id) setViewingDoc(null);
    }
  };

  const handleAddJournal = (newLog) => {
    setJournal(prev => [newLog, ...prev]);
  };

  const handleDeleteJournal = (id) => {
    if (window.confirm("Hapus catatan jurnal pertemuan ini?")) {
      setJournal(prev => prev.filter(j => j.id !== id));
    }
  };

  const handleDataImported = (data) => {
    if (data.profile) setProfile(data.profile);
    if (data.students) setStudents(data.students);
    if (data.classes) setClasses(data.classes);
    if (data.materials) setMaterials(data.materials);
    if (data.journal) setJournal(data.journal);
  };

  const handleDataReset = (resetData) => {
    setProfile(resetData.profile);
    setStudents(resetData.students);
    setClasses(resetData.classes);
    setMaterials(resetData.materials);
    setJournal(resetData.journal);
  };

  const navItems = [
    { id: 'students', label: 'Presensi & Keaktifan Siswa', icon: Users, count: students.length },
    { id: 'materials', label: 'Materi & Modul Lab', icon: BookOpen, count: materials.length },
    { id: 'journal', label: 'Jurnal Mengajar', icon: Calendar, count: journal.length },
    { id: 'settings', label: 'Profil Guru', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      
      {/* Header - Simple & Clean Dual Tone */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-neutral-200 no-print transition-all">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            
            {/* Logo */}
            <div 
              onClick={() => setActiveTab('students')}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-mono text-sm font-bold shadow-2xs">
                &lt;/&gt;
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-lg font-bold tracking-tight text-neutral-900">
                    Informatika <span className="font-mono text-xs font-normal text-neutral-400">SMP</span>
                  </span>
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-mono border border-neutral-200 bg-neutral-100 text-neutral-700">
                    Fase D
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 font-normal truncate max-w-[150px] sm:max-w-xs">
                  {profile.sekolah}
                </p>
              </div>
            </div>

            {/* Desktop 4 Tabs */}
            <nav className="hidden md:flex items-center gap-1 bg-neutral-100/70 p-1 rounded-xl border border-neutral-200/80">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isActive 
                        ? 'bg-white text-neutral-950 shadow-2xs border border-neutral-200 font-semibold' 
                        : 'text-neutral-600 hover:text-neutral-900 hover:bg-white/60'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                    {item.count !== undefined && (
                      <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono ${
                        isActive ? 'bg-neutral-900 text-white' : 'bg-neutral-200 text-neutral-600'
                      }`}>
                        {item.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Teacher Profile Quick Indicator */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('settings')}
                className="flex items-center gap-2 p-1.5 sm:px-2.5 sm:py-1 rounded-lg hover:bg-neutral-100 transition-colors border border-neutral-200 bg-white"
                title="Profil Pengajar Informatika"
              >
                <div className="w-6 h-6 rounded-full bg-neutral-900 text-white font-mono text-[11px] font-bold flex items-center justify-center">
                  {profile.namaGuru ? profile.namaGuru.charAt(0) : 'I'}
                </div>
                <div className="hidden sm:block text-left pr-1">
                  <div className="text-xs font-medium text-neutral-900 line-clamp-1">{profile.namaGuru}</div>
                  <div className="text-[10px] text-neutral-400 font-mono">Guru Informatika</div>
                </div>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 md:hidden text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg border border-neutral-200"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium ${
                    isActive ? 'bg-neutral-900 text-white' : 'text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.count !== undefined && (
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                      isActive ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
                    }`}>
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Main Content Area - Fluid & Responsive */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 transition-all">
        
        {activeTab === 'students' && (
          <StudentManager
            students={students}
            classes={classes}
            onUpdateStudents={handleUpdateStudents}
            onAddClass={handleAddClass}
            teacherProfile={profile}
          />
        )}

        {activeTab === 'materials' && (
          <InformaticsArchive
            materials={materials}
            onSaveMaterial={handleSaveMaterial}
            onDeleteMaterial={handleDeleteMaterial}
            onViewDoc={(doc) => setViewingDoc(doc)}
            teacherProfile={profile}
          />
        )}

        {activeTab === 'journal' && (
          <TeachingJournal
            journal={journal}
            classes={classes}
            onAddJournal={handleAddJournal}
            onDeleteJournal={handleDeleteJournal}
            teacherProfile={profile}
          />
        )}

        {activeTab === 'settings' && (
          <SettingsProfile
            profile={profile}
            students={students}
            classes={classes}
            materials={materials}
            journal={journal}
            onSaveProfile={(updated) => setProfile(updated)}
            onDataImported={handleDataImported}
            onDataReset={handleDataReset}
          />
        )}

      </main>

      {/* Printable / View Document Modal */}
      {viewingDoc && (
        <DocumentViewerModal
          document={viewingDoc}
          teacherProfile={profile}
          onClose={() => setViewingDoc(null)}
        />
      )}

      {/* Minimal Footer */}
      <footer className="bg-white border-t border-neutral-200 py-5 text-xs text-neutral-400 no-print mt-auto">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-neutral-800 font-semibold">&lt;SIPENA /&gt;</span>
            <span>—</span>
            <span>Aplikasi Presensi, Keaktifan & Arsip Informatika SMP (Kurikulum Merdeka)</span>
          </div>
          <div className="font-mono text-[11px]">
            Minimalist Dual Tone
          </div>
        </div>
      </footer>

    </div>
  );
}
