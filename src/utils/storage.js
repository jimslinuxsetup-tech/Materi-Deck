import {
  informaticsTeacherProfile,
  initialStudents,
  initialClasses,
  initialInformaticsMaterials,
  initialInformaticsJournal
} from '../data/informaticsData';

const KEYS = {
  PROFILE: 'sipena_inf_profile_v2',
  STUDENTS: 'sipena_inf_students_v2',
  CLASSES: 'sipena_inf_classes_v2',
  MATERIALS: 'sipena_inf_materials_v2',
  JOURNAL: 'sipena_inf_journal_v2',
  LAST_SYNC: 'sipena_inf_last_sync_v2'
};

export const getStoredProfile = () => {
  try {
    const data = localStorage.getItem(KEYS.PROFILE);
    return data ? JSON.parse(data) : informaticsTeacherProfile;
  } catch (e) {
    return informaticsTeacherProfile;
  }
};

export const saveStoredProfile = (profile) => {
  try {
    localStorage.setItem(KEYS.PROFILE, JSON.stringify(profile));
  } catch (e) {}
};

export const getStoredStudents = () => {
  try {
    const data = localStorage.getItem(KEYS.STUDENTS);
    return data ? JSON.parse(data) : initialStudents;
  } catch (e) {
    return initialStudents;
  }
};

export const saveStoredStudents = (students) => {
  try {
    localStorage.setItem(KEYS.STUDENTS, JSON.stringify(students));
  } catch (e) {}
};

export const getStoredClasses = () => {
  try {
    const data = localStorage.getItem(KEYS.CLASSES);
    return data ? JSON.parse(data) : initialClasses;
  } catch (e) {
    return initialClasses;
  }
};

export const saveStoredClasses = (classes) => {
  try {
    localStorage.setItem(KEYS.CLASSES, JSON.stringify(classes));
  } catch (e) {}
};

export const getStoredMaterials = () => {
  try {
    const data = localStorage.getItem(KEYS.MATERIALS);
    return data ? JSON.parse(data) : initialInformaticsMaterials;
  } catch (e) {
    return initialInformaticsMaterials;
  }
};

export const saveStoredMaterials = (materials) => {
  try {
    localStorage.setItem(KEYS.MATERIALS, JSON.stringify(materials));
  } catch (e) {}
};

export const getStoredJournal = () => {
  try {
    const data = localStorage.getItem(KEYS.JOURNAL);
    return data ? JSON.parse(data) : initialInformaticsJournal;
  } catch (e) {
    return initialInformaticsJournal;
  }
};

export const saveStoredJournal = (journal) => {
  try {
    localStorage.setItem(KEYS.JOURNAL, JSON.stringify(journal));
  } catch (e) {}
};

// ================= CLOUD SYNC FUNCTIONS (VERCEL KV / SERVERLESS) ================= //

export const pushCloudSync = async (fullData) => {
  try {
    const res = await fetch('/api/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fullData)
    });
    const result = await res.json();
    if (result.success) {
      localStorage.setItem(KEYS.LAST_SYNC, new Date().toISOString());
    }
    return result;
  } catch (err) {
    return { success: false, error: err.message };
  }
};

export const fetchCloudSync = async () => {
  try {
    const res = await fetch('/api/sync');
    const result = await res.json();
    return result;
  } catch (err) {
    return { success: false, error: err.message };
  }
};

export const getLastSyncTime = () => {
  return localStorage.getItem(KEYS.LAST_SYNC) || null;
};

// ================= BACKUP & RESET ================= //

export const exportAllDataAsJSON = () => {
  const exportData = {
    appName: "SIPENA Informatika SMP - Minimalist",
    exportedAt: new Date().toISOString(),
    profile: getStoredProfile(),
    classes: getStoredClasses(),
    students: getStoredStudents(),
    materials: getStoredMaterials(),
    journal: getStoredJournal()
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `Informatika_SMP_Data_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
};

export const resetAllData = () => {
  localStorage.setItem(KEYS.PROFILE, JSON.stringify(informaticsTeacherProfile));
  localStorage.setItem(KEYS.STUDENTS, JSON.stringify(initialStudents));
  localStorage.setItem(KEYS.CLASSES, JSON.stringify(initialClasses));
  localStorage.setItem(KEYS.MATERIALS, JSON.stringify(initialInformaticsMaterials));
  localStorage.setItem(KEYS.JOURNAL, JSON.stringify(initialInformaticsJournal));
  return {
    profile: informaticsTeacherProfile,
    students: initialStudents,
    classes: initialClasses,
    materials: initialInformaticsMaterials,
    journal: initialInformaticsJournal
  };
};
