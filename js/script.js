// Toggle menu navigasi saat tombol garis tiga diklik
document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Fungsi untuk memuat konten dinamis (opsional, jika diperlukan di masa depan)
// Contoh: Muat artikel secara asinkronus
function loadArticle(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.querySelector('main').innerHTML = html;
        })
        .catch(error => console.error('Error loading article:', error));
}

// Event listener untuk breadcrumb (opsional, jika ingin interaktif)
document.querySelectorAll('.breadcrumb a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
            // Tambahkan logika khusus jika diperlukan
        }
    });
});

// Validasi form newsletter
document.querySelector('.newsletter form').addEventListener('submit', function(e) {
    const email = document.querySelector('input[name="email"]').value;
    if (!email.includes('@') || !email.includes('.')) {
        e.preventDefault();
        alert('Mohon masukkan email yang valid!');
    }
});

// Animasi sederhana untuk tombol berlangganan (opsional)
const subscribeButton = document.querySelector('.newsletter button');
subscribeButton.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});
subscribeButton.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});
