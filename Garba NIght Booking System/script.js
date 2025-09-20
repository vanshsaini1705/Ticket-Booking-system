// Simplified JavaScript file for Garba Night Website
class GarbaNightWebsite {
    constructor() {
        this.init();
    }

    init() {
        this.initializeCountdown();
        this.loadDynamicContent();
        this.setupEventListeners();
    }

    // Initialize countdown timer
    initializeCountdown() {
        if (!CONFIG.features?.enableCountdown) return;

        try {
            const eventDate = ConfigHelper.getEventDate();
            if (!eventDate || isNaN(eventDate.getTime())) {
                console.warn('Invalid event date in configuration');
                return;
            }
        
            const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = eventDate.getTime() - now;

            if (distance < 0) {
                document.getElementById('countdown').innerHTML = '<div class="time-unit"><span class="time-value">Event</span><span class="time-label">Started!</span></div>';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        };

            updateCountdown();
            setInterval(updateCountdown, 1000);
        } catch (error) {
            console.error('Error initializing countdown:', error);
        }
    }

    // Load dynamic content from configuration
    loadDynamicContent() {
        // Update page title
        document.title = `${CONFIG.event.name} ${CONFIG.event.year} - ${CONFIG.college.name}`;

        // Update hero section
        if (document.getElementById('heroTitleMain')) {
            document.getElementById('heroTitleMain').textContent = CONFIG.event.name;
        }
        if (document.getElementById('eventVenue')) {
            document.getElementById('eventVenue').textContent = CONFIG.event.venue;
        }

        // Update background images
        const heroImage = document.getElementById('heroImage');
        if (heroImage) heroImage.src = CONFIG.ui.heroBackground;

        // Update logo and college info
        if (document.getElementById('siteLogo')) {
            document.getElementById('siteLogo').src = CONFIG.college.logo;
        }
        if (document.getElementById('collegeLink')) {
            document.getElementById('collegeLink').href = CONFIG.college.website;
        }

        // Update about section
        if (document.getElementById('aboutP1')) {
            document.getElementById('aboutP1').textContent = CONFIG.college.description;
        }

        // Update college image
        if (document.getElementById('collegeImage')) {
            document.getElementById('collegeImage').src = CONFIG.ui.collegeImage;
        }

        // Update contact information with error handling
        try {
            if (document.getElementById('contactEmail') && CONFIG.contact?.email) {
                document.getElementById('contactEmail').textContent = CONFIG.contact.email;
                document.getElementById('contactEmail').href = `mailto:${CONFIG.contact.email}`;
            }
            
            // Note: Phone numbers are now structured in HTML, not from config
            // as they need individual names displayed
        } catch (error) {
            console.warn('Error updating contact information:', error);
        }

        // Update event details
        if (document.getElementById('eventDate')) {
            document.getElementById('eventDate').textContent = CONFIG.event.date;
        }
        if (document.getElementById('eventTime')) {
            document.getElementById('eventTime').textContent = CONFIG.event.time;
        }

        // Update footer
        if (document.getElementById('footerCopyright')) {
            document.getElementById('footerCopyright').textContent = ` ${CONFIG.event.year} ${CONFIG.college.name}. All rights reserved.`;
        }

        // Load developers section
        this.loadDevelopersSection();

        // Load rules content
        this.loadRulesContent();
    }

    // Load developers section
    loadDevelopersSection() {
        if (!CONFIG.features.enableDeveloperSection) return;

        const developersGrid = document.getElementById('developersGrid');
        if (!developersGrid) return;

        developersGrid.innerHTML = CONFIG.developers.map(dev => `
            <div class="developer-card">
                <h3>${dev.name}</h3>
                <p>${dev.role}</p>
                <div class="social-links">
                    ${dev.social.github ? `<a href="${dev.social.github}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
                    ${dev.social.linkedin ? `<a href="${dev.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>` : ''}
                    ${dev.social.instagram ? `<a href="${dev.social.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>` : ''}
                </div>
            </div>
        `).join('');
        // Prepare rules content once for quick open
        this.prepareRulesContent();
    }

    // Load rules content
    loadRulesContent() {
        const rulesContent = document.getElementById('rulesContent');
        if (!rulesContent) return;

        rulesContent.innerHTML = `
            ${CONFIG.rules.content.map(category => `
                <div class="rule-category">
                    <h3>${category.category}</h3>
                    <ul>
                        ${category.rules.map(rule => `<li>${rule}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        `;
    }

    // Setup event listeners
    setupEventListeners() {
        // Smooth scrolling for navigation links
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

        // CTA: Open maps
        window.openMaps = () => {
            const url = ConfigHelper.getMapUrl();
            window.open(url, '_blank');
        };

        // Rules modal open/close handlers
        window.openRulesModal = () => {
            const modal = document.getElementById('rulesModal');
            if (!modal) return;
            // Ensure content is prepared
            this.prepareRulesContent();
            modal.style.display = 'flex';
            document.body.classList.add('modal-open');
        };

        window.closeRulesModal = () => {
            const modal = document.getElementById('rulesModal');
            if (!modal) return;
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        };

        // Close modal on overlay click
        document.addEventListener('click', (e) => {
            const modal = document.getElementById('rulesModal');
            if (!modal || modal.style.display !== 'block') return;
            if (e.target === modal) {
                window.closeRulesModal();
            }
        });

        // Close modal on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                window.closeRulesModal();
            }
        });

        // Map integration
        if (CONFIG.features.enableMapIntegration) {
            const mapElements = document.querySelectorAll('[onclick*="openMap"]');
            mapElements.forEach(element => {
                element.addEventListener('click', () => {
                    window.openMaps();
                });
            });
        }
    }

    // Build rules HTML into the modal body
    prepareRulesContent() {
        const rulesContent = document.getElementById('rulesContent');
        if (!rulesContent || !CONFIG.rules?.content) return;
        // Only rebuild if empty to avoid duplicate work
        if (rulesContent.getAttribute('data-built') === 'true') return;

        rulesContent.innerHTML = `
            ${CONFIG.rules.content.map(category => `
                <div class="rule-category">
                    <h3>${category.category}</h3>
                    <ul>
                        ${category.rules.map(rule => `<li>${rule}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        `;
        rulesContent.setAttribute('data-built', 'true');
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const rulesModal = document.getElementById('rulesModal');
    if (event.target === rulesModal) {
        if (window.closeRulesModal) window.closeRulesModal();
    }
});

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.garbaNight = new GarbaNightWebsite();
});

// Handle hash-based navigation (remove student login functionality)
window.addEventListener('hashchange', function() {
    // Remove any hash-based routing for student login
    if (window.location.hash === '#student') {
        window.location.hash = '';
    }
});

// Floating navigation toggle
function toggleFloatingNav() {
    const menu = document.getElementById('floatingNavMenu');
    const toggle = document.querySelector('.nav-toggle');
    
    menu.classList.toggle('active');
    
    // Add rotation animation to hamburger icon
    toggle.classList.toggle('active');
}

// Close floating nav when clicking outside
document.addEventListener('click', function(event) {
    const floatingNav = document.querySelector('.floating-nav');
    const menu = document.getElementById('floatingNavMenu');
    const toggle = document.querySelector('.nav-toggle');
    
    if (floatingNav && !floatingNav.contains(event.target)) {
        menu.classList.remove('active');
        toggle.classList.remove('active');
    }
});

// Close menu when clicking on nav links
document.querySelectorAll('.floating-nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const menu = document.getElementById('floatingNavMenu');
        const toggle = document.querySelector('.nav-toggle');
        
        menu.classList.remove('active');
        toggle.classList.remove('active');
    });
});

// Close menu on scroll
let scrollTimeout;
window.addEventListener('scroll', function() {
    const menu = document.getElementById('floatingNavMenu');
    const toggle = document.querySelector('.nav-toggle');
    
    if (menu && menu.classList.contains('active')) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            menu.classList.remove('active');
            toggle.classList.remove('active');
        }, 150);
    }
});

// Close menu on window resize
window.addEventListener('resize', function() {
    const menu = document.getElementById('floatingNavMenu');
    const toggle = document.querySelector('.nav-toggle');
    
    if (menu && menu.classList.contains('active')) {
        menu.classList.remove('active');
        toggle.classList.remove('active');
    }
});
