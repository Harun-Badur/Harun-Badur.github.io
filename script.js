// Typewriter animation için JavaScript kodu
document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.querySelector('.typewriter-text');

    if (!typewriterElement) return;

    const words = [
        'Yapay Zeka',
        'Vibe Coding',
        'Ürün Yönetimi',
        'Proje Yönetimi',
        'İş Geliştirme'
    ];

    let currentWordIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let typingSpeed = 100;

    // İlk kelimeyi başlangıçta göster
    typewriterElement.textContent = words[0];

    function typeWriter() {
        const currentWord = words[currentWordIndex];

        if (isDeleting) {
            // Deleting text
            currentText = currentWord.substring(0, currentText.length - 1);
        } else {
            // Typing text
            currentText = currentWord.substring(0, currentText.length + 1);
        }

        typewriterElement.textContent = currentText;

        // Speed up deleting and slow down typing
        if (isDeleting) {
            typingSpeed = 50;
        } else {
            typingSpeed = 150;
        }

        // If word is complete
        if (!isDeleting && currentText === currentWord) {
            // Pause at end of word
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentText === '') {
            // Move to next word
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            typingSpeed = 500;
        }

        setTimeout(typeWriter, typingSpeed);
    }

    // Start the typewriter effect
    setTimeout(typeWriter, 1000);

    // Counter animation for stats
    const counters = document.querySelectorAll('[data-count]');
    const speed = 50;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-count');
                const count = +counter.innerText;

                const inc = target / speed;
                let i = count;

                const updateCount = () => {
                    if (i < target) {
                        counter.innerText = Math.ceil(i + inc);
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCount();
                counterObserver.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollY = window.scrollY;
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Skill bars animation
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const progress = skillBar.querySelector('.skill-progress');
                const width = progress.style.width;

                progress.style.width = '0';
                setTimeout(() => {
                    progress.style.width = width;
                }, 200);

                skillObserver.unobserve(skillBar);
            }
        });
    }, {
        threshold: 0.3
    });

    document.querySelectorAll('.skill-item').forEach(skill => {
        skillObserver.observe(skill);
    });

    // Project filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            projectCards.forEach(card => {
                const tech = card.getAttribute('data-tech');
                if (filter === 'all' || tech.includes(filter)) {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                    card.style.pointerEvents = 'auto';
                } else {
                    card.style.opacity = '0.3';
                    card.style.transform = 'scale(0.9)';
                    card.style.pointerEvents = 'none';
                }
            });
        });
    });



    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // Parallax effect for floating elements
    const floatingElements = document.querySelectorAll('.floating-element');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const rate = scrollY * -0.5;

        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.2;
            element.style.transform = `translateY(${rate * speed}px)`;
        });
    });

    // Intersection Observer for section animations
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });

    // Initialize sections with opacity 0 for animation
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Hero section already visible
    document.getElementById('hero').style.opacity = '1';
    document.getElementById('hero').style.transform = 'translateY(0)';
});

function toggleReadMore(button) {
    const description = button.parentElement;
    const fullText = description.textContent;
    const shortText = fullText.split('.')[0] + '...';

    if (button.textContent === 'Daha Fazlasını Gör...') {
        description.innerHTML = fullText;
        button.textContent = 'Daha Azını Gör';
    } else {
        description.innerHTML = shortText + ' <button class="read-more-btn" onclick="toggleReadMore(this)">Daha Fazlasını Gör...</button>';
    }
}
