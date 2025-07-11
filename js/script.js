// Vin Nesia JavaScript
// Last Updated: 2025-07-12T06:23:00+07:00

document.addEventListener('DOMContentLoaded', () => {
    // Toggle Navigation
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Filter Categories
    const categoryButtons = document.querySelectorAll('.category-btn');
    const articles = document.querySelectorAll('article');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const category = button.getAttribute('data-category');

            articles.forEach(article => {
                if (category === 'all') {
                    article.style.display = 'block';
                } else {
                    const articleCategory = article.getAttribute('data-category');
                    if (articleCategory === category) {
                        article.style.display = 'block';
                    } else {
                        article.style.display = 'none';
                    }
                }
            });
        });
    });

    // Animate on Scroll
    const animateElements = document.querySelectorAll('.animate-fade, .animate-slide');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(element => {
        observer.observe(element);
    });
});
