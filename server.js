const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// Data untuk website
const jadwal = [
    { hari: 'Senin', ruang: 'R.301', waktu: '08:00-10:00', mataKuliah: 'Pemrograman Web' },
    { hari: 'Senin', ruang: 'R.302', waktu: '10:00-12:00', mataKuliah: 'Basis Data' },
    { hari: 'Selasa', ruang: 'R.303', waktu: '08:00-10:00', mataKuliah: 'Jaringan Komputer' },
    { hari: 'Selasa', ruang: 'R.304', waktu: '10:00-12:00', mataKuliah: 'Sistem Operasi' },
    { hari: 'Selasa', ruang: 'R.305', waktu: '13:00-15:00', mataKuliah: 'Struktur Data' },
    { hari: 'Rabu', ruang: 'R.306', waktu: '08:00-10:00', mataKuliah: 'Algoritma' },
    { hari: 'Rabu', ruang: 'R.307', waktu: '10:00-12:00', mataKuliah: 'Pemrograman Mobile' },
    { hari: 'Kamis', ruang: 'R.308', waktu: '08:00-10:00', mataKuliah: 'Kecerdasan Buatan' },
    { hari: 'Kamis', ruang: 'R.309', waktu: '10:00-12:00', mataKuliah: 'Data Mining' },
    { hari: 'Jumat', ruang: 'R.310', waktu: '08:00-10:00', mataKuliah: 'Keamanan Informasi' }
];

const galeri = [
    { judul: 'Kegiatan Kelas 1', deskripsi: 'Diskusi kelompok tentang pemrograman', date: '2025-01-15' },
    { judul: 'Kegiatan Kelas 2', deskripsi: 'Presentasi project akhir', date: '2025-01-20' },
    { judul: 'Kegiatan Kelas 3', deskripsi: 'Workshop teknologi terkini', date: '2025-02-05' },
    { judul: 'Kegiatan Kelas 4', deskripsi: 'Seminar kewirausahaan', date: '2025-02-10' },
    { judul: 'Kegiatan Kelas 5', deskripsi: 'Lomba coding internal', date: '2025-02-15' },
    { judul: 'Kegiatan Kelas 6', deskripsi: 'Kunjungan industri', date: '2025-02-20' },
    { judul: 'Kegiatan Kelas 7', deskripsi: 'Pelatihan soft skill', date: '2025-03-01' },
    { judul: 'Kegiatan Kelas 8', deskripsi: 'Acara tahunan kelas', date: '2025-03-05' }
];

const members = [
    'Ahmad Rizki', 'Budi Santoso', 'Citra Dewi', 'Dian Pratama', 
    'Eko Wijaya', 'Fitri Amelia', 'Guntur Alam', 'Hana Sari',
    'Irfan Maulana', 'Joko Susilo', 'Kartika Wati', 'Lukman Hakim',
    'Maya Sari', 'Nova Pratama', 'Oki Setiawan', 'Putri Anggraini'
];

// Routes
app.get('/', (req, res) => {
    res.render('loading', { title: 'Loading - TI B UNISBA Blitar' });
});

app.get('/home', (req, res) => {
    res.render('home', { 
        title: 'Home - TI B UNISBA Blitar',
        activePage: 'home'
    });
});

app.get('/anggota', (req, res) => {
    res.render('anggota', { 
        title: 'Anggota - TI B UNISBA Blitar', 
        members: members,
        activePage: 'anggota'
    });
});

app.get('/galeri', (req, res) => {
    res.render('galeri', { 
        title: 'Galeri - TI B UNISBA Blitar', 
        galeri: galeri,
        activePage: 'galeri'
    });
});

app.get('/jadwal', (req, res) => {
    res.render('jadwal', { 
        title: 'Jadwal Kuliah - TI B UNISBA Blitar', 
        jadwal: jadwal,
        activePage: 'jadwal'
    });
});

// 404 Handler
app.use((req, res) => {
    res.status(404).render('404');
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('404', {
        title: 'Error - TI B UNISBA Blitar',
        message: 'Terjadi kesalahan pada server'
    });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server TI B UNISBA running on port ${PORT}`);
    console.log(`📍 Local: http://localhost:${PORT}`);
    console.log(`✅ Ready for production deployment`);
});