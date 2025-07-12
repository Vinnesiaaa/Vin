// Toggle navigasi untuk mobile
document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Validasi dan feedback newsletter
function validateNewsletter() {
    const email = document.getElementById('newsletter-email').value;
    const message = document.getElementById('newsletter-message');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
            document.querySelector('form').reset();
        }, 3000);
        return true;
    } else {
        alert('Mohon masukkan email yang valid!');
        return false;
    }
}

// Filter kategori sederhana (manual untuk saat ini)
function filterCategory() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
        const items = document.querySelectorAll('.berita-item');
        items.forEach(item => {
            const href = item.querySelector('a').getAttribute('href');
            const matches = [
                { cat: 'pertanian', href: 'cuaca-pertanian.html' },
                { cat: 'ekonomi', href: 'kebijakan-ekonomi.html' },
                { cat: 'teknologi', href: 'tekanan-global.html' },
                { cat: 'kesehatan-jiwa', href: 'migrasi-mental.html' },
                { cat: 'produktivitas', href: 'blog-post.html' },
                { cat: 'bisnis-online', href: 'cara-cepat-dapat-cuan-jadi-affiliate-tiktok.html' }
            ].some(match => match.cat === category && href.includes(match.href));
            item.style.display = matches ? 'block' : 'none';
        });
    }
}

// Redirect saat dropdown diubah
function redirectCategory(select) {
    if (select.value) {
        window.location.href = select.value;
    }
}

window.onload = filterCategory;
