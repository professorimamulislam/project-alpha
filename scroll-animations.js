// Scroll Animations using Intersection Observer API
// Elements will animate in as they enter the viewport

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // 1. INTERSECTION OBSERVER SETUP
    // ============================================
    
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Optional: Stop observing after animation (uncomment if needed)
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // ============================================
    // 2. APPLY ANIMATIONS TO ELEMENTS
    // ============================================
    
    // Animate section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.classList.add('scroll-animate', 'fade-up');
        observer.observe(title);
    });
    
    // Animate section subtitles
    const sectionSubtitles = document.querySelectorAll('.section-subtitle');
    sectionSubtitles.forEach(subtitle => {
        subtitle.classList.add('scroll-animate', 'fade-up');
        observer.observe(subtitle);
    });
    
    // Animate service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.classList.add('scroll-animate', 'fade-up');
        card.style.transitionDelay = `${index * 0.1}s`; // Stagger animation
        observer.observe(card);
    });
    
    // Animate portfolio cards
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach((card, index) => {
        card.classList.add('scroll-animate', 'fade-up');
        card.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(card);
    });
    
    // Animate blog cards
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach((card, index) => {
        card.classList.add('scroll-animate', 'fade-up');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Animate achievement cards
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach((card, index) => {
        card.classList.add('scroll-animate', 'scale-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Animate skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.classList.add('scroll-animate', 'fade-up');
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
    
    // Animate contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach((card, index) => {
        card.classList.add('scroll-animate', 'fade-up');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Animate social cards
    const socialCards = document.querySelectorAll('.social-card');
    socialCards.forEach((card, index) => {
        card.classList.add('scroll-animate', 'fade-in');
        card.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(card);
    });
    
    // Animate about text
    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        aboutText.classList.add('scroll-animate', 'fade-in');
        observer.observe(aboutText);
    }
    
    // Animate profile card
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        profileCard.classList.add('scroll-animate', 'scale-in');
        observer.observe(profileCard);
    }
    
    // Animate hero highlights
    const heroHighlights = document.querySelectorAll('.highlight');
    heroHighlights.forEach((highlight, index) => {
        highlight.classList.add('scroll-animate', 'fade-up');
        highlight.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(highlight);
    });
    
    // ============================================
    // 3. NAVBAR SCROLL EFFECT
    // ============================================
    
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide navbar on scroll down, show on scroll up
        if (currentScroll > lastScroll && currentScroll > 500) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
        
        lastScroll = currentScroll;
    });
    
    // ============================================
    // 4. SMOOTH SCROLL FOR NAVIGATION LINKS
    // ============================================
    
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                const hamburger = document.querySelector('.hamburger');
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });
    
    // ============================================
    // 5. PROGRESS BAR (SCROLL INDICATOR)
    // ============================================
    
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
    
    // ============================================
    // 6. BACK TO TOP BUTTON
    // ============================================
    
    // Create back to top button
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ============================================
    // 7. PARALLAX EFFECT
    // ============================================
    
    const parallaxElements = document.querySelectorAll('.hero, .about, .services, .contact');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = 0.5; // Adjust for parallax intensity
            const yPos = -(scrolled * speed);
            
            if (element.querySelector('::before') || element.querySelector('::after')) {
                element.style.transform = `translateY(${yPos * 0.3}px)`;
            }
        });
    });
    
    // ============================================
    // 8. TYPING EFFECT FOR HERO TITLE (OPTIONAL)
    // ============================================
    
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle && heroTitle.hasAttribute('data-typing')) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.opacity = '1';
        
        let index = 0;
        function type() {
            if (index < text.length) {
                heroTitle.textContent += text.charAt(index);
                index++;
                setTimeout(type, 50); // Typing speed
            }
        }
        
        // Start typing after page load
        setTimeout(type, 500);
    }
    
    // ============================================
    // 9. NUMBER COUNTER ANIMATION
    // ============================================
    
    const counters = document.querySelectorAll('[data-count]');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const count = parseInt(target.getAttribute('data-count'));
                let current = 0;
                const increment = count / 100; // Adjust speed
                
                const updateCounter = () => {
                    current += increment;
                    if (current < count) {
                        target.textContent = Math.ceil(current) + '+';
                        requestAnimationFrame(updateCounter);
                    } else {
                        target.textContent = count + '+';
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
    
    console.log('✨ Scroll animations initialized successfully!');
});
