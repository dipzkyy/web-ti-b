// ✅ CORE APPLICATION LOGIC
class TI_B_App {
  constructor() {
    this.init();
  }

  init() {
    this.setupGlobalEvents();
    this.setupNavigation();
    this.setupPageTransitions();
    this.setCurrentDate();
  }

  setupGlobalEvents() {
    window.addEventListener('error', this.handleGlobalError);
    
    window.addEventListener('load', () => {
      document.body.classList.add('page-loaded');
      sessionStorage.setItem('pageLoaded', 'true');
    });
  }

  setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link[href^="/"]');
    navLinks.forEach(link => {
      link.addEventListener('click', this.handleNavClick);
    });
  }

  setupPageTransitions() {
    this.initializeIntersectionObserver();
  }

  initializeIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.page-section').forEach(section => {
      observer.observe(section);
    });
  }

  setCurrentDate() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
      const updateDate = () => {
        const today = new Date();
        const options = { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        };
        dateElement.textContent = today.toLocaleDateString('id-ID', options);
      };
      
      updateDate();
      // Update every second
      setInterval(updateDate, 1000);
    }
  }

  handleGlobalError(event) {
    console.error('Global error:', event.error);
  }

  handleNavClick(e) {
    if (!e.target.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = e.target.getAttribute('href');
      
      document.body.classList.add('page-exit');
      setTimeout(() => {
        window.location.href = target;
      }, 500);
    }
  }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  new TI_B_App();
});