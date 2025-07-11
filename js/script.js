document.addEventListener('DOMContentLoaded', () => {
    console.log('Vin Nesia Blog Loaded');

    // Hamburger menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Fade-in animation for articles
    const articles = document.querySelectorAll('.blog-posts article');
    articles.forEach((article, index) => {
        setTimeout(() => {
            article.style.opacity = '1';
            article.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
