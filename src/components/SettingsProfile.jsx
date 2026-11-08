import React, { useState, useEffect } from 'react';
import { 
  User, School, Save, Download, Upload, RotateCcw, 
  Check, AlertTriangle, Cloud, CloudUpload, CloudDownload, RefreshCw
} from 'lucide-react';
import { 
  exportAllDataAsJSON, resetAllData, pushCloudSync, fetchCloudSync, getLastSyncTime 
} from '../utils/storage';

export default function SettingsProfile({ 
  profile, 
  students,
  classes,
  materials,
  journal,
  onSaveProfile, 
  onDataImported, 
  onDataReset 
}) {
  const [formData, setFormData] = useState({ ...profile });
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [syncStatus, setSyncStatus] = useState(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSync, setLastSync] = useState(getLastSyncTime());

  const handleSave = (e) => {
    e.preventDefault();
    onSaveProfile(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  // Push local data to Vercel KV Cloud
  const handlePushToCloud = async () => {
    setIsSyncing(true);
    setSyncStatus('Mengunggah data ke Cloud Vercel...');

    const fullPayload = {
      profile: formData,
      students,
      classes,
      materials,
      journal,
      syncedAt: new Date().toISOString()
    };

    const res = await pushCloudSync(fullPayload);
    setIsSyncing(false);

    if (res.success) {
      setSyncStatus('✓ Data berhasil diunggah ke Cloud Vercel! Perangkat lain kini dapat mengambil data ini.');
      setLastSync(new Date().toLocaleTimeString('id-ID'));
    } else {
      setSyncStatus(`Info: ${res.message || res.error || 'Vercel KV belum aktif'}`);
    }
  };

  // Pull latest data from Vercel KV Cloud
  const handlePullFromCloud = async () => {
    setIsSyncing(true);
    setSyncStatus('Menghubungkan ke Cloud Vercel...');

    const res = await fetchCloudSync();
    setIsSyncing(false);

    if (res.success && res.data) {
      onDataImported(res.data);
      if (res.data.profile) setFormData(res.data.profile);
      setSyncStatus('✓ Data terbaru dari cloud berhasil ditarik dan disinkronkan!');
      setLastSync(new Date().toLocaleTimeString('id-ID'));
    } else {
      setSyncStatus(`Info: ${res.message || res.error || 'Belum ada data di cloud atau Vercel KV belum dibuat.'}`);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        if (json.students || json.profile || json.materials) {
          onDataImported(json);
          alert("Data siswa, presensi, dan modul berhasil diimpor!");
        } else {
          alert("Format file JSON tidak cocok dengan cadangan SIPENA Informatika.");
        }
      } catch (err) {
        alert("Gagal membaca file JSON: " + err.message);
      }
    };
    reader.readAsText(file);
  };

  const handleReset = () => {
    if (window.confirm("Kembalikan seluruh data siswa dan modul ke contoh awal Informatika SMP?")) {
      const reset = resetAllData();
      onDataReset(reset);
      setFormData(reset.profile);
      alert("Data berhasil direset!");
    }
  };

  return (
    <div className="space-y-6 max-w-3xl w-full font-sans">
      
      {/* CLOUD SYNC VERCEL CARD (SINKRONISASI ANTAR PERANGKAT) */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-2xs p-6 md:p-8 space-y-4">
        <div className="border-b border-neutral-200 pb-3 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono border border-neutral-200 bg-neutral-100 text-neutral-800 mb-1">
              <Cloud className="w-3 h-3" />
              <span>Vercel Cloud Sync</span>
            </div>
            <h2 className="font-serif text-lg font-medium text-neutral-900">
              Sinkronisasi Cloud (HP & Laptop Terhubung)
            </h2>
            <p className="text-xs text-neutral-500 mt-0.5">
              Hubungkan data antar-perangkat agar absensi & poin yang Anda input di HP otomatis muncul di laptop.
            </p>
          </div>
          {lastSync && (
            <span className="font-mono text-[10px] text-neutral-400">
              Sinkron: {lastSync}
            </span>
          )}
        </div>

        {/* Sync Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <button
            type="button"
            onClick={handlePushToCloud}
            disabled={isSyncing}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-medium transition-all shadow-2xs disabled:opacity-50"
          >
            <CloudUpload className="w-4 h-4" />
            <span>Kirim Data ke Cloud Vercel</span>
          </button>

          <button
            type="button"
            onClick={handlePullFromCloud}
            disabled={isSyncing}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-neutral-300 hover:border-neutral-900 text-neutral-900 rounded-xl text-xs font-medium transition-colors disabled:opacity-50"
          >
            <CloudDownload className="w-4 h-4" />
            <span>Tarik Data Terbaru dari Cloud</span>
          </button>
        </div>

        {/* Sync Status Banner */}
        {syncStatus && (
          <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-xs font-mono text-neutral-700 leading-relaxed">
            {syncStatus}
          </div>
        )}

        <div className="pt-2 text-[11px] text-neutral-500 leading-relaxed space-y-1 bg-neutral-50 p-3.5 rounded-xl border border-neutral-200">
          <p className="font-medium text-neutral-900">💡 Cara Mengaktifkan Database Cloud Gratis di Vercel:</p>
          <p>1. Buka dashboard proyek Anda di <strong>vercel.com</strong>.</p>
          <p>2. Klik menu <strong>Storage</strong> ➔ pilih <strong>Create Database (KV / Upstash Redis)</strong>.</p>
          <p>3. Sambungkan ke proyek ini (*Connect to Project*). Selesai! HP & Laptop Anda akan otomatis tersinkronisasi 100%.</p>
        </div>
      </div>

      {/* Profil Guru & Sekolah Card */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-2xs p-6 md:p-8">
        <div className="border-b border-neutral-200 pb-3 mb-5">
          <h2 className="font-serif text-lg font-medium text-neutral-900">
            Profil Guru & Satuan Pendidikan
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Dicantumkan pada Kop Surat resmi cetak presensi, lembar praktikum lab, dan jurnal.
          </p>
        </div>

        <form onSubmit={handleSave} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-neutral-700 mb-1">
                Nama Lengkap & Gelar <span className="text-neutral-400">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.namaGuru}
                onChange={(e) => setFormData({ ...formData, namaGuru: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-neutral-900 bg-white"
              />
            </div>
            <div>
              <label className="block font-medium text-neutral-700 mb-1">
                NIP / NUPTK Guru
              </label>
              <input
                type="text"
                value={formData.nip}
                onChange={(e) => setFormData({ ...formData, nip: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-neutral-300 font-mono text-xs focus:outline-none focus:border-neutral-900 bg-white"
              />
            </div>

            <div>
              <label className="block font-medium text-neutral-700 mb-1">
                Satuan Pendidikan (SMP/MTs) <span className="text-neutral-400">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.sekolah}
                onChange={(e) => setFormData({ ...formData, sekolah: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-neutral-900 bg-white"
              />
            </div>
            <div>
              <label className="block font-medium text-neutral-700 mb-1">
                Kabupaten / Kota
              </label>
              <input
                type="text"
                value={formData.kota}
                onChange={(e) => setFormData({ ...formData, kota: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs focus:outline-none focus:border-neutral-900 bg-white"
              />
            </div>

            <div>
              <label className="block font-medium text-neutral-700 mb-1">
                Nama Kepala Sekolah
              </label>
              <input
                type="text"
                value={formData.kepalaSekolah}
                onChange={(e) => setFormData({ ...formData, kepalaSekolah: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-neutral-300 text-xs focus:outline-none focus:border-neutral-900 bg-white"
              />
            </div>
            <div>
              <label className="block font-medium text-neutral-700 mb-1">
                NIP Kepala Sekolah
              </label>
              <input
                type="text"
                value={formData.nipKepalaSekolah}
                onChange={(e) => setFormData({ ...formData, nipKepalaSekolah: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-neutral-300 font-mono text-xs focus:outline-none focus:border-neutral-900 bg-white"
              />
            </div>
          </div>

          <div className="pt-3 flex items-center justify-between">
            {savedSuccess ? (
              <span className="text-neutral-900 font-mono text-xs font-medium flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> Perubahan profil disimpan
              </span>
            ) : <div />}

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-medium shadow-2xs transition-all"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Simpan Profil</span>
            </button>
          </div>
        </form>
      </div>

      {/* Backup File JSON Offline */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-2xs p-6 md:p-8 space-y-4">
        <div className="border-b border-neutral-200 pb-3">
          <h2 className="font-serif text-lg font-medium text-neutral-900">
            Cadangan File Offline (JSON)
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Gunakan file JSON jika ingin mencadangkan data secara mandiri ke flashdisk atau komputer tanpa koneksi internet.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-2">
            <h3 className="font-serif text-sm font-medium text-neutral-900">Unduh File Cadangan</h3>
            <p className="text-xs text-neutral-500">
              Unduh seluruh file data siswa, nilai poin, dan modul.
            </p>
            <button
              onClick={exportAllDataAsJSON}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-medium shadow-2xs transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh File (.json)</span>
            </button>
          </div>

          <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-2">
            <h3 className="font-serif text-sm font-medium text-neutral-900">Impor File Cadangan</h3>
            <p className="text-xs text-neutral-500">
              Pulihkan data dari file `.json` cadangan sebelumnya.
            </p>
            <label className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-neutral-300 hover:border-neutral-900 text-neutral-900 rounded-lg text-xs font-medium shadow-2xs transition-all cursor-pointer">
              <Upload className="w-3.5 h-3.5" />
              <span>Pilih File (.json)</span>
              <input
                type="file"
                accept=".json"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
          <span className="text-xs text-neutral-500">
            Kembalikan ke data contoh awal Informatika:
          </span>
          <button
            onClick={handleReset}
            className="px-3 py-1 bg-white border border-neutral-300 hover:border-neutral-900 text-neutral-700 text-xs font-medium rounded-lg transition-colors"
          >
            Reset Contoh Awal
          </button>
        </div>
      </div>

    </div>
  );
}
