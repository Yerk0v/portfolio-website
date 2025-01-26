// static/js/scripts.js

// ===== Funcionalidades del Template Original (adaptadas) =====
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling con offset para la navbar fija
    document.querySelectorAll('a.js-scroll-trigger[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.hash);
        const navbarHeight = document.querySelector('#sideNav').offsetHeight;
        const offset = target.offsetTop - navbarHeight;
  
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
        
        // Cerrar menú en móviles
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navbarCollapse).hide();
        }
      });
    });
  
    // Scrollspy de Bootstrap
    new bootstrap.ScrollSpy(document.body, {
      target: '#sideNav',
      offset: 100
    });
  });
  
  // ===== Tus Animaciones Personalizadas =====
  const initScrollAnimations = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.project-card, .skill-item, .resume-item').forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  };
  
  // ===== Inicialización General =====
  document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    
    // Inicializar tooltips de Bootstrap (opcional)
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  });