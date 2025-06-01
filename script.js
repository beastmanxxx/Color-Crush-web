// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
    
    gsap.to(cursorFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3
    });
});

// Hero section animations
gsap.to('.main-title', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.5
});

gsap.to('.subtitle', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.7
});

gsap.to('.cta-button', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.9
});

gsap.to('.logo-image', {
    opacity: 1,
    scale: 1,
    duration: 1,
    delay: 0.5
});

// Features section animations
gsap.utils.toArray('.feature-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.2
    });
});

// Games section animations
gsap.utils.toArray('.game-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.2
    });
});

// About section animations
gsap.from('.about-content', {
    scrollTrigger: {
        trigger: '.about-content',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 0.8
});

gsap.utils.toArray('.about-feature, .detail-item, .step').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: i * 0.2
    });
});

// Section title animations
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Smooth scroll for navigation links with specific behavior
document.querySelectorAll('.nav-link, .footer-section a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        const targetElement = document.querySelector(target);
        
        if (target === '#home') {
            // Scroll to top
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: 0,
                    autoKill: false
                },
                ease: 'power2.inOut'
            });
        } else if (target === '#features') {
            // Scroll to features section
            const featuresSection = document.querySelector('#features');
            const featuresOffset = featuresSection.offsetTop;
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: featuresOffset,
                    autoKill: false
                },
                ease: 'power2.inOut'
            });
        } else if (target === '#about') {
            // Scroll to about section
            const aboutSection = document.querySelector('#about');
            const aboutOffset = aboutSection.offsetTop;
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: aboutOffset,
                    autoKill: false
                },
                ease: 'power2.inOut'
            });
        }
    });
});

// Hover animations for buttons and links
const hoverElements = document.querySelectorAll('.cta-button, .nav-link, .login-btn, .game-card, .feature-card');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 1.5,
            duration: 0.3
        });
        gsap.to(cursorFollower, {
            scale: 1.5,
            duration: 0.3
        });
    });
    
    element.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            duration: 0.3
        });
        gsap.to(cursorFollower, {
            scale: 1,
            duration: 0.3
        });
    });
});

// Add parallax effect to hero section
window.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    gsap.to('.hero-content', {
        x: moveX,
        y: moveY,
        duration: 1
    });
    
    gsap.to('.logo-image', {
        x: -moveX * 2,
        y: -moveY * 2,
        duration: 1
    });
}); 