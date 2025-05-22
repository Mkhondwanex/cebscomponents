
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navList = document.getElementById('navList');
  
  if(mobileMenuBtn && navList) {
    mobileMenuBtn.addEventListener('click', function() {
      navList.classList.toggle('active');
      
      // Change the hamburger to X
      const spans = this.querySelectorAll('span');
      if(spans.length === 3) {
        if(navList.classList.contains('active')) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
        } else {
          spans[0].style.transform = 'none';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'none';
        }
      }
    });
    
    // Close menu when clicking on a nav link
    const navLinks = navList.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navList.classList.remove('active');
        
        // Reset hamburger icon
        const spans = mobileMenuBtn.querySelectorAll('span');
        if(spans.length === 3) {
          spans[0].style.transform = 'none';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'none';
        }
      });
    });
  }
  
  // Set active nav link based on current page
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if(href === currentPath || 
       (href === '/' && (currentPath === '/' || currentPath === '/index.html')) ||
       (href !== '/' && currentPath.includes(href))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  // Animate elements on scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.section-header, .service-card, .about-content, .about-image, .testimonial-box, .gallery-grid');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if(elementTop < windowHeight * 0.8) {
        element.classList.add('animate-fade-in');
      }
    });
  };
  
  // Run once on load
  animateOnScroll();
  
  // And then on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Create a sticky header on scroll
  const header = document.querySelector('.header');
  
  if(header) {
    window.addEventListener('scroll', function() {
      if(window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
      } else {
        header.style.padding = '15px 0';
        header.style.boxShadow = 'none';
      }
    });
  }
});
