// Profile data
const profiles = [
    {
        id: 1,
        name: "Anush Jowin A",
        role: "Full Stack Developer",
        specialty: "React & Node.js Expert",
        avatar: "assets/Anush.jpg",
        description: "Passionate full-stack developer with 5+ years of experience building scalable web applications. Specialized in modern JavaScript frameworks and cloud architecture with a focus on creating seamless user experiences.",
        skills: [
            { name: "React/Next.js", level: 95, color: "linear-gradient(135deg, #61dafb, #21759b)" },
            { name: "Node.js", level: 90, color: "linear-gradient(135deg, #68a063, #3c5a3c)" },
            { name: "TypeScript", level: 88, color: "linear-gradient(135deg, #3178c6, #235a97)" },
            { name: "AWS/Cloud", level: 82, color: "linear-gradient(135deg, #ff9900, #cc7700)" },
            { name: "MongoDB", level: 85, color: "linear-gradient(135deg, #4db33d, #3d8b2a)" }
        ],
        experience: "5+ years",
        projects: 2,
        clients: 4,
        email: "anush.jowin@btech.christuniversity.in",
        phone: "7892027931",
        location: "Bangalore,Karnataka",
        social: {
            github: "anushjowin",
            linkedin: "anushjowin",
            twitter: "anushjowin"
        },
        color: "linear-gradient(135deg, #667eea, #764ba2)",
        statusColor: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {
        id: 2,
        name: "Harshdeep Sharma",
        role: "UX/UI Designer",
        specialty: "Design Systems & User Research",
        avatar: "assets/harsh.jpg",
        description: "Creative UX/UI designer focused on creating intuitive and beautiful digital experiences. Expert in design systems, user research, and prototyping with a passion for solving complex user problems through elegant design solutions.",
        skills: [
            { name: "Figma/Adobe XD", level: 96, color: "linear-gradient(135deg, #f24e1e, #a259ff)" },
            { name: "User Research", level: 92, color: "linear-gradient(135deg, #ff6b6b, #ee5a24)" },
            { name: "Design Systems", level: 90, color: "linear-gradient(135deg, #4834d4, #686de0)" },
            { name: "Prototyping", level: 88, color: "linear-gradient(135deg, #00d2d3, #54a0ff)" },
            { name: "HTML/CSS", level: 78, color: "linear-gradient(135deg, #ff9ff3, #f368e0)" }
        ],
        experience: "2+ years",
        projects: 2,
        clients: 4,
        email: "harshdeep.sharma@btech.christuniversity.in",
        phone: "9492601634",
        location: "Bangalore,Karnataka",
        social: {
            linkedin: "harshdeep",
            twitter: "harshdeep"
        },
        color: "linear-gradient(135deg, #f093fb, #f5576c)",
        statusColor: "linear-gradient(135deg, #ff9a9e, #fecfef)"
    },
    {
        id: 3,
        name: "R Jerphin",
        role: "Data Scientist",
        specialty: "ML & Analytics",
        avatar: "assets/jerphin.jpg",
        description: "Data scientist with expertise in machine learning, statistical analysis, and big data processing. Transforms complex data into actionable business insights using cutting-edge AI technologies and advanced analytics methodologies.",
        skills: [
            { name: "Python/R", level: 94, color: "linear-gradient(135deg, #3776ab, #ffd43b)" },
            { name: "Machine Learning", level: 91, color: "linear-gradient(135deg, #ff6b6b, #4ecdc4)" },
            { name: "SQL/Databases", level: 89, color: "linear-gradient(135deg, #45b7d1, #96ceb4)" },
            { name: "Data Visualization", level: 87, color: "linear-gradient(135deg, #f39c12, #e74c3c)" },
            { name: "Statistics", level: 93, color: "linear-gradient(135deg, #9b59b6, #3498db)" }
        ],
        experience: "4+ years",
        projects: 3,
        clients: 2,
        email: "r.jerphin@gmail.com",
        phone: "7305695031",
        location: "Bangalore,Karnataka",
        social: {
            github: "R Jerphin",
            linkedin: "R Jerphin",
            twitter: "R Jerphin"
        },
        color: "linear-gradient(135deg, #4facfe, #00f2fe)",
        statusColor: "linear-gradient(135deg, #43e97b, #38f9d7)"
    },
    {
        id: 4,
        name: "Lijo Paul M E",
        role: "Digital Marketing Strategist",
        specialty: "Growth & Social Media",
        avatar: "assets/lijo.jpg",
        description: "Results-driven digital marketing strategist specializing in growth hacking, social media campaigns, and conversion optimization for tech startups. Expert in building brand awareness and driving measurable business growth through innovative marketing strategies.",
        skills: [
            { name: "Growth Marketing", level: 93, color: "linear-gradient(135deg, #fa709a, #fee140)" },
            { name: "Social Media", level: 95, color: "linear-gradient(135deg, #a8edea, #fed6e3)" },
            { name: "Analytics/SEO", level: 88, color: "linear-gradient(135deg, #ff8a80, #ea4c89)" },
            { name: "Content Strategy", level: 90, color: "linear-gradient(135deg, #667eea, #764ba2)" },
            { name: "Paid Advertising", level: 86, color: "linear-gradient(135deg, #f093fb, #f5576c)" }
        ],
        experience: "3+ years",
        projects: 3,
        clients: 4,
        email: "m.e@btech.christuniversity.in",
        phone: "74186586338",
        location: "Bangalore,Karnataka",
        social: {
            linkedin: "Lijo Paul M E",
            twitter: "Lijo Paul M E",
            instagram: "Lijo Paul M E"
        },
        color: "linear-gradient(135deg, #fa709a, #fee140)",
        statusColor: "linear-gradient(135deg, #ff9a9e, #fecfef)"
    }
];

let selectedProfile = profiles[0];

// jQuery Document Ready
$(document).ready(function() {
    // Initialize the application
    initializeApp();
    
    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 1000, 'easeInOutCubic');
        }
    });
    
    // Scroll indicator click
    $('.scroll-indicator').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#profiles').offset().top - 80
        }, 1000, 'easeInOutCubic');
    });
    
    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.custom-navbar').addClass('scrolled');
        } else {
            $('.custom-navbar').removeClass('scrolled');
        }
        
        // Animate elements on scroll
        animateOnScroll();
    });
    
    // Initialize animations
    animateOnScroll();
});

// Initialize the application
function initializeApp() {
    renderProfileCards();
    renderProfileDetail();
    
    // Add fade-in classes to elements
    $('.profile-card').addClass('fade-in');
    $('.stat-card').addClass('fade-in');
    $('.contact-card').addClass('fade-in');
}

// Render profile cards
function renderProfileCards() {
    const container = $('#profileCards');
    
    const cardsHTML = profiles.map(profile => `
        <div class="col-lg-3 col-md-6 mb-4">
            <div class="profile-card ${profile.id === selectedProfile.id ? 'active' : ''}" 
                 data-profile-id="${profile.id}">
                <div class="profile-avatar">
                    <img src="${profile.avatar}" alt="${profile.name}" loading="lazy">
                    <div class="profile-status" style="background: ${profile.statusColor}"></div>
                </div>
                <h3 class="profile-name">${profile.name}</h3>
                <p class="profile-role">${profile.role}</p>
                <p class="profile-specialty">${profile.specialty}</p>
            </div>
        </div>
    `).join('');
    
    container.html(cardsHTML);
    
    // Add click event listeners
    $('.profile-card').on('click', function() {
        const profileId = parseInt($(this).data('profile-id'));
        selectProfile(profileId);
    });
}

// Select profile
function selectProfile(profileId) {
    selectedProfile = profiles.find(p => p.id === profileId);
    
    // Update active state
    $('.profile-card').removeClass('active');
    $(`.profile-card[data-profile-id="${profileId}"]`).addClass('active');
    
    // Render profile detail with animation
    $('#profileDetail').fadeOut(300, function() {
        renderProfileDetail();
        $(this).fadeIn(300);
    });
    
    // Scroll to profile details
    setTimeout(() => {
        $('html, body').animate({
            scrollTop: $('.profile-details-section').offset().top - 80
        }, 800, 'easeInOutCubic');
    }, 400);
}

// Render profile detail
function renderProfileDetail() {
    const profile = selectedProfile;
    const container = $('#profileDetail');
    
    const detailHTML = `
        <div class="row">
            <div class="col-12">
                <div class="profile-header text-center">
                    <div class="profile-main-avatar">
                        <img src="${profile.avatar}" alt="${profile.name}" loading="lazy">
                        <div class="profile-main-status" style="background: ${profile.statusColor}"></div>
                    </div>
                    <h2 class="profile-main-name">${profile.name}</h2>
                    <h3 class="profile-main-role">${profile.role}</h3>
                    <div class="profile-badge" style="background: ${profile.color}">
                        ${profile.specialty}
                    </div>
                    <p class="profile-description">${profile.description}</p>
                </div>
            </div>
        </div>

        <div class="row g-4 mb-4">
            <div class="col-lg-4 col-md-6">
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-calendar-alt"></i>
                    </div>
                    <div class="stat-value">${profile.experience}</div>
                    <div class="stat-label">Experience</div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-project-diagram"></i>
                    </div>
                    <div class="stat-value">${profile.projects}+</div>
                    <div class="stat-label">Projects Completed</div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="stat-value">${profile.clients}+</div>
                    <div class="stat-label">Happy Clients</div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="skills-section">
                    <h4 class="skills-title">
                        <i class="fas fa-chart-line"></i>
                        Skills & Expertise
                    </h4>
                    <div class="row">
                        ${profile.skills.map(skill => `
                            <div class="col-lg-6 mb-3">
                                <div class="skill-item">
                                    <div class="skill-header">
                                        <span class="skill-name">${skill.name}</span>
                                        <span class="skill-percentage">${skill.level}%</span>
                                    </div>
                                    <div class="skill-bar">
                                        <div class="skill-progress" 
                                             style="background: ${skill.color}; width: 0%"
                                             data-width="${skill.level}%">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="profile-header">
                    <h4 class="skills-title">
                        <i class="fas fa-address-card"></i>
                        Contact Information
                    </h4>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="contact-info-item mb-4">
                                <div class="d-flex align-items-center">
                                    <div class="contact-icon me-3" style="width: 50px; height: 50px; background: ${profile.color};">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <h6 class="mb-1" style="color: white;">Email</h6>
                                        <p class="mb-0" style="color: rgba(255,255,255,0.8);">${profile.email}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="contact-info-item mb-4">
                                <div class="d-flex align-items-center">
                                    <div class="contact-icon me-3" style="width: 50px; height: 50px; background: ${profile.color};">
                                        <i class="fas fa-phone"></i>
                                    </div>
                                    <div>
                                        <h6 class="mb-1" style="color: white;">Phone</h6>
                                        <p class="mb-0" style="color: rgba(255,255,255,0.8);">${profile.phone}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="contact-info-item">
                                <div class="d-flex align-items-center">
                                    <div class="contact-icon me-3" style="width: 50px; height: 50px; background: ${profile.color};">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <h6 class="mb-1" style="color: white;">Location</h6>
                                        <p class="mb-0" style="color: rgba(255,255,255,0.8);">${profile.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <h6 class="mb-3" style="color: white;">Social Links</h6>
                            <div class="social-links justify-content-start">
                                ${profile.social.github ? `
                                    <a href="#" class="social-link me-3">
                                        <i class="fab fa-github"></i>
                                    </a>
                                ` : ''}
                                ${profile.social.linkedin ? `
                                    <a href="#" class="social-link me-3">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                ` : ''}
                                ${profile.social.twitter ? `
                                    <a href="#" class="social-link me-3">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                ` : ''}
                                ${profile.social.instagram ? `
                                    <a href="#" class="social-link me-3">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.html(detailHTML);
    
    // Animate skill bars
    setTimeout(() => {
        $('.skill-progress').each(function() {
            const width = $(this).data('width');
            $(this).animate({ width: width }, 1500, 'easeOutCubic');
        });
    }, 300);
}

// Animate elements on scroll
function animateOnScroll() {
    $('.fade-in, .slide-in-left, .slide-in-right').each(function() {
        const elementTop = $(this).offset().top;
        const elementBottom = elementTop + $(this).outerHeight();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();
        
        if (elementBottom > viewportTop && elementTop < viewportBottom) {
            $(this).addClass('visible');
        }
    });
}

// Custom easing functions
$.easing.easeInOutCubic = function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
};

$.easing.easeOutCubic = function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
};

// Utility functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Optimized scroll handler
const optimizedScroll = debounce(function() {
    animateOnScroll();
}, 10);

$(window).on('scroll', optimizedScroll);

// Preload images
function preloadImages() {
    profiles.forEach(profile => {
        const img = new Image();
        img.src = profile.avatar;
    });
}

// Initialize image preloading
preloadImages();

// Add loading states
function showLoading(element) {
    element.html('<div class="text-center"><div class="loading"></div></div>');
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });

}
