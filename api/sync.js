// Serverless Function untuk Vercel (Sinkronisasi Data Otomatis Antar Perangkat)
// Menggunakan Vercel KV / Upstash Redis (Free Tier) atau Memory Fallback

export default async function handler(req, res) {
  // Set CORS headers agar bisa diakses dari berbagai origin
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const KV_URL = process.env.KV_REST_API_URL;
  const KV_TOKEN = process.env.KV_REST_API_TOKEN;

  // Jika Vercel KV sudah diaktifkan di dashboard Vercel
  if (KV_URL && KV_TOKEN) {
    const key = 'sipena_informatika_data';

    if (req.method === 'GET') {
      try {
        const response = await fetch(`${KV_URL}/get/${key}`, {
          headers: {
            Authorization: `Bearer ${KV_TOKEN}`
          }
        });
        const json = await response.json();
        if (json.result) {
          const data = typeof json.result === 'string' ? JSON.parse(json.result) : json.result;
          return res.status(200).json({ success: true, source: 'vercel-kv', data });
        }
        return res.status(200).json({ success: false, message: 'Data belum tersimpan di cloud' });
      } catch (err) {
        return res.status(500).json({ success: false, error: err.message });
      }
    }

    if (req.method === 'POST') {
      try {
        const payload = req.body;
        const response = await fetch(`${KV_URL}/set/${key}`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${KV_TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        const json = await response.json();
        return res.status(200).json({ success: true, message: 'Data berhasil disinkronkan ke Vercel KV', result: json });
      } catch (err) {
        return res.status(500).json({ success: false, error: err.message });
      }
    }
  }

  // Jika belum pasang Vercel KV (Panduan instruksi)
  return res.status(200).json({
    success: false,
    mode: 'local-only',
    message: 'Vercel KV belum terhubung. Silakan klik tab "Storage" di dashboard Vercel lalu buat "KV Database" gratis.'
  });
}
