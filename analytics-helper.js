// Google Analytics Helper Functions
// Advanced event tracking and custom metrics

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Check if Google Analytics is loaded
function isAnalyticsLoaded() {
    return typeof gtag !== 'undefined';
}

// ============================================
// PAGE VIEW TRACKING
// ============================================

// Track virtual page views (for single-page applications)
function trackPageView(pagePath, pageTitle) {
    if (isAnalyticsLoaded()) {
        gtag('config', 'G-XXXXXXXXXX', {
            page_path: pagePath,
            page_title: pageTitle
        });
        console.log('📊 Page view tracked:', pageTitle);
    }
}

// ============================================
// EVENT TRACKING
// ============================================

// Track button clicks
function trackButtonClick(buttonName, buttonLocation) {
    if (isAnalyticsLoaded()) {
        gtag('event', 'click', {
            event_category: 'Button',
            event_label: buttonName,
            event_action: 'Click',
            button_location: buttonLocation
        });
        console.log('🖱️ Button click tracked:', buttonName);
    }
}

// Track form submissions
function trackFormSubmission(formName, formLocation) {
    if (isAnalyticsLoaded()) {
        gtag('event', 'form_submit', {
            event_category: 'Form',
            event_label: formName,
            form_location: formLocation
        });
        console.log('📝 Form submission tracked:', formName);
    }
}

// Track downloads
function trackDownload(fileName, fileType) {
    if (isAnalyticsLoaded()) {
        gtag('event', 'file_download', {
            event_category: 'Download',
            event_label: fileName,
            file_type: fileType
        });
        console.log('⬇️ Download tracked:', fileName);
    }
}

// Track external link clicks
function trackExternalLink(url, linkText) {
    if (isAnalyticsLoaded()) {
        gtag('event', 'click', {
            event_category: 'External Link',
            event_label: url,
            link_text: linkText,
            event_action: 'Click'
        });
        console.log('🔗 External link tracked:', url);
    }
}

// Track email clicks
function trackEmailClick(emailAddress) {
    if (isAnalyticsLoaded()) {
        gtag('event', 'click', {
            event_category: 'Email',
            event_label: emailAddress,
            event_action: 'Click'
        });
        console.log('📧 Email click tracked');
    }
}

// Track phone clicks
function trackPhoneClick(phoneNumber) {
    if (isAnalyticsLoaded()) {
        gtag('event', 'click', {
            event_category: 'Phone',
            event_label: phoneNumber,
            event_action: 'Click'
        });
        console.log('📞 Phone click tracked');
    }
}

// Track social media clicks
function trackSocialClick(platform, action) {
    if (isAnalyticsLoaded()) {
        gtag('event', 'social', {
            event_category: 'Social Media',
            event_label: platform,
            event_action: action
        });
        console.log('👥 Social click tracked:', platform);
    }
}

// ============================================
// SCROLL TRACKING
// ============================================

// Track scroll depth
function trackScrollDepth(percentage) {
    if (isAnalyticsLoaded()) {
        gtag('event', 'scroll', {
            event_category: 'Engagement',
            event_label: `${percentage}% Scrolled`,
            event_action: 'Scroll Depth',
            value: percentage
        });
        console.log('📜 Scroll depth tracked:', percentage + '%');
    }
}

// Automatic scroll depth tracking
let scrollTracked = {
    '25': false,
    '50': false,
    '75': false,
    '100': false
};

window.addEventListener('scroll', function() {
    const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
    
    if (scrollPercent >= 25 && !scrollTracked['25']) {
        trackScrollDepth(25);
        scrollTracked['25'] = true;
    }
    if (scrollPercent >= 50 && !scrollTracked['50']) {
        trackScrollDepth(50);
        scrollTracked['50'] = true;
    }
    if (scrollPercent >= 75 && !scrollTracked['75']) {
        trackScrollDepth(75);
        scrollTracked['75'] = true;
    }
    if (scrollPercent >= 100 && !scrollTracked['100']) {
        trackScrollDepth(100);
        scrollTracked['100'] = true;
    }
});

// ============================================
// TIME TRACKING
// ============================================

// Track time spent on page
let pageLoadTime = Date.now();

function trackTimeOnPage() {
    const timeSpent = Math.round((Date.now() - pageLoadTime) / 1000); // seconds
    
    if (isAnalyticsLoaded()) {
        gtag('event', 'timing', {
            event_category: 'Engagement',
            event_label: 'Time on Page',
            value: timeSpent,
            event_action: 'Time Spent'
        });
        console.log('⏱️ Time on page tracked:', timeSpent + 's');
    }
}

// Track time before leaving page
window.addEventListener('beforeunload', function() {
    trackTimeOnPage();
});

// ============================================
// VIDEO TRACKING (if you add videos)
// ============================================

function trackVideoPlay(videoTitle) {
    if (isAnalyticsLoaded()) {
        gtag('event', 'video_start', {
            event_category: 'Video',
            event_label: videoTitle,
            event_action: 'Play'
        });
        console.log('▶️ Video play tracked:', videoTitle);
    }
}

function trackVideoComplete(videoTitle) {
    if (isAnalyticsLoaded()) {
        gtag('event', 'video_complete', {
            event_category: 'Video',
            event_label: videoTitle,
            event_action: 'Complete'
        });
        console.log('✅ Video complete tracked:', videoTitle);
    }
}

// ============================================
// LANGUAGE TRACKING
// ============================================

function trackLanguageChange(fromLang, toLang) {
    if (isAnalyticsLoaded()) {
        gtag('event', 'language_change', {
            event_category: 'Engagement',
            event_label: `${fromLang} to ${toLang}`,
            event_action: 'Language Switch',
            from_language: fromLang,
            to_language: toLang
        });
        console.log('🌐 Language change tracked:', fromLang, '→', toLang);
    }
}

// ============================================
// SEARCH TRACKING (if you add search)
// ============================================

function trackSiteSearch(searchTerm, resultsCount) {
    if (isAnalyticsLoaded()) {
        gtag('event', 'search', {
            event_category: 'Site Search',
            event_label: searchTerm,
            search_term: searchTerm,
            results_count: resultsCount
        });
        console.log('🔍 Search tracked:', searchTerm);
    }
}

// ============================================
// CONVERSION TRACKING
// ============================================

// Track when someone reaches contact section
function trackContactReached() {
    if (isAnalyticsLoaded()) {
        gtag('event', 'conversion', {
            event_category: 'Conversion',
            event_label: 'Contact Section Reached',
            event_action: 'View'
        });
        console.log('🎯 Contact section reached');
    }
}

// Track portfolio item views
function trackPortfolioView(projectName) {
    if (isAnalyticsLoaded()) {
        gtag('event', 'view_item', {
            event_category: 'Portfolio',
            event_label: projectName,
            event_action: 'View'
        });
        console.log('🖼️ Portfolio view tracked:', projectName);
    }
}

// Track service interest
function trackServiceInterest(serviceName) {
    if (isAnalyticsLoaded()) {
        gtag('event', 'generate_lead', {
            event_category: 'Service',
            event_label: serviceName,
            event_action: 'Interest'
        });
        console.log('💼 Service interest tracked:', serviceName);
    }
}

// ============================================
// ERROR TRACKING
// ============================================

// Track JavaScript errors
window.addEventListener('error', function(e) {
    if (isAnalyticsLoaded()) {
        gtag('event', 'exception', {
            description: e.message,
            fatal: false
        });
        console.log('❌ Error tracked:', e.message);
    }
});

// ============================================
// PERFORMANCE TRACKING
// ============================================

// Track page load time
window.addEventListener('load', function() {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    
    if (isAnalyticsLoaded()) {
        gtag('event', 'timing_complete', {
            name: 'Page Load',
            value: loadTime,
            event_category: 'Performance'
        });
        console.log('⚡ Page load time tracked:', loadTime + 'ms');
    }
});

// ============================================
// AUTO-SETUP EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Track all external links
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        // Skip if it's your own domain
        if (!link.href.includes(window.location.hostname)) {
            link.addEventListener('click', function() {
                trackExternalLink(this.href, this.textContent);
            });
        }
    });
    
    // Track email links
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        link.addEventListener('click', function() {
            trackEmailClick(this.href.replace('mailto:', ''));
        });
    });
    
    // Track phone links
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function() {
            trackPhoneClick(this.href.replace('tel:', ''));
        });
    });
    
    // Track social media clicks
    document.querySelectorAll('.social-card, .social-link').forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.querySelector('span')?.textContent || 'Unknown';
            trackSocialClick(platform, 'Click');
        });
    });
    
    // Track CTA buttons
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
        button.addEventListener('click', function() {
            trackButtonClick(this.textContent.trim(), this.closest('section')?.id || 'Unknown');
        });
    });
    
    // Track when contact section is viewed
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        const contactObserver = new IntersectionObserver(function(entries) {
            if (entries[0].isIntersecting) {
                trackContactReached();
                contactObserver.disconnect(); // Only track once
            }
        }, { threshold: 0.5 });
        
        contactObserver.observe(contactSection);
    }
    
    // Track portfolio views
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.addEventListener('click', function() {
            const projectName = this.querySelector('h3')?.textContent || 'Unknown Project';
            trackPortfolioView(projectName);
        });
    });
    
    // Track service card clicks
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function() {
            const serviceName = this.querySelector('h3')?.textContent || 'Unknown Service';
            trackServiceInterest(serviceName);
        });
    });
    
    console.log('✅ Analytics helper initialized - Event tracking ready!');
});

// ============================================
// CUSTOM DIMENSIONS (ADVANCED)
// ============================================

// Track user type (returning vs new)
function setUserType(isReturning) {
    if (isAnalyticsLoaded()) {
        gtag('set', 'user_properties', {
            user_type: isReturning ? 'Returning' : 'New'
        });
    }
}

// Check if user is returning
const isReturningUser = localStorage.getItem('hasVisited');
setUserType(!!isReturningUser);
localStorage.setItem('hasVisited', 'true');

// ============================================
// EXPORT FUNCTIONS (if using modules)
// ============================================

// If you're using ES6 modules, uncomment below:
/*
export {
    trackPageView,
    trackButtonClick,
    trackFormSubmission,
    trackDownload,
    trackExternalLink,
    trackEmailClick,
    trackPhoneClick,
    trackSocialClick,
    trackScrollDepth,
    trackLanguageChange,
    trackSiteSearch,
    trackContactReached,
    trackPortfolioView,
    trackServiceInterest
};
*/

console.log('📊 Google Analytics Helper Loaded!');
