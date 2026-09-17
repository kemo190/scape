/**
 * SCAPE - Animations
 * Handles GSAP animations, scroll effects, and page transitions.
 */

class AnimationController {
    constructor() {
        // Register GSAP plugins
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            this.init();
        } else {
            console.warn('GSAP not loaded.');
        }
    }

    init() {
        this.initHeroAnimations();
        this.initParallaxEffects();
        this.initAboutAnimations();
        this.initServicesAnimations();
        this.initWorkAnimations();
        this.initProjectsAnimations();
        this.initPartnersAnimations();

        // Sub-pages animations
        this.initContactPageAnimations();
        this.initServicesPageAnimations();
        this.initPortfolioPageAnimations();
        this.initAboutPageAnimations();
    }

    initHeroAnimations() {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Initial setup for elements
        gsap.set('.navbar', { y: -100, opacity: 0 });
        gsap.set('.hero__eyebrow', { opacity: 0, y: 20 });
        gsap.set('.headline-text', { yPercent: 100 });
        gsap.set('.hero__description', { opacity: 0 });
        gsap.set('.hero__cta', { opacity: 0, y: 20 });
        gsap.set('.hero__background', { clipPath: 'inset(100% 0% 0% 0%)' });
        gsap.set('.hero__bg-image', { scale: 1.2 });
        gsap.set('.discipline-item', { opacity: 0, x: 20 });
        gsap.set('.stat-item', { opacity: 0, y: 20 });
        gsap.set('.hero__scroll-indicator', { opacity: 0 });

        // Animation sequence
        tl.to('.navbar', { y: 0, opacity: 1, duration: 1, delay: 0.2 })
          .to('.hero__background', { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: "power4.inOut" }, "-=0.5")
          .to('.hero__bg-image', { scale: 1.05, duration: 2, ease: "power2.out" }, "-=1.5")
          .to('.hero__eyebrow', { opacity: 1, y: 0, duration: 0.8 }, "-=1.2")
          .to('.headline-text', { yPercent: 0, duration: 1, stagger: 0.15 }, "-=1")
          .to('.hero__description', { opacity: 1, duration: 1 }, "-=0.6")
          .to('.hero__cta', { opacity: 1, y: 0, duration: 0.8 }, "-=0.8")
          .to('.discipline-item', { opacity: 1, x: 0, duration: 0.6, stagger: 0.1 }, "-=0.5")
          .to('.stat-item', { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, "-=0.5")
          .to('.hero__scroll-indicator', { opacity: 1, duration: 1 }, "-=0.2");
    }

    initParallaxEffects() {
        // Hero Image Scroll Parallax
        gsap.to('.hero__bg-image', {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        // Subtle Mouse Parallax
        const heroVisual = document.querySelector('.hero');
        const heroImage = document.querySelector('.hero__bg-image');
        
        if (heroVisual && heroImage) {
            heroVisual.addEventListener('mousemove', (e) => {
                const xPos = (e.clientX / window.innerWidth - 0.5) * 10;
                const yPos = (e.clientY / window.innerHeight - 0.5) * 10;
                
                gsap.to(heroImage, {
                    x: xPos,
                    y: yPos,
                    duration: 1,
                    ease: "power2.out"
                });
            });

            heroVisual.addEventListener('mouseleave', () => {
                gsap.to(heroImage, {
                    x: 0,
                    y: 0,
                    duration: 1,
                    ease: "power2.out"
                });
            });
        }
    }

    initAboutAnimations() {
        const aboutSection = document.querySelector('.about');
        if (!aboutSection) return;

        // Clear any old pinning/wrapper locks and force wrappers visible
        gsap.set(aboutSection, { clearProps: "all" });
        gsap.set(['.about__header', '.about__mission', '.about__index'], { autoAlpha: 1, clearProps: "transform" });

        // Build Entrance Timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutSection,
                start: "top 80%", // slightly lower to ensure it doesn't fire instantly on page load
                toggleActions: "play none none none"
            }
        });

        // Use standard from() tweens which automatically set initial states (immediateRender: true)
        tl.from('.about__visual', { clipPath: "inset(0% 100% 0% 0%)", duration: 0.7, ease: "power3.inOut" }, 0)
          .from('.about__image', { scale: 1.03, duration: 0.7, ease: "power2.out" }, 0)
          
          .from('.bp-tech-label', { autoAlpha: 0, y: 10, duration: 0.4, ease: "power2.out" }, 0.2)
          
          .from('.about__heading', { autoAlpha: 0, y: 25, duration: 0.6, ease: "power2.out" }, 0.3)
          
          .from('.about__description', { autoAlpha: 0, y: 15, duration: 0.5, ease: "power2.out" }, 0.4)
          
          .from('.index-item', { autoAlpha: 0, y: 15, duration: 0.4, stagger: 0.05, ease: "power2.out" }, 0.6)
          
          .from(['.mission-label', '.mission-statement', '.btn-minimal'], { autoAlpha: 0, y: 15, duration: 0.5, stagger: 0.1, ease: "power2.out" }, 0.8);
    }

    initServicesAnimations() {
        const servicesSection = document.querySelector('.services-preview');
        if (!servicesSection) return;

        // Ensure elements are clear of any old states
        gsap.set(servicesSection, { clearProps: "all" });

        // Build Entrance Timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: servicesSection,
                start: "top 80%", // Start when section enters viewport
                toggleActions: "play none none none"
            }
        });

        // Use standard fromTo tweens for a clean, editorial entrance and 100% safety
        tl.fromTo('.bp-tech-label', 
            { autoAlpha: 0, y: 15 }, 
            { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, 0)
          .fromTo('.sp-title', 
            { autoAlpha: 0, y: 20 }, 
            { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0.2)
          .fromTo('.sp-description', 
            { autoAlpha: 0, y: 15 }, 
            { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0.3)
          
          // Cards Entrance: Subtle upward reveal with stagger (Bulletproof fromTo)
          .fromTo('.sp-card', 
            { autoAlpha: 0, y: 30 }, 
            { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }, 0.3)
          
          // CTA Reveal
          .fromTo('.sp-cta', 
            { autoAlpha: 0, y: 15 }, 
            { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, 1.0);
    }

    initWorkAnimations() {
        const workSection = document.querySelector('.work-preview');
        if (!workSection) return;

        // Simplified Header Reveal
        const wTitle = workSection.querySelector('.wp-title');
        const wDesc = workSection.querySelector('.wp-description');
        const wLabel = workSection.querySelector('.bp-tech-label');
        
        gsap.fromTo([wLabel, wTitle, wDesc], 
            { autoAlpha: 0, y: 30 }, 
            { 
                autoAlpha: 1, 
                y: 0, 
                duration: 0.8, 
                stagger: 0.15, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: workSection,
                    start: "top 80%"
                }
            }
        );

        // Natural vertical reveal for each project as you scroll down
        const projects = gsap.utils.toArray('.wp-project');
        
        projects.forEach(project => {
            gsap.fromTo(project, 
                { autoAlpha: 0, y: 50 }, 
                { 
                    autoAlpha: 1, 
                    y: 0, 
                    duration: 0.8, 
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: project,
                        start: "top 85%"
                    }
                }
            );
        });
    }

    initProjectsAnimations() {
        const projectsSection = document.querySelector('.projects-section');
        if (!projectsSection) return;

        // Clear any old states
        gsap.set(projectsSection, { clearProps: "all" });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: projectsSection,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });

        // Header
        tl.fromTo('.ps-tech-label', 
            { autoAlpha: 0, y: 15 }, 
            { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0)
          .fromTo('.ps-title', 
            { autoAlpha: 0, y: 20 }, 
            { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0.2)
          .fromTo('.ps-description', 
            { autoAlpha: 0, y: 15 }, 
            { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, 0.3)
          
          // Cards Entrance: Subtle upward reveal with stagger (Bulletproof fromTo)
          .fromTo('.ps-card', 
            { autoAlpha: 0, y: 30 }, 
            { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }, 0.3)
          
          // CTA Reveal
          .fromTo('.ps-cta', 
            { autoAlpha: 0, y: 15 }, 
            { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, 1.0);
    }

    initPartnersAnimations() {
        const partnersSection = document.querySelector('.partners-section');
        if (!partnersSection) return;

        gsap.set(partnersSection, { clearProps: "all" });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: partnersSection,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });

        tl.fromTo('.pr-header', 
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" }
          )
          .fromTo('.pr-logo-item', 
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.4"
          )
          .fromTo('.pr-profile-area', 
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.2"
          );
    }

    // ==========================================
    // SUB-PAGES ANIMATIONS
    // ==========================================

    initContactPageAnimations() {
        const contactSection = document.querySelector('.contact-section');
        if (!contactSection) return;

        gsap.set(contactSection, { clearProps: 'all' });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: contactSection,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });

        // Header
        tl.fromTo('.contact-breadcrumb', 
            { autoAlpha: 0, x: 20 }, 
            { autoAlpha: 1, x: 0, duration: 0.6, ease: 'power2.out' }, 0)
          .fromTo('.contact-title', 
            { autoAlpha: 0, y: 20 }, 
            { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.2)
          
          // Contact Info Cards
          .fromTo('.c-item', 
            { autoAlpha: 0, y: 30 }, 
            { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' }, 0.4)
            
          // Form
          .fromTo('.contact-form-wrap', 
            { autoAlpha: 0, x: -30 }, 
            { autoAlpha: 1, x: 0, duration: 0.8, ease: 'power3.out' }, 0.6);
    }

    initServicesPageAnimations() {
        const servicesPage = document.querySelector('.s-section');
        if (!servicesPage) return;

        // Intro (Hero Banner)
        gsap.fromTo('.s-hero-banner__title', 
            { autoAlpha: 0, y: 20 }, 
            { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out' });

        gsap.fromTo('.s-hero-banner__subtitle', 
            { autoAlpha: 0, y: 20 }, 
            { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2 });

        // Service Cards
        gsap.fromTo('.s-card', 
            { autoAlpha: 0, y: 50 }, 
            { 
                autoAlpha: 1, 
                y: 0, 
                duration: 0.8, 
                stagger: 0.15, 
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.s-grid',
                    start: 'top 85%'
                }
            }
        );
    }

    initPortfolioPageAnimations() {
        const portfolioSection = document.getElementById('portfolio-section') || document.querySelector('.proj-section');
        if (!portfolioSection) return;
        
        // Header (portfolio uses p-hero-banner, projects uses s-hero-banner)
        gsap.fromTo('.p-hero-banner__title, .s-hero-banner__title', 
            { autoAlpha: 0, y: 20 }, 
            { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out' });

        gsap.fromTo('.p-hero-banner__subtitle, .s-hero-banner__subtitle', 
            { autoAlpha: 0, y: 20 }, 
            { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2 });

        // Usually cards are ps-card or wp-project or proj-card
        const cards = gsap.utils.toArray('.p-card, .proj-card');
        
        if (cards.length > 0) {
            cards.forEach(card => {
                gsap.fromTo(card, 
                    { autoAlpha: 0, y: 50 }, 
                    { 
                        autoAlpha: 1, 
                        y: 0, 
                        duration: 0.8, 
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%'
                        }
                    }
                );
            });
        }
    }

    initAboutPageAnimations() {
        const aboutPage = document.querySelector('.about-page');
        if (!aboutPage) return;

        // Intro
        gsap.fromTo('.ap-intro__title', 
            { autoAlpha: 0, y: 20 }, 
            { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out' });
            
        gsap.fromTo('.ap-intro__text p', 
            { autoAlpha: 0, y: 20 }, 
            { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out', delay: 0.2 });

        // Mission & Vision
        const mvSection = document.querySelector('.ap-mission-vision');
        if (mvSection) {
            gsap.fromTo('.mv-card', 
                { autoAlpha: 0, y: 40 }, 
                { 
                    autoAlpha: 1, 
                    y: 0, 
                    duration: 0.8, 
                    stagger: 0.2, 
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: mvSection,
                        start: 'top 80%'
                    }
                }
            );
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.animationController = new AnimationController();
});
