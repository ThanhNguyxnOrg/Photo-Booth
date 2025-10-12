// ============================================
// Smooth Page Transitions
// ============================================

// Mark HTML as loaded
document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.classList.add('loaded');
});

// Smooth page transition on link clicks
document.addEventListener('DOMContentLoaded', function() {
    // Get all internal links
    const links = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href$=".html"]');
    
    links.forEach(link => {
        // Skip links that open in new tab
        if (link.getAttribute('target') === '_blank') return;
        
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just a hash link on same page
            if (href.startsWith('#')) return;
            
            // Prevent default navigation
            e.preventDefault();
            
            // Add transition class
            document.body.classList.add('page-transition');
            
            // Navigate after animation
            setTimeout(() => {
                window.location.href = href;
            }, 300); // Match with CSS transition duration
        });
    });
});

// Prevent page from being cached (for back button)
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        document.body.classList.remove('page-transition');
        document.documentElement.classList.add('loaded');
    }
});

// Optimize scroll performance
let ticking = false;
window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            // Your scroll handler here if needed
            ticking = false;
        });
        ticking = true;
    }
});

// Preload critical resources
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        // Preload next likely pages
        const preloadLinks = [
            'templates.html',
            'layout.html',
            'customize.html',
            'camera.html',
            'preview.html'
        ];
        
        preloadLinks.forEach(link => {
            const linkElement = document.createElement('link');
            linkElement.rel = 'prefetch';
            linkElement.href = link;
            document.head.appendChild(linkElement);
        });
    });
}
