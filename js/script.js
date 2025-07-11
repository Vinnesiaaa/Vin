document.addEventListener('DOMContentLoaded', () => {
    console.log('Vin Nesia Blog Loaded - Updated 2025-07-12 04:26 WIB');

    // Hamburger menu toggle with adjusted positioning awareness
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Trigger animations
    const animateElements = document.querySelectorAll('.animate-fade, .animate-slide, .animate-pulse');
    animateElements.forEach(element => {
        element.style.animationPlayState = 'running';
    });

    // Fade-in animation for articles
    const articles = document.querySelectorAll('.blog-posts article');
    articles.forEach((article, index) => {
        setTimeout(() => {
            article.style.opacity = '1';
            article.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Auto-scroll to top if hash is detected
    if (window.location.hash) {
        window.scrollTo(0, 0);
    }

    // Handle "Baca Sekarang" button click to ensure navigation
    const readNowButtons = document.querySelectorAll('.cta-button');
    readNowButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const href = button.getAttribute('href');
            if (href) {
                // Check if the file exists before navigating
                fetch(href)
                    .then(response => {
                        if (response.ok) {
                            window.location.href = href;
                        } else {
                            console.error(`File ${href} not found. Check your path or upload the file.`);
                            alert('Artikel belum tersedia. Silakan cek kembali nanti!');
                        }
                    })
                    .catch(error => {
                        console.error('Error fetching article:', error);
                        alert('Terjadi kesalahan. Silakan coba lagi!');
                    });
            } else {
                console.error('No href attribute found on button');
                alert('Tautan artikel belum diatur!');
            }
        });
    });

    // Filter articles by category
    const filterButtons = document.querySelectorAll('.category-card[data-filter]');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-filter');
                articles.forEach(article => {
                    const articleCategory = article.getAttribute('data-category');
                    if (category === 'all' || articleCategory === category) {
                        article.style.display = 'block';
                    } else {
                        article.style.display = 'none';
                    }
                });
            });
        });
    }
});
